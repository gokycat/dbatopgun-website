const services = [
  {
    title: "Db2 architecture & performance",
    body: "Enterprise modeling, SQL/DBMS tuning, partitioning/MDC, EXPLAIN-driven remediation, and capacity planning for LUW and z/OS.",
  },
  {
    title: "Zero-downtime migration",
    body: "Linux on Z → RHEL/x86/GCP, SQL Server → Db2 LUW, Oracle/MAXIMO → OpenShift on AWS using IIDR/CDC, QREP, and HADR patterns.",
  },
  {
    title: "High availability & DR",
    body: "Multi-standby HADR, Q/SQL Replication, InfoSphere CDC, cloning, and snapshot strategies for failure-tolerant estates.",
  },
  {
    title: "Automation & DevOps",
    body: "Python/Bash DBA automation, IaC, Docker and OpenShift packaging, and operational tooling that removes toil.",
  },
  {
    title: "AI governance at the data plane",
    body: "watsonx and Claude-backed control planes, MCP servers, RAG pipelines, and fail-closed policy enforcement on systems of record.",
  },
  {
    title: "Emergency triage & advisory",
    body: "Principal-level incident response, architecture reviews, and C-suite guidance when the database is on the critical path.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="section bg-[linear-gradient(180deg,#eef3f9_0%,#f5f8fc_100%)]"
    >
      <div className="section-inner">
        <p className="eyebrow">Services</p>
        <h2 className="section-title">Where DBA TopGun engages.</h2>
        <p className="section-lead">
          Principal consulting for organizations that cannot afford guesswork on
          their systems of record.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="border-l-2 border-[var(--ibm)] pl-5"
            >
              <p className="font-[family-name:var(--font-plex-mono)] text-xs tracking-[0.12em] text-[var(--slate)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--ink)]">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[var(--slate)]">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
