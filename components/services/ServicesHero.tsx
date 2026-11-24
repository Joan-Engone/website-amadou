import Icon from "@/components/ui/Icon";

export default function ServicesHero() {
  return (
    <section className="relative pt-space-sm md:pt-space-md">
      <div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest p-6 shadow-xs sm:p-space-lg md:rounded-panel md:p-space-xl">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-surface-container-high/40 blur-2xl" />

        <div className="relative z-10 max-w-4xl space-y-space-md">
          <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-md py-1.5 text-label-sm uppercase text-on-surface">
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary-container shadow-[0_0_8px_#8c52fc]" />
            Offres &amp; Accompagnement Stratégique
          </div>

          <h1 className="text-headline-2xl-mobile text-on-background sm:text-headline-xl md:text-headline-2xl">
            Des solutions sur-mesure pour{" "}
            <span className="relative inline-block">
              asseoir votre autorité
              <span className="absolute bottom-1.5 left-0 -z-10 h-3 w-full rounded-sm bg-primary-container/30" />
            </span>{" "}
            et convertir votre audience.
          </h1>

          <p className="max-w-2xl text-body-md text-secondary sm:text-body-lg md:text-body-xl">
            Transformez votre marque personnelle en moteur d&apos;acquisition
            prévisible.
          </p>

          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <div className="flex -space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-on-surface ring-2 ring-surface-container-lowest">
                <Icon name="user" className="h-4 w-4" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-on-surface ring-2 ring-surface-container-lowest">
                <Icon name="user" className="h-4 w-4" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-on-background text-label-sm text-accent-soft ring-2 ring-surface-container-lowest">
                +120
              </div>
            </div>
            <p className="text-label-md text-secondary">
              <strong className="font-semibold text-on-background">
                120+ dirigeants
              </strong>{" "}
              accompagnés avec succès
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}