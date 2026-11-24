import { metrics, partnerLogos } from "@/lib/data";

function LogoIcon({ index }: { index: number }) {
  const common = { className: "h-5 w-5", viewBox: "0 0 24 24", fill: "currentColor" };
  switch (index) {
    case 0:
      return (
        <svg {...common}>
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        </svg>
      );
  }
}

export default function Credibility() {
  return (
    <section
      id="services"
      className="rounded-[2.2rem] border border-brand-sand/50 bg-brand-cream p-6 shadow-xs sm:p-7 md:rounded-[2.8rem] md:p-12 lg:p-16"
    >
      <div className="flex flex-col justify-between gap-6 border-b border-[#E3E0D6]/60 pb-8 md:flex-row md:items-center">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#737169]">
          Pipelys Consulting • Expertise
        </span>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-brand-dark opacity-80 sm:flex sm:flex-wrap sm:items-center sm:gap-10">
          {partnerLogos.map((name, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-bold">
              <LogoIcon index={i} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 max-w-4xl lg:my-14">
        <h2 className="text-2xl font-bold leading-[1.25] tracking-[-0.03em] text-brand-dark sm:text-3xl lg:text-[2.6rem]">
          Avec plus d’une décennie d’expérience, nous bâtissons des marques
          personnelles sur-mesure qui propulsent votre croissance et votre
          autorité.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3 lg:gap-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex min-h-[170px] flex-col justify-between rounded-2xl border border-[#E9E7DF] bg-white p-7 shadow-xs md:min-h-[190px] md:rounded-3xl lg:p-9"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7A7870]">
              {m.label}
            </span>
            <span className="mt-8 text-5xl font-bold tracking-tight text-brand-dark lg:text-6xl">
              {m.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}