const roles = [
  {
    title: "Principal Consultant",
    org: "DBA TopGun, LLC · IBM Business Partner",
    period: "2020 – Present",
    points: [
      "Enterprise Db2 consulting, data integration architecture, and emergency performance triage.",
      "Zero-downtime SQL Server → Db2 LUW migrations and IIDR/CDC pipelines across on-prem, AWS, GCP, and OpenShift.",
      "HADR, cloning, snapshot DR, ERwin/IDA modeling, and Python/Bash automation for high-stakes estates.",
    ],
  },
  {
    title: "Director — Database Technology & Data Integration",
    org: "SinfoniaRX",
    period: "2016 – 2020",
    points: [
      "Directed Db2 LUW across Linux on Z, x86, and Google Cloud (RHEL).",
      "Led Linux on Z → x86/GCP migrations with IIDR CDC v11.3.3, HADR, and Informatica ingestion.",
      "Guardium-supported compliance reporting; DBI monitoring; GitHub-managed DDL; Db2 Docker images for developers.",
    ],
  },
  {
    title: "Earlier leadership & specialist roles",
    org: "VA · ObjectRocket · Consert · USAA · IBM · U.S. Army",
    period: "1990s – 2016",
    points: [
      "USAA: 48 hours → 22 minutes loan processing; Db2 Federation eliminating nightly ETL; emergency military loan SP.",
      "VA & ObjectRocket: 10–50+ TB MongoDB/CouchDB/Cassandra cluster operations.",
      "IBM COBOL/CICS/Db2 project leadership; U.S. Army Enlisted Systems Division programmer/NCO.",
    ],
  },
];

const clients = [
  "3M",
  "USAA",
  "US Bank",
  "BNY",
  "Highmark BCBS",
  "Prime Therapeutics",
  "Fidelity Information Services",
  "Dept. of Veterans Affairs",
  "IBM",
  "Accenture",
  "Ernst & Young",
  "Deutsche Telekom",
  "Uline",
  "SinfoniaRX",
];

export function Experience() {
  return (
    <section id="experience" className="section bg-white">
      <div className="section-inner">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">Built in the rooms where downtime costs millions.</h2>
        <p className="section-lead">
          Robert D. Proffitt — IBM Gold Consultant for Data & AI, IBM Champion,
          and principal of DBA TopGun.
        </p>

        <div className="mt-12 space-y-10">
          {roles.map((role) => (
            <article
              key={role.title}
              className="grid gap-4 border-t border-[var(--line)] pt-8 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="font-[family-name:var(--font-plex-mono)] text-xs tracking-[0.1em] text-[var(--slate)] uppercase">
                  {role.period}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--ink)]">
                  {role.title}
                </h3>
                <p className="mt-1 text-[var(--ibm-deep)]">{role.org}</p>
                <ul className="mt-4 space-y-2 text-[0.98rem] text-[var(--slate)]">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ibm)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-[var(--line)] pt-10">
          <p className="eyebrow">Select client engagements</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            {clients.map((client) => (
              <span
                key={client}
                className="font-[family-name:var(--font-plex-serif)] text-lg text-[var(--navy)]"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
