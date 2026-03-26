"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { pricingPlans } from "@/lib/site-data";

export default function PricingPage() {
  const [mode, setMode] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="pb-24 pt-32">
      <PageHero eyebrow="Pricing" title="Subscriptions built for agency growth" description="Plans are structured for clear upgrades now, and backend models allow admin users to add or edit offers later." accent="cyan">
        <div className="glass-card inline-flex rounded-full p-2">
          <button type="button" onClick={() => setMode("monthly")} className={`rounded-full px-4 py-2 text-sm ${mode === "monthly" ? "bg-brand text-slate-950" : "text-muted"}`}>Monthly</button>
          <button type="button" onClick={() => setMode("yearly")} className={`rounded-full px-4 py-2 text-sm ${mode === "yearly" ? "bg-brand text-slate-950" : "text-muted"}`}>Yearly</button>
        </div>
      </PageHero>
      <section className="section-shell mt-10 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className="glass-card orb-panel rounded-[32px] p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">{plan.name}</p>
            <h2 className="mt-4 font-display text-5xl">{mode === "monthly" ? plan.monthly : plan.yearly}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{plan.description}</p>
            <ul className="mt-8 space-y-3 text-sm text-muted">{plan.features.map((feature) => (<li key={feature} className="rounded-2xl border border-line/70 px-4 py-3">{feature}</li>))}</ul>
            <button type="button" className="mt-8 w-full rounded-full bg-brand px-5 py-3 font-semibold text-slate-950">Subscribe</button>
          </article>
        ))}
      </section>
      <section className="section-shell mt-10"><div className="glass-card orb-panel rounded-[32px] p-8"><h2 className="font-display text-3xl">Feature comparison</h2><div className="mt-6 overflow-x-auto"><table className="min-w-full text-left text-sm"><thead className="text-muted"><tr><th className="pb-4">Feature</th><th className="pb-4">Starter</th><th className="pb-4">Professional</th><th className="pb-4">Enterprise</th></tr></thead><tbody>{[["Landing pages", "1", "5+", "Unlimited"],["AI automations", "Basic", "Advanced", "Custom"],["Support", "Email", "Priority", "SLA"],["Security review", "Checklist", "Hardened", "Full program"]].map((row) => (<tr key={row[0]} className="border-t border-line/60">{row.map((cell) => (<td key={cell} className="py-4 text-muted">{cell}</td>))}</tr>))}</tbody></table></div></div></section>
    </main>
  );
}
