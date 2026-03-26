import PageOrb from "@/components/page-orb";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  accent?: "cyan" | "coral" | "violet";
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, description, accent = "cyan", children }: PageHeroProps) {
  return (
    <section className="section-shell relative overflow-hidden rounded-[36px] border border-line/80 px-6 py-10 md:px-10 md:py-14">
      <div className="hero-gradient" />
      <div className="grid-overlay absolute inset-0 opacity-30" />
      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="chip">{eyebrow}</p>
          <h1 className="section-title mt-5">{title}</h1>
          <p className="section-copy mt-6">{description}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        <div className="glass-card orb-panel rounded-[32px] p-4">
          <PageOrb accent={accent} />
        </div>
      </div>
    </section>
  );
}
