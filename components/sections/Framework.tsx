import { pillars } from "@/lib/data";

export default function Framework() {
  return (
    <section
      id="a-propos"
      className="rounded-[2.2rem] border border-brand-sand/50 bg-brand-cream p-6 shadow-xs sm:p-7 md:rounded-[2.8rem] md:p-12 lg:p-16"
    >
      <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
        <div>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.14em] text-[#737169]">
            Notre méthodologie
          </span>
          <h3 className="max-w-xl text-3xl font-bold tracking-[-0.03em] text-brand-dark sm:text-4xl">
            Un système complet pour transformer votre présence en levier
            financier.
          </h3>
        </div>
        <p className="max-w-md text-sm text-brand-slate sm:text-base">
          Nous allions stratégie éditoriale haut de gamme, production de contenu
          influent et architecture de conversion pour maximiser votre impact.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {pillars.map((p) => (
          <article
            key={p.number}
            className="flex flex-col justify-between rounded-2xl border border-[#E9E7DF] bg-white p-7 md:rounded-3xl md:p-8"
          >
            <div>
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/30 text-sm font-bold text-brand-dark">
                {p.number}
              </div>
              <h4 className="mb-2 text-xl font-bold text-brand-dark">
                {p.title}
              </h4>
              <p className="text-sm leading-relaxed text-brand-slate">
                {p.description}
              </p>
            </div>
            <div className="mt-8 border-t border-[#F0EFE9] pt-4 text-xs font-semibold uppercase tracking-wider text-[#8A8880]">
              {p.step}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}