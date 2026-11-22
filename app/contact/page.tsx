import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hire Shubham Rajwar for SEO blogs, landing pages, content audits and technical writing.",
};

export default function Contact() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-medium">Contact</h1>
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <p>
          Send me the topic and who it&apos;s for. I take on blogs, landing pages, content audits,
          technical explainers and AEO rewrites for tech, finance, education and D2C brands.
        </p>
        <p>
          You can also email <a href={`mailto:${profile.email}`}>{profile.email}</a> or find me on{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </div>
      <ContactForm email={profile.email} />
    </section>
  );
}
