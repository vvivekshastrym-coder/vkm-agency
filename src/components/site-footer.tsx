import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line/80 py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.2em] text-brand">VKM</p>
          <p className="mt-2 max-w-md text-sm text-muted">
            Premium digital systems for agencies, startups, and ambitious brands.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/support">Helpdesk</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

