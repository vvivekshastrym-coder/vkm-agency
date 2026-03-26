import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ChatbotWidget from "@/components/chatbot-widget";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VKM Agency",
  description: "VKM builds premium digital experiences, AI systems, and secure growth platforms.",
  keywords: ["VKM", "agency", "Next.js", "AI automation", "cybersecurity", "web design"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <Providers>
          <div className="app-shell">
            <SiteHeader />
            {children}
            <SiteFooter />
            <ChatbotWidget />
          </div>
        </Providers>
      </body>
    </html>
  );
}
