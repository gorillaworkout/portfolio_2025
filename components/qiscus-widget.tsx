"use client"

import { useEffect } from "react"

const QISCUS_APP_ID = "ramo-29lun8b1ulepsaio"

export function QiscusWidget() {
  useEffect(() => {
    // Prevent double-init in strict mode
    if (document.getElementById("qismo-script")) return

    // Create the Qiscus Multichannel Widget script
    const script = document.createElement("script")
    script.id = "qismo-script"
    script.src = `https://multichannel.qiscus.com/qismo-widget.js?app_id=${QISCUS_APP_ID}`
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById("qismo-script")
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}
