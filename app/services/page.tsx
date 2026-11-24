import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import Offers from "@/components/services/Offers";
import Method from "@/components/services/Method";
import WhyAndFaq from "@/components/services/WhyAndFaq";
import FinalCta from "@/components/services/FinalCta";

export const metadata: Metadata = {
  title: "Services — Pipely | Personal Branding & Stratégie Exécutive",
  description:
    "Audit & positionnement, ghostwriting complet, brand scaling & inbound : les 3 niveaux d'accompagnement Pipely pour dirigeants et entrepreneurs.",
};

export default function ServicesPage() {
  return (
    <div data-page="services" className="min-h-screen bg-surface text-on-background">
      <Header />

      <main className="space-y-4 md:space-y-6">
        <div className="flex flex-col space-y-12 pb-12 md:space-y-space-xl md:pb-space-xl">
          <ServicesHero />
          <Offers />
          <Method />
          <WhyAndFaq />
          <FinalCta />
        </div>
      </main>

      <div className="mx-auto max-w-[1280px] px-margin md:px-margin-md lg:px-margin-lg">
        <Footer />
      </div>
    </div>
  );
}