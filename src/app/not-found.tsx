import Link from "next/link";
import PageHero from "@/components/page-hero";

export default function NotFound() {
  return (
    <main className="pb-20 pt-28">
      <PageHero eyebrow="404" title="Page not found" description="The page youâ€™re looking for isnâ€™t here. Head back to the VKM homepage." accent="violet">
        <Link href="/" className="rounded-full bg-brand px-6 py-3 font-semibold text-slate-950">Return home</Link>
      </PageHero>
    </main>
  );
}
