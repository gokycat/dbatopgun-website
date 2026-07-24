export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--navy-deep)] text-white">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-[clamp(1.25rem,4vw,3rem)] py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-plex-serif)] text-2xl tracking-tight">
            DBA TopGun
          </p>
          <p className="mt-2 max-w-md text-sm text-white/65">
            IBM Gold Consultant for Data & AI. Enterprise Db2 modernization,
            high availability, and governed AI for systems of record.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-white/75">
          <a
            href="https://sentineldataai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-white"
          >
            DataSentinel
          </a>
          <a
            href="https://www.credly.com/users/robert-proffitt"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-white"
          >
            Credly
          </a>
          <a href="mailto:Robert.Proffitt@DbaTopgun.com" className="no-underline hover:text-white">
            Email
          </a>
          <a href="tel:+12103833100" className="no-underline hover:text-white">
            210-383-3100
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-[clamp(1.25rem,4vw,3rem)] py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} DBA TopGun, LLC. All rights reserved.</p>
          <p>Robert D. Proffitt · Rockledge, FL</p>
        </div>
      </div>
    </footer>
  );
}
