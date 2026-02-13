import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

/**
 * Callback URL untuk Xero OAuth2
 * Redirect URI di Xero: https://gorillaworkout.id/uri
 *
 * Env yang dibutuhkan:
 * - XERO_CLIENT_ID
 * - XERO_CLIENT_SECRET
 * - (opsional) XERO_REDIRECT_URI -> default ke https://gorillaworkout.id/uri
 */
export async function GET(request: NextRequest) {
  const url = request.nextUrl
  const code = url.searchParams.get("code")
  const state = url.searchParams.get("state")
  const error = url.searchParams.get("error")
  const errorDescription = url.searchParams.get("error_description")

  if (error) {
    return NextResponse.json(
      {
        success: false,
        step: "authorization",
        error,
        errorDescription,
      },
      { status: 400 },
    )
  }

  if (!code) {
    return NextResponse.json(
      {
        success: false,
        message: "Kode otorisasi (code) tidak ditemukan di query string.",
      },
      { status: 400 },
    )
  }

  const clientId = process.env.XERO_CLIENT_ID
  const clientSecret = process.env.XERO_CLIENT_SECRET
  const redirectUri =
    process.env.XERO_REDIRECT_URI ?? "https://gorillaworkout.id/uri"

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Environment variable XERO_CLIENT_ID atau XERO_CLIENT_SECRET belum diset di server.",
      },
      { status: 500 },
    )
  }

  try {
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

    const tokenResponse = await fetch(
      "https://identity.xero.com/connect/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${basicAuth}`,
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
        }),
      },
    )

    const tokenJson = await tokenResponse.json()

    if (!tokenResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          step: "token_exchange",
          status: tokenResponse.status,
          error: tokenJson,
        },
        { status: 500 },
      )
    }

    // Di sini kamu bisa simpan token ke database / session / dsb.
    // Untuk sekarang kita return saja dalam bentuk JSON agar mudah dicek.
    return NextResponse.json(
      {
        success: true,
        state,
        token: tokenJson,
      },
      { status: 200 },
    )
  } catch (e) {
    console.error("Xero callback error:", e)
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi error saat menukar code dengan access token Xero.",
      },
      { status: 500 },
    )
  }
}

