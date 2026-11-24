import Image from "next/image";
import { avatars } from "@/lib/data";

const HERO_IMAGE = "/images/brande.jpg";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[540px] items-center overflow-hidden rounded-[2.2rem] bg-[#8C8F8F] md:min-h-[580px] md:rounded-[2.8rem] lg:min-h-[640px]"
    >
      <Image
        src={HERO_IMAGE}
        alt="Consultant expert travaillant sur un ordinateur portable au bureau"
        fill
        priority
        sizes="(min-width: 1360px) 1296px, 100vw"
        className="object-cover object-[72%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/40 to-black/10 lg:w-2/3 lg:from-black/55 lg:via-black/30 lg:to-transparent" />

      <div className="relative z-10 max-w-2xl p-6 py-12 text-white md:p-14 lg:p-20">
        <h1 className="mb-5 text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
          Expertise pointue.
          <br />
          Solutions sur-mesure.
        </h1>

        <p className="mb-9 max-w-xl text-base font-normal leading-relaxed text-white/85 sm:text-lg">
          J’aide les entrepreneurs à scaler leur business, asseoir une autorité
          incontestable et attirer des opportunités d’élite grâce au Personal
          Branding.
        </p>

        <div className="mb-10 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center md:mb-14">
          <a
            href="#contact"
            className="rounded-full bg-brand-accent px-7 py-3 text-center text-sm font-semibold text-brand-dark shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-accent-hover active:scale-[0.98] sm:text-[15px]"
          >
            Réserver un appel
          </a>
          <a
            href="#etudes-de-cas"
            className="frosted-btn rounded-full px-7 py-3 text-center text-sm font-medium text-white transition-all duration-200 sm:text-[15px]"
          >
            Nos réalisations
          </a>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
          <div className="flex -space-x-2.5">
            {avatars.map((a) => (
              <span
                key={a.initials}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ring-2 ring-white/60 ${a.className}`}
              >
                {a.initials}
              </span>
            ))}
          </div>
          <p className="text-xs font-normal text-white/80 sm:text-sm">
            Plus de 100 entrepreneurs accompagnés vers le succès.
          </p>
        </div>
      </div>
    </section>
  );
}