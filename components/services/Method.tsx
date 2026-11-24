import Icon from "@/components/ui/Icon";
import { steps } from "@/lib/services-data";

export default function Method() {
  return (
    <section className="rounded-3xl bg-surface-container-lowest p-6 shadow-xs sm:p-space-lg md:rounded-panel md:p-space-xl">
      <div className="mb-10 max-w-2xl md:mb-space-xl">
        <span className="text-label-sm uppercase text-secondary">
          Rigueur &amp; Mécanique
        </span>
        <h2 className="mt-1 text-headline-lg-mobile text-on-background sm:text-headline-lg md:text-headline-xl">
          Notre Méthode d&apos;Exécution en 4 Temps
        </h2>
        <p className="mt-2 text-body-md text-secondary sm:text-body-lg">
          Un protocole chirurgical rodé pour vous faire économiser 15 heures par
          semaine tout en démultipliant l&apos;impact de votre leadership
          d&apos;opinion.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="group flex flex-col justify-between rounded-card bg-surface-container-low p-space-md transition-colors hover:bg-surface-container"
          >
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="text-headline-lg-mobile font-extrabold text-outline-variant transition-colors group-hover:text-primary sm:text-headline-xl">
                  {step.number}
                </span>
                <span className="rounded-full bg-surface-container-lowest p-2 text-on-background shadow-xs">
                  <Icon name={step.icon} className="h-4 w-4" />
                </span>
              </div>
              <h3 className="text-headline-sm text-on-background">
                {step.title}
              </h3>
              <p className="text-body-md text-secondary">{step.description}</p>
            </div>
            <div className="mt-space-md border-t border-surface-container-high/60 pt-space-xs">
              <span className="text-label-sm text-secondary">
                {step.footnote}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}