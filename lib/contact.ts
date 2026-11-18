export type ContactInput = { name: string; email: string; message: string };

export type ValidationResult =
  | { ok: true; spam: boolean; data: ContactInput }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request." };
  const b = body as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const name = str(b.name);
  const email = str(b.email);
  const message = str(b.message);
  const spam = str(b.company).length > 0; // hidden honeypot field

  if (name.length < 2 || name.length > 100) return { ok: false, error: "Please add your name." };
  if (!EMAIL_RE.test(email) || email.length > 200)
    return { ok: false, error: "Please add a valid email address." };
  if (message.length < 10) return { ok: false, error: "Tell me a bit more about the project." };
  if (message.length > 5000) return { ok: false, error: "Please keep the message under 5,000 characters." };

  return { ok: true, spam, data: { name, email, message } };
}
