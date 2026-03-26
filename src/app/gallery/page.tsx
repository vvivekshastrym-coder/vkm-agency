"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { galleryItems } from "@/lib/site-data";

const categories = ["All", "Motion", "UI", "Brand", "3D", "Creative", "Product"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const items = galleryItems.filter((item) => activeCategory === "All" || item.category === activeCategory);

  return (
    <main className="pb-24 pt-32">
      <PageHero eyebrow="Gallery" title="A more cinematic gallery system" description="The backend includes gallery CRUD and upload handling, while the frontend now presents the work inside a stronger 3D visual frame." accent="coral" />
      <section className="section-shell mt-10"><div className="glass-card orb-panel rounded-[32px] border-dashed p-8 text-center"><p className="font-display text-2xl">Drag and drop image uploads</p><p className="mt-3 text-sm text-muted">Connect this dropzone to the backend upload endpoint when environment variables are configured.</p></div></section>
      <section className="section-shell mt-8 flex flex-wrap gap-3">{categories.map((category) => (<button key={category} type="button" onClick={() => setActiveCategory(category)} className={`rounded-full border px-4 py-2 text-sm ${activeCategory === category ? "bg-brand text-slate-950" : "text-muted"}`}>{category}</button>))}</section>
      <section className="section-shell mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{items.map((item, index) => (<button key={item.title} type="button" onClick={() => setSelectedImage(item.title)} className="glass-card orb-panel overflow-hidden rounded-[28px] text-left"><div className={`h-64 bg-[linear-gradient(135deg,#12213d,#09111f)] ${index % 2 === 0 ? "bg-[radial-gradient(circle_at_top_left,#6fe7ff44,transparent_35%),linear-gradient(135deg,#12213d,#09111f)]" : ""}`} /><div className="p-5"><p className="font-display text-2xl">{item.title}</p><p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{item.category}</p></div></button>))}</section>
      {selectedImage ? <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4"><div className="glass-card orb-panel w-full max-w-3xl rounded-[32px] p-6"><div className="h-[420px] rounded-[24px] bg-[radial-gradient(circle_at_top,#6fe7ff55,transparent_30%),linear-gradient(135deg,#12213d,#09111f)]" /><div className="mt-5 flex items-center justify-between"><div><p className="font-display text-3xl">{selectedImage}</p><p className="text-sm text-muted">Lightbox preview</p></div><button type="button" onClick={() => setSelectedImage(null)} className="rounded-full border px-4 py-2 text-sm">Close</button></div></div></div> : null}
    </main>
  );
}
