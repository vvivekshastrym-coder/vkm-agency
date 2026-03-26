"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "@/lib/site-data";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

export default function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 120);
  });

  return (
    <motion.header
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="section-shell mt-4">
        <div className="glass-card flex items-center justify-between rounded-full px-5 py-3">
          <Link href="/" className="font-display text-xl font-semibold tracking-[0.2em] text-brand">
            VKM
          </Link>
          <nav className="hidden items-center gap-5 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "text-brand" : "text-muted hover:text-foreground"}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border px-3 py-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-foreground"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <Link href="/login" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-slate-950">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

