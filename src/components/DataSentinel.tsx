export function DataSentinel() {
  return (
    <section
      id="datasentinel"
      className="section relative overflow-hidden bg-[var(--navy-deep)] text-white"
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(15,98,254,0.35),transparent_70%)]" />
      <div className="section-inner relative">
        <p className="eyebrow !text-[#8eb6ff]">Featured capability</p>
        <h2 className="section-title !text-white">DataSentinel</h2>
        <p className="max-w-2xl text-lg text-white/75">
          A neuro-symbolic governance framework at the mainframe–LLM
          intersection — IBM watsonx and Anthropic Claude advising, deterministic
          rules deciding.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-[1.02rem] leading-relaxed text-white/78">
            <p>
              Built for enterprises that need AI velocity without surrendering
              auditability on Db2 systems of record. DataSentinel combines agent
              orchestration, policy enforcement, and complete audit trails so
              probabilistic models stay inside operational guardrails.
            </p>
            <p>
              Six MCP servers and production RAG pipelines support real
              governance workflows — not demos that evaporate at the firewall.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://sentineldataai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Explore the demo
              </a>
              <a href="#contact" className="btn btn-secondary">
                Ask about a pilot
              </a>
            </div>
          </div>

          <aside className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <p className="font-[family-name:var(--font-plex-mono)] text-xs tracking-[0.14em] text-[#c6a15b] uppercase">
              Stack
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>IBM watsonx · watsonx Orchestrate</li>
              <li>Anthropic Claude · MCP servers</li>
              <li>IBM Db2 audit & policy plane</li>
              <li>RAG pipelines · fail-closed controls</li>
            </ul>
            <p className="mt-6 border-t border-white/15 pt-5 text-sm text-white/65">
              Product site:{" "}
              <a
                href="https://sentineldataai.com"
                className="text-[#8eb6ff] underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                sentineldataai.com
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
