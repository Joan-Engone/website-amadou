export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "#a-propos" },
];

export type Metric = { label: string; value: string };

export const metrics: Metric[] = [
  { label: "Satisfaction client totale", value: "95%" },
  { label: "Expertise & insights stratégiques", value: "5+" },
  { label: "Revenus générés & valorisation", value: "$1m" },
];

export type Pillar = {
  number: string;
  title: string;
  description: string;
  step: string;
};

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Clarté du Positionnement",
    description:
      "Définition de votre angle unique, vos thématiques signature et alignement stratégique direct avec votre offre commerciale.",
    step: "Étape 1 • Diagnostic & Vision",
  },
  {
    number: "02",
    title: "Production de Contenu Premium",
    description:
      "Ghostwriting, récits inspirants et analyses sectorielles qui captent l'attention des décideurs et des investisseurs de votre marché.",
    step: "Étape 2 • Autorité & Visibilité",
  },
  {
    number: "03",
    title: "Monétisation & Pipeline",
    description:
      "Transformation naturelle de votre audience qualifiée en opportunités d'affaires inbound récurrentes et partenariats stratégiques.",
    step: "Étape 3 • Acquisition & Scale",
  },
];

export const avatars = [
  { initials: "JR", className: "bg-neutral-300 text-neutral-800" },
  { initials: "ML", className: "bg-stone-400 text-neutral-800" },
  { initials: "AT", className: "bg-amber-200 text-neutral-800" },
  { initials: "100+", className: "bg-[#161616] text-white text-[10px]" },
];

export const partnerLogos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];