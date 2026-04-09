"use client"

import Script from "next/script"

const QISCUS_APP_ID = "ramo-29lun8b1ulepsaio"

export function QiscusWidget() {
  return (
    <>
      <Script
        id="qismo-widget-script"
        src="https://s3-ap-southeast-1.amazonaws.com/qiscus-sdk/public/qismo/qismo-v2.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof (window as any).Qismo !== "undefined") {
            new (window as any).Qismo(QISCUS_APP_ID)
          }
        }}
      />
    </>
  )
}
