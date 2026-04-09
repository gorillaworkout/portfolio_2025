"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

const QISCUS_WEBCHAT_URL = "https://multichannel.qiscus.com/web/ramo-29lun8b1ulepsaio"

export function QiscusWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 z-50 w-[360px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          style={{
            maxWidth: "calc(100vw - 32px)",
            maxHeight: "calc(100vh - 120px)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#62c1ab] text-white">
            <span className="font-semibold text-sm">Chat with Bayu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Qiscus Webchat Iframe */}
          <iframe
            src={QISCUS_WEBCHAT_URL}
            className="w-full h-full border-0 bg-white"
            style={{ height: "calc(100% - 48px)" }}
            allow="microphone; camera"
            title="Chat with Bayu"
          />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: "#62c1ab",
          color: "white",
        }}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <>
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-semibold">Ask Bayu</span>
          </>
        )}
      </button>
    </>
  )
}
