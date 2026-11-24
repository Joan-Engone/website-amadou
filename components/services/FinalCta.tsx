import Icon from "@/components/ui/Icon";

export default function FinalCta() {
  return (
    <section id="contact" className="relative scroll-mt-28">
      <div className="relative overflow-hidden rounded-3xl bg-inverse-surface p-6 text-center text-inverse-on-surface shadow-xl sm:p-space-lg md:rounded-panel md:p-space-xl">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-container/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-2xl space-y-space-md">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-highest/20 px-space-md py-1 text-label-sm uppercase text-accent-soft">
            <Icon name="stars" className="h-4 w-4 shrink-0" />
            Session Découverte Stratégique
          </div>

          <h2 className="text-headline-lg-mobile text-surface-container-lowest sm:text-headline-lg md:text-headline-xl">
            Prêt à transformer votre visibilité en chiffre d&apos;affaires ?
          </h2>

          <p className="mx-auto max-w-xl text-body-md text-surface-dim sm:text-body-lg">
            Réservez un échange de cadrage confidentiel de 30 minutes avec
            l&apos;un de nos directeurs de stratégie pour analyser votre
            potentiel d&apos;influence.
          </p>

          <div className="flex flex-col items-center justify-center gap-space-md pt-space-sm sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-space-xs rounded-full bg-primary-container px-6 py-space-sm text-center text-label-lg font-bold text-white shadow-[0_0_24px_-2px_rgba(140,82,252,0.45)] transition-all hover:scale-[1.02] hover:bg-primary-fixed-dim sm:w-auto sm:px-space-xl"
            >
              Réserver mon audit stratégique offert
              <Icon name="arrow-right" className="h-4 w-4 shrink-0" />
            </a>
          </div>

          <p className="pt-2 text-label-sm text-surface-dim">
            Places limitées à 4 nouveaux dirigeants par mois pour garantir
            l&apos;excellence d&apos;exécution.
          </p>
        </div>
      </div>
    </section>
  );
}