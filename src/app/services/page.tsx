"use client";

import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <main className="pb-24 pt-32">
      <PageHero eyebrow="Services" title="Design, automation, engineering, and security in one agency stack" description="Every VKM engagement combines premium visual direction with resilient implementation, so the surface and the system both hold up." accent="coral" />
      <section className="section-shell mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.article key={service.title} whileHover={{ y: -10, scale: 1.01, rotateX: 6, rotateY: index % 2 === 0 ? -4 : 4 }} className="glass-card orb-panel rounded-[30px] p-7">
            <div className="flex items-center justify-between"><span className="font-display text-5xl text-brand">{service.icon}</span><span className="chip">Premium</span></div>
            <h2 className="mt-8 font-display text-3xl">{service.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
