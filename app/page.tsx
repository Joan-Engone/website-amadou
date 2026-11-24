import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import Framework from "@/components/sections/Framework";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="space-y-4 md:space-y-6">
        <Hero />
        <Credibility />
        <Framework />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}