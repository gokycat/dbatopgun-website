export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden text-white"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt=""
          className="hero-glow h-full w-full object-cover object-[center_30%] opacity-55 [animation:drift_22s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_12%_18%,rgba(15,98,254,0.38),transparent_42%),linear-gradient(105deg,rgba(6,20,40,0.96)_0%,rgba(12,35,64,0.88)_46%,rgba(6,20,40,0.72)_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1120px] flex-col justify-end px-[clamp(1.25rem,4vw,3rem)] pb-16 pt-36 sm:justify-center sm:pb-24 sm:pt-28">
        <div className="max-w-3xl">
          <p className="reveal font-[family-name:var(--font-plex-mono)] text-xs tracking-[0.18em] text-[#c6a15b] uppercase">
            IBM Gold Consultant · Business Partner · Champion
          </p>

          <h1 className="reveal reveal-delay-1 mt-5 font-[family-name:var(--font-plex-serif)] text-[clamp(3.4rem,9vw,6.4rem)] leading-[0.92] font-medium tracking-[-0.04em] text-white">
            DBA TopGun
          </h1>

          <div className="mt-5 h-px w-24 origin-left bg-[#0f62fe] [animation:line-draw_900ms_520ms_cubic-bezier(0.22,1,0.36,1)_forwards]" />

          <p className="reveal reveal-delay-2 mt-7 max-w-xl font-[family-name:var(--font-plex-serif)] text-[clamp(1.35rem,2.6vw,1.85rem)] leading-snug text-white/92">
            Enterprise Db2 modernization without rip-and-replace.
          </p>

          <p className="reveal reveal-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
            Zero-downtime migrations, mission-critical HA/DR, and governed AI
            for Fortune 100 and federal systems of record.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Start a conversation
            </a>
            <a href="#outcomes" className="btn btn-secondary">
              See selected outcomes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
