"use client";

import type { FormEvent } from "react";
import { useCallback, useState } from "react";
import { Button } from "@/components/Button/Button";
import styles from "./ContactStrip.module.scss";

export function ContactStrip() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Project inquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company}`,
        "",
        message,
      ].join("\n"),
    );
    window.location.href = `mailto:info@webvibetech.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }, []);

  return (
    <section className={styles.root} id="contact-strip" aria-label="Contact Webvibe Tech">
      <div className={styles.mesh} aria-hidden />
      <div className={styles.inner}>
        <div>
          <p className={styles.kicker}>Project desk</p>
          <h2 className={styles.title}>
            Tell us what you&apos;re <span className={styles.accent}>building next.</span>
          </h2>
          <p className={styles.lede}>
            Share scope, timelines, or open questions—we reply with a thoughtful next step, not a
            generic auto-response.
          </p>
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Email</span>
            <a className={styles.metaLink} href="mailto:info@webvibetech.com">
              info@webvibetech.com
            </a>
          </div>
        </div>
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Send a message</h3>
          <form className={styles.fields} onSubmit={onSubmit}>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="contact-name">Full name</label>
                <input
                  id="contact-name"
                  name="name"
                  className={styles.input}
                  autoComplete="name"
                  required
                  placeholder="Jane Cooper"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email">Work email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className={styles.input}
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="contact-phone">Phone</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className={styles.input}
                  autoComplete="tel"
                  placeholder="+44 · optional"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  className={styles.input}
                  autoComplete="organization"
                  placeholder="Company / startup"
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-message">How can we help?</label>
              <textarea
                id="contact-message"
                name="message"
                className={styles.textarea}
                required
                placeholder="Roadmap, stack, deadline, links to briefs…"
              />
            </div>
            <div className={styles.submit}>
              <Button type="submit" variant="primary" size="lg">
                {status === "sent" ? "Opening mail…" : "Submit inquiry"}
              </Button>
            </div>
            <p className={styles.hint}>
              By submitting, you agree we may contact you about this inquiry. Prefer a call? Email
              us with times that work.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
