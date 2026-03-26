"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { faqs, tickets } from "@/lib/site-data";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(faqs[0]?.question ?? "");

  return (
    <main className="pb-24 pt-32">
      <PageHero eyebrow="Helpdesk" title="Support that guides, not just reacts" description="The support experience includes FAQ guidance, ticket creation, a chatbot widget, and admin workflows for timely follow-up." accent="cyan" />
      <section className="section-shell mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card orb-panel rounded-[32px] p-8"><div className="space-y-4">{faqs.map((faq) => (<button key={faq.question} type="button" onClick={() => setOpenFaq(faq.question)} className="w-full rounded-[24px] border p-5 text-left"><p className="font-semibold">{faq.question}</p>{openFaq === faq.question ? <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p> : null}</button>))}</div></div>
        <div className="space-y-6">
          <div className="glass-card orb-panel rounded-[32px] p-8"><h2 className="font-display text-3xl">Support tickets</h2><div className="mt-6 space-y-4">{tickets.map((ticket) => (<div key={ticket.id} className="rounded-[24px] border p-5"><div className="flex flex-wrap items-center justify-between gap-3"><p className="font-semibold">{ticket.subject}</p><span className="chip">{ticket.status}</span></div><p className="mt-2 text-sm text-muted">{ticket.id} Â· Priority {ticket.priority}</p></div>))}</div></div>
          <form className="glass-card orb-panel rounded-[32px] p-8"><h2 className="font-display text-3xl">Open a ticket</h2><div className="mt-6 grid gap-4"><input className="rounded-2xl border bg-transparent px-4 py-3 outline-none" placeholder="Subject" /><select className="rounded-2xl border bg-transparent px-4 py-3 outline-none"><option>Billing</option><option>Technical support</option><option>New request</option></select><textarea className="min-h-36 rounded-2xl border bg-transparent px-4 py-3 outline-none" placeholder="Describe the issue" /></div><button type="submit" className="mt-6 rounded-full bg-brand px-6 py-3 font-semibold text-slate-950">Submit ticket</button></form>
        </div>
      </section>
    </main>
  );
}
