import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pipely — Studio Personal Branding & Croissance pour Entrepreneurs",
  description:
    "Pipely aide les entrepreneurs à scaler leur business, asseoir leur autorité et attirer des opportunités d'élite grâce au Personal Branding.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${jakarta.variable} mx-auto min-h-screen max-w-[1360px] p-3 font-sans text-brand-dark selection:bg-brand-accent selection:text-brand-dark md:p-6 lg:p-8`}
      >
        {children}
      </body>
    </html>
  );
}