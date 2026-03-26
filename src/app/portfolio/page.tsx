"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/page-hero";
import { projects } from "@/lib/site-data";

const filters = ["All", "SaaS", "Ecommerce", "Security", "Startup", "Creative", "Enterprise"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = useMemo(() => (activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)), [activeFilter]);

  return (
    <main className="pb-24 pt-32">
      <PageHero eyebrow="Portfolio" title="Launches, platforms, and brand systems" description="Admin-ready portfolio management is modeled in the backend, while the frontend keeps project browsing editorial and cinematic." accent="violet" />
      <section className="section-shell mt-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-sm ${activeFilter === filter ? "bg-brand text-slate-950" : "text-muted"}`}>{filter}</button>
        ))}
      </section>
      <section className="section-shell mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article key={project.title} whileHover={{ y: -8, rotateX: 5, rotateY: index % 2 ? 4 : -4 }} className="glass-card orb-panel overflow-hidden rounded-[30px]">
            <div className="h-48 bg-[radial-gradient(circle_at_top,#6fe7ff33,transparent_40%),linear-gradient(135deg,#12213d,#09111f)]" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-4"><h2 className="font-display text-3xl">{project.title}</h2><span className="chip">{project.category}</span></div>
              <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => (<span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">{tag}</span>))}</div>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
