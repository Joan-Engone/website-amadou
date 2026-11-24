export default function Footer() {
  const year = 2026;

  return (
    <footer className="mb-4 mt-8 flex flex-col items-center justify-between gap-4 px-4 text-center text-xs text-[#7A7870] sm:flex-row sm:text-left">
      <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
        <span className="font-bold text-brand-dark">Magnetic Groupe</span>
        <span>© {year} Magnetic Groupe. Tous droits réservés.</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <a href="#" className="transition-colors hover:text-brand-dark">
          Mentions Légales
        </a>
        <a href="#" className="transition-colors hover:text-brand-dark">
          Politique de Confidentialité
        </a>
        <a href="#" className="transition-colors hover:text-brand-dark">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}