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
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <label className="text-sm font-medium">
        Your name
        <input className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-base focus:outline-2 focus:outline-neutral-500" name="name" required minLength={2} maxLength={100} autoComplete="name" />
      </label>
      <label className="text-sm font-medium">
        Email
        <input className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-base focus:outline-2 focus:outline-neutral-500" name="email" type="email" required maxLength={200} autoComplete="email" />
      </label>
      <label className="text-sm font-medium">
        What do you need written?
        <textarea
          className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-base focus:outline-2 focus:outline-neutral-500"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Topic, audience, deadline, and a link to your site if you have one."
        />
      </label>
      {/* Honeypot: hidden from people, bots tend to fill it in. */}
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        className="self-start rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85 disabled:opacity-60 dark:bg-white dark:text-black"
        type="submit" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>
      <p
        className={`min-h-[1.5em] text-sm ${status.kind === "error" ? "text-red-700 dark:text-red-400" : "text-green-800 dark:text-green-400"}`}
        role="status"
        aria-live="polite"
      >
        {status.message}
        {status.kind === "error" && (
          <>
            {" "}
            <a className="underline" href={`mailto:${email}`}>{email}</a>
          </>
        )}
      </p>
    </form>
  );
}
