"use client";

import { useState } from "react";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && json.ok) {
        form.reset();
        setStatus({ kind: "sent", message: "Thanks! Your message is in my inbox. I'll reply within a day or two." });
      } else {
        setStatus({ kind: "error", message: json.error || "Something went wrong." });
      }
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <label>
        Your name
        <input name="name" required minLength={2} maxLength={100} autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required maxLength={200} autoComplete="email" />
      </label>
      <label>
        What do you need written?
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Topic, audience, deadline, and a link to your site if you have one."
        />
      </label>
      {/* Honeypot: hidden from people, bots tend to fill it in. */}
      <div className="hp" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button className="btn btn-primary" type="submit" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className={`form-status ${status.kind}`} role="status" aria-live="polite">
        {status.message}
        {status.kind === "error" && (
          <>
            {" "}
            <a href={`mailto:${email}`}>{email}</a>
          </>
        )}
      </p>
    </form>
  );
}
