export default function CallToAction() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center overflow-hidden rounded-[2.2rem] bg-brand-dark p-8 text-center text-white md:rounded-[2.8rem] md:p-14 lg:p-16"
    >
      <div className="relative z-10 mx-auto max-w-2xl space-y-6">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] text-brand-accent">
          Accélérez votre croissance
        </span>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Prêt à devenir la référence incontournable de votre marché ?
        </h2>
        <p className="mx-auto max-w-xl text-base text-neutral-400 sm:text-lg">
          Discutons ensemble de vos objectifs lors d&apos;un appel stratégique
          confidentiel de 30 minutes sans engagement.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <a
            href="#"
            className="w-full rounded-full bg-brand-accent px-8 py-3.5 text-base font-bold text-brand-dark shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-brand-accent-hover sm:w-auto"
          >
            Planifier ma session d&apos;orientation
          </a>
          <a
            href="#services"
            className="w-full px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:text-white sm:w-auto"
          >
            En savoir plus sur nos offres →
          </a>
        </div>
      </div>
    </section>
  );
}