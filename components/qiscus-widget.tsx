"use client"

import { useEffect } from "react"

const QISCUS_APP_ID = "ramo-29lun8b1ulepsaio"

export function QiscusWidget() {
  useEffect(() => {
    // Prevent double-init in strict mode
    if (document.getElementById("qismo-widget-script")) return

    // Load Qismo v2 widget script
    const script = document.createElement("script")
    script.id = "qismo-widget-script"
    script.src = "https://s3-ap-southeast-1.amazonaws.com/qiscus-sdk/public/qismo/qismo-v2.js"
    script.async = true
    script.onload = () => {
      // Initialize Qismo after script loads
      if (typeof (window as any).Qismo !== "undefined") {
        new (window as any).Qismo(QISCUS_APP_ID)
      }
    }
    document.body.appendChild(script)

    return () => {
      const existingScript = document.getElementById("qismo-widget-script")
      if (existingScript) existingScript.remove()
    }
  }, [])

  return null
}
