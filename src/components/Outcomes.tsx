const outcomes = [
  {
    metric: "130×",
    label: "Core banking acceleration",
    detail:
      "Rewrote legacy SQL at a top-10 U.S. insurer (USAA), cutting back-office loan processing from 48 hours to 22 minutes.",
  },
  {
    metric: "50+ TB",
    label: "Production NoSQL at scale",
    detail:
      "Operated hundreds of production databases across large sharded clusters, plus 10+ TB federal healthcare estates.",
  },
  {
    metric: "0 downtime",
    label: "Cross-platform cutovers",
    detail:
      "Migrated core Db2 estates from Linux on Z to x86 and Google Cloud using IIDR CDC, HADR, and high-throughput loads.",
  },
  {
    metric: "35+ yrs",
    label: "Systems of record depth",
    detail:
      "From COBOL/CICS and Db2 z/OS to watsonx, Claude, MCP servers, and production RAG — same operator, full stack.",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="section bg-white">
      <div className="section-inner">
        <p className="eyebrow">Selected outcomes</p>
        <h2 className="section-title">Proof over promises.</h2>
        <p className="section-lead">
          Engagements that moved runtime, risk, and architecture — not slideware.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {outcomes.map((item) => (
            <article key={item.label} className="border-t border-[var(--line)] pt-6">
              <p className="font-[family-name:var(--font-plex-serif)] text-[clamp(2.4rem,5vw,3.4rem)] leading-none tracking-[-0.03em] text-[var(--navy)]">
                {item.metric}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">
                {item.label}
              </h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--slate)]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
