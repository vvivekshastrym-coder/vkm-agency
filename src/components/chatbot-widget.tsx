"use client";

import { useState } from "react";

const cannedReplies: Record<string, string> = {
  pricing: "Professional is our most popular plan for growing agencies. It combines a multi-page site, automations, analytics, and priority support.",
  portfolio: "You can explore featured work on the Portfolio page. Admin users can add projects through the dashboard model in the backend.",
  support: "The helpdesk supports tickets, FAQ guidance, and escalation-ready workflows. Email and WhatsApp channels can be connected too.",
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi, I'm the VKM assistant. Ask about pricing, portfolio, or support." },
  ]);

  function handlePrompt(prompt: keyof typeof cannedReplies) {
    setMessages((current) => [
      ...current,
      { role: "user", content: prompt },
      { role: "assistant", content: cannedReplies[prompt] },
    ]);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="glass-card w-[320px] rounded-[28px] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-display text-lg">VKM Assistant</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">AI concierge</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="text-muted">
              Close
            </button>
          </div>
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl p-3 text-sm ${message.role === "assistant" ? "bg-white/6 text-foreground" : "bg-brand text-slate-950"}`}
              >
                {message.content}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => handlePrompt("pricing")} className="rounded-full border px-3 py-2 text-xs text-muted">
              Pricing
            </button>
            <button type="button" onClick={() => handlePrompt("portfolio")} className="rounded-full border px-3 py-2 text-xs text-muted">
              Portfolio
            </button>
            <button type="button" onClick={() => handlePrompt("support")} className="rounded-full border px-3 py-2 text-xs text-muted">
              Support
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="animate-ring rounded-full bg-brand px-5 py-3 font-semibold text-slate-950 shadow-2xl"
        >
          Ask VKM AI
        </button>
      )}
    </div>
  );
}
