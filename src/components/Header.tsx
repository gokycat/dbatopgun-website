const links = [
  { href: "#outcomes", label: "Outcomes" },
  { href: "#services", label: "Services" },
  { href: "#datasentinel", label: "DataSentinel" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-[clamp(1.25rem,4vw,3rem)] py-5">
        <a href="#top" className="group flex items-center gap-3 no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-sm object-cover ring-1 ring-white/25"
          />
          <span className="font-[family-name:var(--font-plex-sans)] text-[1.05rem] font-semibold tracking-tight text-white">
            DBA TopGun
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 no-underline transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+12103833100"
          className="hidden text-sm font-semibold text-white no-underline sm:inline-flex"
        >
          210-383-3100
        </a>
      </div>
    </header>
  );
}
