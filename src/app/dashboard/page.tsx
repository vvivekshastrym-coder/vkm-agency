import PageHero from "@/components/page-hero";

export default function DashboardPage() {
  return (
    <main className="pb-24 pt-32">
      <PageHero eyebrow="User Dashboard" title="A cleaner, more dimensional client workspace" description="Subscriptions, invoices, services, and support now sit inside a more premium dashboard shell with stronger visual depth." accent="violet" />
      <section className="section-shell mt-10 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="glass-card orb-panel rounded-[32px] p-6"><p className="font-display text-2xl">User Dashboard</p><nav className="mt-6 space-y-3 text-sm text-muted"><p>Overview</p><p>Subscriptions</p><p>Profile</p><p>Invoices</p><p>Purchased services</p><p>Support tickets</p></nav></aside>
        <section className="space-y-6"><div className="grid gap-4 md:grid-cols-3">{[["Active plan", "Professional"],["Invoices", "12"],["Open tickets", "2"]].map((card) => (<div key={card[0]} className="glass-card orb-panel rounded-[28px] p-6"><p className="text-sm uppercase tracking-[0.2em] text-muted">{card[0]}</p><p className="mt-3 font-display text-4xl">{card[1]}</p></div>))}</div><div className="glass-card orb-panel rounded-[32px] p-8"><h1 className="font-display text-4xl">Your services</h1><div className="mt-6 grid gap-4 md:grid-cols-2">{["Website redesign with CMS","AI lead qualification assistant","Monthly security review","Priority launch support"].map((item) => (<div key={item} className="rounded-[24px] border p-5 text-muted">{item}</div>))}</div></div></section>
      </section>
    </main>
  );
}
