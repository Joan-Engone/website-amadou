import Icon from "@/components/ui/Icon";
import Faq from "@/components/services/Faq";
import { faqs, reasons } from "@/lib/services-data";

export default function WhyAndFaq() {
  return (
    <section className="grid grid-cols-1 items-start gap-space-md lg:grid-cols-12 lg:gap-space-lg">
      {/* Why Pipely */}
      <div className="space-y-space-md rounded-3xl bg-surface-container-lowest p-6 shadow-xs sm:p-space-lg md:rounded-panel md:p-space-xl lg:col-span-5">
        <div>
          <span className="text-label-sm uppercase text-secondary">
            Engagement d&apos;Excellence
          </span>
          <h2 className="mt-1 text-headline-lg-mobile text-on-background sm:text-headline-lg">
            Pourquoi Confier Votre Voix à Pipely ?
          </h2>
          <p className="mt-2 text-body-md text-secondary">
            Le personal branding mal exécuté abîme une réputation. Nous
            protégeons la vôtre avec les standards d&apos;un cabinet de conseil
            stratégique.
          </p>
        </div>

        <div className="space-y-space-md pt-space-xs">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-space-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-background">
                <Icon name={r.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-body-lg font-bold text-on-background">
                  {r.title}
                </h3>
                <p className="text-body-md text-secondary">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="space-y-space-md rounded-3xl bg-surface-container-lowest p-6 shadow-xs sm:p-space-lg md:rounded-panel md:p-space-xl lg:col-span-7">
        <div>
          <span className="text-label-sm uppercase text-secondary">
            Transparence Totale
          </span>
          <h2 className="mt-1 text-headline-lg-mobile text-on-background sm:text-headline-lg">
            Questions Fréquentes
          </h2>
        </div>
        <Faq items={faqs} />
      </div>
    </section>
  );
}