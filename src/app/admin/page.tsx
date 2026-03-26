import PageHero from "@/components/page-hero";

export default function AdminPage() {
  return (
    <main className="pb-24 pt-32">
      <PageHero eyebrow="Admin Dashboard" title="Control content, subscriptions, uploads, and support from one command layer" description="The admin experience now opens with a stronger 3D panel treatment to match the rest of the VKM product language." accent="coral" />
      <section className="section-shell mt-10 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="glass-card orb-panel rounded-[32px] p-6"><p className="font-display text-2xl">Admin Dashboard</p><nav className="mt-6 space-y-3 text-sm text-muted"><p>Portfolio</p><p>Pricing plans</p><p>Gallery uploads</p><p>Users</p><p>Support tickets</p><p>Analytics</p><p>Content</p></nav></aside>
        <section className="space-y-6"><div className="grid gap-4 md:grid-cols-4">{[["Users", "184"],["Projects", "26"],["Tickets", "14"],["MRR", "$18.4k"]].map((card) => (<div key={card[0]} className="glass-card orb-panel rounded-[28px] p-6"><p className="text-sm uppercase tracking-[0.2em] text-muted">{card[0]}</p><p className="mt-3 font-display text-4xl">{card[1]}</p></div>))}</div><div className="grid gap-6 xl:grid-cols-2"><div className="glass-card orb-panel rounded-[32px] p-8"><h1 className="font-display text-4xl">Content management</h1><div className="mt-6 space-y-4 text-sm text-muted"><div className="rounded-[24px] border p-5">Portfolio upload queue is ready for backend CRUD.</div><div className="rounded-[24px] border p-5">Pricing plan editor can connect to `/api/plans`.</div><div className="rounded-[24px] border p-5">Gallery drag and drop maps to upload middleware.</div></div></div><div className="glass-card orb-panel rounded-[32px] p-8"><h2 className="font-display text-4xl">Support overview</h2><div className="mt-6 h-64 rounded-[28px] border border-line/70 bg-[radial-gradient(circle_at_center,#82ffb433,transparent_35%),linear-gradient(135deg,#12213d,#09111f)]" /></div></div></section>
      </section>
    </main>
  );
}
