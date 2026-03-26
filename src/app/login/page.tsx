import PageHero from "@/components/page-hero";

export default function LoginPage() {
  return (
    <main className="pb-20 pt-28">
      <PageHero eyebrow="Authentication" title="Secure access for users and admins" description="The included backend supports email/password, Google OAuth, GitHub OAuth, JWT sessions, hashing, validation, and role-aware access control." accent="cyan" />
      <section className="section-shell mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="glass-card orb-panel rounded-[32px] p-8"><div className="space-y-3 text-sm text-muted"><p>Google OAuth ready</p><p>GitHub OAuth ready</p><p>Email/password login ready</p></div></div>
        <form className="glass-card orb-panel rounded-[32px] p-8"><h2 className="font-display text-3xl">Sign in</h2><div className="mt-6 grid gap-4"><input className="rounded-2xl border bg-transparent px-4 py-3 outline-none" placeholder="Email" /><input className="rounded-2xl border bg-transparent px-4 py-3 outline-none" placeholder="Password" type="password" /></div><button type="submit" className="mt-6 w-full rounded-full bg-brand px-5 py-3 font-semibold text-slate-950">Continue with Email</button><div className="mt-4 grid gap-3 md:grid-cols-2"><button type="button" className="rounded-full border px-5 py-3 text-sm">Google Login</button><button type="button" className="rounded-full border px-5 py-3 text-sm">GitHub Login</button></div></form>
      </section>
    </main>
  );
}
