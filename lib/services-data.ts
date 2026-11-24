import type { IconName } from "@/components/ui/Icon";

export type Offer = {
  tag: string;
  type?: string;
  title: string;
  description: string;
  audience: string;
  deliverables: string[];
  cta: string;
  ctaIcon: IconName;
  featured?: boolean;
  badge?: string;
};

export const offers: Offer[] = [
  {
    tag: "Sprint 30 Jours",
    type: "Ponctuel",
    title: "Audit & Positionnement",
    description:
      "Clarification de votre discours et cartographie de vos piliers éditoriaux.",
    audience: "Fondateurs et dirigeants en phase de repositionnement.",
    deliverables: [
      "Audit d’audience & concurrents",
      "Ligne éditoriale signature",
      "Plan d'action sur 90 jours",
    ],
    cta: "Réserver un diagnostic",
    ctaIcon: "arrow-right",
  },
  {
    tag: "Accompagnement Continu",
    title: "Full Ghostwriting & Production",
    description: "100% de votre présence LinkedIn déléguée, avec votre voix.",
    audience:
      "CEO et dirigeants souhaitant démultiplier leur autorité sans y passer du temps.",
    deliverables: [
      "3 à 5 publications par semaine",
      "Carrousels & infographies sur-mesure",
      "Gestion proactive des interactions",
      "45 min d'échange mensuel seulement",
    ],
    cta: "Postuler à l'accompagnement",
    ctaIcon: "arrow-up-right",
    featured: true,
    badge: "Offre la plus prisée",
  },
  {
    tag: "Système Business",
    type: "Sur-mesure",
    title: "Brand Scaling & Inbound",
    description:
      "Tunnel d’acquisition complet pour transformer l'attention en clients réguliers.",
    audience: "Entrepreneurs prêts à monétiser intensément leur autorité.",
    deliverables: [
      "Lead magnets & newsletters d'autorité",
      "Tunnel de conversion DM & relances",
      "Intégration CRM & pipeline de rendez-vous",
    ],
    cta: "Découvrir le système",
    ctaIcon: "arrow-right",
  },
];

export type Step = {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  footnote: string;
};

export const steps: Step[] = [
  {
    number: "01",
    icon: "mic",
    title: "Immersion & Extraction",
    description:
      "45 min/mois pour capturer vos idées, vos anecdotes et votre vision.",
    footnote: "Temps client : 45 min / mois",
  },
  {
    number: "02",
    icon: "edit",
    title: "Production & 1-Clic",
    description:
      "Rédaction premium et validation fluide en un clic sur votre Notion.",
    footnote: "Processus asynchrone fluide",
  },
  {
    number: "03",
    icon: "radio",
    title: "Distribution Tactique",
    description:
      "Publication aux heures de pointe et amplification de l'engagement.",
    footnote: "Algorithmes & Timing maîtrisés",
  },
  {
    number: "04",
    icon: "coin",
    title: "Conversion & Pipeline",
    description:
      "Redirection naturelle des prospects qualifiés vers vos offres et calendrier.",
    footnote: "Génération de rendez-vous B2B",
  },
];

export type Reason = { icon: IconName; title: string; description: string };

export const reasons: Reason[] = [
  {
    icon: "clock",
    title: "Zéro Temps Perdu",
    description: "Moins d'une heure par mois requise de votre part.",
  },
  {
    icon: "voice",
    title: "Voix 100% Respectée",
    description: "Aucun jargon artificiel. Vos idées fidèlement retranscrites.",
  },
  {
    icon: "trending-up",
    title: "Résultats Mesurables",
    description: "Opportunités d'affaires directes et réputation renforcée.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Quel temps dois-je concrètement allouer chaque semaine ?",
    answer:
      "Moins de 15 minutes par semaine en moyenne. Vous réalisez une interview mensuelle de 45 minutes avec votre Ghostwriter dédié. La relecture et l'approbation de chaque post s'effectuent sur notre interface en 1 clic.",
  },
  {
    question: "Comment garantissez-vous que le style sonnera comme moi ?",
    answer:
      "Durant la phase d'onboarding, nous disséquons vos interventions antérieures, expressions fétiches et postures professionnelles. Aucun contenu n'est diffusé sans votre validation explicite. Dès le 2ème mois, l'alignement est parfait à 98%.",
  },
  {
    question: "Quelle est la durée d'engagement minimale ?",
    answer:
      "Le pack Stratégie est un sprint de 30 jours sans engagement. Pour le Ghostwriting continu, nous préconisons un cycle initial de 3 mois : c'est le délai mécanique nécessaire pour bâtir la confiance de l'algorithme et installer des retombées commerciales tangibles.",
  },
  {
    question: "Qu’en est-il de la confidentialité de nos échanges ?",
    answer:
      "Tous nos accompagnements sont strictement couverts par un accord de non-divulgation (NDA) rigoureux. Vos chiffres internes, cas clients sensibles et confidences stratégiques restent exclusivement au sein du studio.",
  },
];