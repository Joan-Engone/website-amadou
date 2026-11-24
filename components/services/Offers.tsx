import Icon from "@/components/ui/Icon";
import { offers, type Offer } from "@/lib/services-data";

function OfferCard({ offer }: { offer: Offer }) {
  const f = offer.featured;

  return (
    <div
      className={
        f
          ? "relative flex flex-col justify-between overflow-hidden rounded-card bg-inverse-surface p-6 text-inverse-on-surface shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-space-lg lg:-my-4"
          : "flex flex-col justify-between rounded-card bg-surface-container-lowest p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-space-lg"
      }
    >
      {f && offer.badge && (
        <div className="absolute right-0 top-0 rounded-bl-3xl bg-primary-container px-space-md py-1.5 text-label-sm font-bold uppercase text-white shadow-xs">
          {offer.badge}
        </div>
      )}

      <div className={`space-y-space-md ${f ? "pt-6 sm:pt-2" : ""}`}>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`rounded-full px-space-sm py-1 text-label-sm uppercase ${
              f
                ? "bg-surface-container-highest/20 text-accent-soft"
                : "bg-surface-container text-secondary"
            }`}
          >
            {offer.tag}
          </span>
          {offer.type && (
            <span className="text-label-md text-secondary">{offer.type}</span>
          )}
        </div>

        <div>
          <h3
            className={`text-headline-sm ${
              f ? "text-surface-container-lowest" : "text-on-background"
            }`}
          >
            {offer.title}
          </h3>
          <p
            className={`mt-space-xs text-body-md ${
              f ? "text-surface-dim" : "text-secondary"
            }`}
          >
            {offer.description}
          </p>
        </div>

        <div
          className={`rounded-2xl p-space-sm ${
            f ? "bg-surface-container-highest/10" : "bg-surface-container-low"
          }`}
        >
          <span
            className={`mb-1 block text-label-sm uppercase ${
              f ? "text-accent-soft" : "text-secondary"
            }`}
          >
            Pour qui ?
          </span>
          <p
            className={`text-label-md font-medium ${
              f ? "text-surface-container-lowest" : "text-on-background"
            }`}
          >
            {offer.audience}
          </p>
        </div>

        <div className="space-y-space-xs pt-space-xs">
          <span
            className={`mb-2 block text-label-sm uppercase ${
              f ? "text-surface-dim" : "text-secondary"
            }`}
          >
            Livrables Inclus :
          </span>
          <ul
            className={`space-y-2.5 text-body-md ${
              f ? "text-surface-container-low" : "text-on-surface"
            }`}
          >
            {offer.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Icon
                  name="check"
                  className={`mt-0.5 h-5 w-5 shrink-0 ${
                    f ? "text-accent-soft" : "text-primary"
                  }`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-space-lg">
        <a
          href="#contact"
          className={
            f
              ? "inline-flex w-full items-center justify-center gap-space-xs rounded-full bg-primary-container px-space-md py-space-sm text-label-lg font-bold text-white shadow-[0_0_24px_-2px_rgba(140,82,252,0.45)] transition-all hover:scale-[1.02] hover:bg-primary-fixed-dim"
              : "inline-flex w-full items-center justify-center gap-space-xs rounded-full bg-surface-container-low px-space-md py-space-sm text-label-lg text-on-background transition-colors hover:bg-surface-container"
          }
        >
          {offer.cta}
          <Icon name={offer.ctaIcon} className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function Offers() {
  return (
    <section className="space-y-space-lg">
      <div className="flex flex-col justify-between gap-space-sm md:flex-row md:items-end">
        <div>
          <span className="text-label-sm uppercase text-secondary">
            Formules d&apos;Intervention
          </span>
          <h2 className="mt-1 text-headline-lg-mobile text-on-background sm:text-headline-lg md:text-headline-xl">
            Nos 3 Niveaux d&apos;Accompagnement
          </h2>
        </div>
        <p className="max-w-md text-body-md text-secondary">
          Chaque pack est conçu pour répondre avec une rigueur absolue au stade
          de maturité de votre marque exécutive.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-space-md lg:grid-cols-3">
        {offers.map((offer) => (
          <OfferCard key={offer.title} offer={offer} />
        ))}
      </div>
    </section>
  );
}