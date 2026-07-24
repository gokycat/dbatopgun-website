"use client";

import { FormEvent, useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `DBA TopGun inquiry${company ? ` — ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\n${message}`,
    );

    window.location.href = `mailto:Robert.Proffitt@DbaTopgun.com?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <section id="contact" className="section bg-white">
      <div className="section-inner grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Tell us what is on fire — or what should not be.</h2>
          <p className="section-lead">
            Advisory, retained consulting, and fractional architecture leadership
            for Db2 estates and AI governance programs.
          </p>

          <div className="mt-8 space-y-4 text-[0.98rem]">
            <p>
              <span className="block text-sm tracking-[0.08em] text-[var(--slate)] uppercase">
                Email
              </span>
              <a
                href="mailto:Robert.Proffitt@DbaTopgun.com"
                className="font-medium text-[var(--ibm-deep)] underline-offset-2 hover:underline"
              >
                Robert.Proffitt@DbaTopgun.com
              </a>
            </p>
            <p>
              <span className="block text-sm tracking-[0.08em] text-[var(--slate)] uppercase">
                Phone
              </span>
              <a
                href="tel:+12103833100"
                className="font-medium text-[var(--ibm-deep)] underline-offset-2 hover:underline"
              >
                210-383-3100
              </a>
            </p>
            <p>
              <span className="block text-sm tracking-[0.08em] text-[var(--slate)] uppercase">
                Location
              </span>
              <span className="text-[var(--ink)]">Rockledge, FL · Worldwide remote</span>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-[var(--line)] bg-[var(--paper)] p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-[var(--ink)]">
              Name
              <input
                required
                name="name"
                autoComplete="name"
                className="mt-2 w-full border border-[var(--line)] bg-white px-3 py-3 text-[0.95rem] outline-none transition focus:border-[var(--ibm)]"
              />
            </label>
            <label className="block text-sm font-medium text-[var(--ink)]">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full border border-[var(--line)] bg-white px-3 py-3 text-[0.95rem] outline-none transition focus:border-[var(--ibm)]"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-[var(--ink)]">
            Company
            <input
              name="company"
              autoComplete="organization"
              className="mt-2 w-full border border-[var(--line)] bg-white px-3 py-3 text-[0.95rem] outline-none transition focus:border-[var(--ibm)]"
            />
          </label>

          <label className="mt-5 block text-sm font-medium text-[var(--ink)]">
            How can we help?
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-y border border-[var(--line)] bg-white px-3 py-3 text-[0.95rem] outline-none transition focus:border-[var(--ibm)]"
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn btn-dark">
              Open email draft
            </button>
            {status === "ready" && (
              <p className="text-sm text-[var(--slate)]">
                Your mail client should open with the message ready to send.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
