"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroCanvas from "@/components/hero-canvas";
import AnimatedStats from "@/components/animated-stats";
import PageOrb from "@/components/page-orb";
import { pricingPlans, projects, services, testimonials } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="particle-field pb-24 pt-24">
      <section className="section-shell relative overflow-hidden rounded-[36px] border border-line/80 px-6 py-10 md:px-10 md:py-16">
        <div className="hero-gradient" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <span className="chip">VKM Agency Platform</span>
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 font-display text-[clamp(3rem,7vw,6.5rem)] leading-none tracking-[-0.05em]"
            >
              Building Digital Experiences That Matter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-muted"
            >
              Premium websites, secure systems, AI automation, and growth-ready dashboards designed for ambitious brands.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-brand px-6 py-3 font-semibold text-slate-950">Start a Project</Link>
              <Link href="/portfolio" className="rounded-full border px-6 py-3 font-semibold text-foreground">Explore Portfolio</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted">
              <span className="chip">3D Hero</span>
              <span className="chip">AI Chatbot</span>
              <span className="chip">Helpdesk</span>
              <span className="chip">Admin Dashboard</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="glass-card orb-panel rounded-[32px] p-4"><HeroCanvas /></div>
            <div className="glass-card orb-panel rounded-[28px] p-4"><PageOrb accent="violet" className="h-[180px] md:h-[220px]" /></div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-20"><AnimatedStats /></section>

      <section className="section-shell mt-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="chip">Services Preview</p>
            <h2 className="section-title mt-4">High-impact systems for growth</h2>
          </div>
          <p className="section-copy">The VKM stack combines design, engineering, automation, and security so the site feels premium and the platform stays dependable.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 4).map((service, index) => (
            <motion.article key={service.title} whileHover={{ y: -8, rotateX: 8, rotateY: index % 2 === 0 ? -6 : 6 }} className="glass-card orb-panel rounded-[28px] p-6">
              <p className="text-sm text-brand">{service.icon}</p>
              <h3 className="mt-4 font-display text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-card orb-panel rounded-[28px] p-8">
          <p className="chip">Client Logos</p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-center text-lg text-muted md:grid-cols-3">
            {["LUMA", "NOVA", "ARC", "HELIOS", "QUANTA", "POLARIS"].map((brand) => (<div key={brand} className="rounded-2xl border border-line/70 px-4 py-6">{brand}</div>))}
          </div>
        </div>
        <div className="glass-card orb-panel rounded-[28px] p-8">
          <p className="chip">Testimonials</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-3xl border border-line/70 bg-white/4 p-5">
                <p className="text-sm leading-7 text-muted">{item.quote}</p>
                <p className="mt-6 font-semibold">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-6 lg:grid-cols-2">
        <div className="glass-card orb-panel rounded-[28px] p-8">
          <div className="flex items-center justify-between"><div><p className="chip">Portfolio Preview</p><h2 className="mt-4 font-display text-4xl">Selected launches</h2></div><Link href="/portfolio" className="text-sm text-brand">View all</Link></div>
          <div className="mt-8 space-y-4">{projects.slice(0, 3).map((project) => (<div key={project.title} className="rounded-3xl border border-line/70 p-5"><div className="flex items-center justify-between gap-4"><div><h3 className="font-display text-2xl">{project.title}</h3><p className="mt-2 text-sm text-muted">{project.summary}</p></div><span className="chip">{project.category}</span></div></div>))}</div>
        </div>
        <div className="glass-card orb-panel rounded-[28px] p-8">
          <div className="flex items-center justify-between"><div><p className="chip">Pricing Preview</p><h2 className="mt-4 font-display text-4xl">Subscriptions that scale</h2></div><Link href="/pricing" className="text-sm text-brand">Compare plans</Link></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">{pricingPlans.map((plan) => (<div key={plan.name} className="rounded-3xl border border-line/70 p-5"><p className="text-sm uppercase tracking-[0.2em] text-muted">{plan.name}</p><p className="mt-3 font-display text-4xl">{plan.monthly}</p><p className="mt-3 text-sm text-muted">{plan.description}</p></div>))}</div>
        </div>
      </section>

      <section className="section-shell mt-20">
        <div className="glass-card orb-panel flex flex-col gap-8 rounded-[32px] p-8 md:flex-row md:items-center md:justify-between">
          <div><p className="chip">Helpdesk Preview</p><h2 className="mt-4 font-display text-4xl">Support that feels built in</h2><p className="mt-4 max-w-2xl text-muted">FAQ flows, ticket management, email contact, and chatbot guidance come together in a support layer that feels intentional.</p></div>
          <Link href="/support" className="rounded-full bg-brand px-6 py-3 font-semibold text-slate-950">Open Helpdesk</Link>
        </div>
      </section>
    </main>
  );
}
