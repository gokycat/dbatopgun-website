const credentials = [
  {
    title: "IBM Gold Consultant — Data & AI",
    detail: "Five-year continuity, 2020–2024",
  },
  {
    title: "IBM Champion",
    detail: "2021 recognition",
  },
  {
    title: "IBM Certified Db2 v12.1 DBA — Professional",
    detail: "2026",
  },
  {
    title: "watsonx Orchestrate Technical Sales Intermediate",
    detail: "Current through 2027",
  },
  {
    title: "IBM Certification Exam Developer",
    detail: "2026",
  },
  {
    title: "watsonx.ai RAG & LangChain",
    detail: "2025",
  },
];

export function Credentials() {
  return (
    <section className="section bg-[var(--mist)]">
      <div className="section-inner">
        <p className="eyebrow">Credentials</p>
        <h2 className="section-title">IBM-recognized. Operator-proven.</h2>
        <p className="section-lead">
          Partnership status and certifications that match the work on the
          floor — not badges collected for a slide.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((item) => (
            <article key={item.title} className="border-t-2 border-[var(--navy)] pt-4">
              <h3 className="text-base font-semibold leading-snug text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--slate)]">{item.detail}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-[var(--slate)]">
          Full credential history:{" "}
          <a
            href="https://www.credly.com/users/robert-proffitt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--ibm-deep)] underline-offset-2 hover:underline"
          >
            credly.com/users/robert-proffitt
          </a>
        </p>
      </div>
    </section>
  );
}
