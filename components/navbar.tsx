const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#top" className="font-semibold tracking-tight">{name}</a>
        <ul className="flex gap-4 text-sm sm:gap-6">
          {links.map((l) => (
            <li key={l.href} className={l.href === "#education" ? "hidden sm:block" : ""}>
              <a href={l.href} className="hover:text-blueprint">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
