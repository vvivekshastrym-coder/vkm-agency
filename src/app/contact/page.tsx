import PageHero from "@/components/page-hero";

export default function ContactPage() {
  return (
    <main className="pb-24 pt-32">
      <PageHero eyebrow="Contact" title="Letâ€™s build the next version of VKM" description="Use this contact surface for project inquiries, support escalations, or partnerships. Email and WhatsApp handoff points are designed into the UI." accent="violet" />
      <section className="section-shell mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-card orb-panel rounded-[32px] p-8">
          <div className="space-y-4 text-sm text-muted"><p>Email: hello@vkmagency.com</p><p>WhatsApp: +91 90000 00000</p><p>Instagram: @vkmagency</p></div>
          <div className="mt-8 h-64 rounded-[28px] border border-line/70 bg-[radial-gradient(circle_at_center,#6fe7ff22,transparent_35%),linear-gradient(135deg,#12213d,#09111f)] p-4 text-sm text-muted">Google Maps integration placeholder</div>
        </div>
        <form className="glass-card orb-panel rounded-[32px] p-8">
          <p className="font-display text-3xl">Project inquiry form</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border bg-transparent px-4 py-3 outline-none" placeholder="Full name" />
            <input className="rounded-2xl border bg-transparent px-4 py-3 outline-none" placeholder="Email address" />
            <input className="rounded-2xl border bg-transparent px-4 py-3 outline-none md:col-span-2" placeholder="Company" />
            <textarea className="min-h-40 rounded-2xl border bg-transparent px-4 py-3 outline-none md:col-span-2" placeholder="Tell us about your goals" />
          </div>
          <button type="submit" className="mt-6 rounded-full bg-brand px-6 py-3 font-semibold text-slate-950">Send inquiry</button>
        </form>
      </section>
    </main>
  );
}
