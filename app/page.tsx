import ContactForm from "@/components/ContactForm";
import {
  education,
  experience,
  featuredSamples,
  metricsAsOf,
  moreSamples,
  profile,
  project,
  skills,
} from "@/data/site";

const fmt = new Intl.NumberFormat("en-IN");
const top = featuredSamples[0];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" className="brand">
            {profile.name}
          </a>
          <nav aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="nav-cta">
              Hire me
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1>{profile.headline}</h1>
          <p className="lede">{profile.intro}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#work">
              See my writing
            </a>
            <a className="btn" href="#contact">
              Start a project
            </a>
          </div>
          {top.visits && (
            <aside className="proof" aria-label="Best performing post">
              <span className="proof-num">{fmt.format(top.visits)}</span>
              <span className="proof-text">
                organic visits to one guide I wrote for {top.client}
                <small> · as of {metricsAsOf}</small>
              </span>
            </aside>
          )}
        </section>

        <section id="work" className="section wrap">
          <div className="section-head">
            <h2>Writing that ranks</h2>
            <p>
              Published university blogs, with organic visits and search impressions from my own
              tracking sheet (as of {metricsAsOf}).
            </p>
          </div>
          <ol className="samples">
            {featuredSamples.map((s) => (
              <li key={s.url} className="sample">
                <div className="sample-meta">
                  <span className="client">{s.client}</span>
                  <span>
                    {s.format}
                    {s.published ? ` · ${s.published}` : ""}
                  </span>
                </div>
                <h3>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </h3>
                {(s.visits || s.impressions) && (
                  <dl className="metrics">
                    {s.visits !== undefined && (
                      <div>
                        <dt>Organic visits</dt>
                        <dd>{fmt.format(s.visits)}</dd>
                      </div>
                    )}
                    {s.impressions && (
                      <div>
                        <dt>Impressions</dt>
                        <dd>{s.impressions}</dd>
                      </div>
                    )}
                  </dl>
                )}
              </li>
            ))}
          </ol>

          <h3 className="sub">Beyond education: tech and finance explainers</h3>
          <ul className="more">
            {moreSamples.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.title}
                </a>
                <span>
                  {s.client} · {s.format}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section wrap split">
          <div>
            <h2>{project.title}</h2>
            <p>{project.body}</p>
          </div>
          <div>
            <h2>What I do</h2>
            <ul className="tags">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="section wrap">
          <div className="section-head">
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.role + job.org} className="job">
                <div className="job-when">
                  {job.period}
                  <span>{job.place}</span>
                </div>
                <div>
                  <h3>{job.role}</h3>
                  <p className="org">{job.org}</p>
                  <ul>
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
            {education.map((e) => (
              <article key={e.title} className="job">
                <div className="job-when">{e.year}</div>
                <div>
                  <h3>{e.title}</h3>
                  <p className="org">{e.org}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section wrap split contact">
          <div>
            <h2>Got a page that should be ranking?</h2>
            <p>
              Send me the topic and who it&apos;s for. I take on blogs, landing pages, content
              audits and AEO rewrites, mostly for colleges and EdTech brands.
            </p>
            <ul className="contact-links">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <ContactForm email={profile.email} />
        </section>
      </main>

      <footer className="wrap footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
