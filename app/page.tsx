import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { GITHUB, EMAIL, LINKEDIN, projects, experience, education, skills, now } from "@/lib/data";

const chip = "rounded-md border border-line-hi bg-bg px-2.5 py-1 font-mono text-[12.5px]";
const btn = "inline-flex items-center gap-2 rounded-[10px] border border-line-hi px-5 py-3 text-[15px] font-medium transition hover:-translate-y-px hover:border-muted hover:bg-surface-2 motion-reduce:hover:translate-y-0";

function Role({ time, title, org, points }: { time: string; title: string; org: string; points?: string[] }) {
  return (
    <div className="grid gap-2 border-b border-line py-7 min-[760px]:grid-cols-[200px_1fr] min-[760px]:gap-8">
      <time className="pt-[5px] font-mono text-[13px] text-muted">{time}</time>
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.015em]">{title}</h3>
        <p className={`text-muted ${points ? "mb-3" : ""}`}>{org}</p>
        {points && (
          <ul>
            {points.map((p) => (
              <li key={p} className="relative mb-1.5 pl-5 before:absolute before:left-0 before:top-[.8em] before:h-px before:w-2 before:bg-accent">{p}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#work" className="absolute -top-16 left-4 z-[100] rounded-lg bg-accent px-3.5 py-2 font-semibold text-bg focus:top-3">Skip to content</a>
      <Header />

      <main id="top">
        {/* Hero */}
        <section className="hero-grid relative overflow-hidden border-b border-line pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="wrap relative">
            <h1>
              <span className="mb-7 block font-mono text-[clamp(.78rem,3.4vw,.95rem)] uppercase tracking-[.14em] text-accent">Anupama Abeyrathna</span>
              <span className="block max-w-[14em] text-[clamp(2.3rem,7vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
                Software Engineer <span className="text-muted">building useful things with code.</span>
              </span>
            </h1>
            <p className="mt-7 font-mono text-sm text-muted">Backend · Web · Mobile · Cloud</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className={`${btn} border-accent bg-accent font-semibold text-bg hover:border-[#b5f04d] hover:bg-[#b5f04d]`}>Explore My Work</a>
              <a href={GITHUB} target="_blank" rel="noopener" className={btn}>GitHub <span aria-hidden="true">↗</span></a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted sm:mt-16">
              {["Currently working @ Techlabs", "Colombo, Sri Lanka"].map((t, i) => (
                <span key={t} className="flex items-center gap-2.5">
                  <i className={`size-[7px] rounded-full ${i ? "bg-line-hi" : "bg-accent"}`} />{t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <Section id="work" eyebrow="Work" title="Things I've built">
          <div className="grid gap-4">
            {projects.map((p, i) => (
              <Reveal key={p.title}>
                <article className="grid gap-6 rounded-2xl border border-line bg-surface p-[22px] transition hover:-translate-y-0.5 hover:border-line-hi hover:bg-surface-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7 min-[860px]:grid-cols-[1fr_1.6fr] min-[860px]:gap-12 min-[860px]:p-9">
                  <div>
                    <span className="font-mono text-[13px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mb-1 mt-1.5 text-[26px] font-semibold tracking-[-0.015em]">{p.title}</h3>
                    <p className="text-[15px] text-muted">{p.kind}</p>
                  </div>
                  <div>
                    <p className="mb-5 max-w-[38em]">{p.desc}</p>
                    <div className="mb-[22px] flex flex-wrap gap-2" aria-label="Technologies">
                      {p.tags.map((t) => <span key={t} className={chip}>{t}</span>)}
                    </div>
                    <a href={p.href} target="_blank" rel="noopener" className="ext text-sm">View on GitHub ↗</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Experience" title="Where I've worked">
          <Reveal className="border-t border-line">{experience.map((r) => <Role key={r.title} {...r} />)}</Reveal>
          <Reveal><h3 className="mb-5 mt-14 text-lg font-semibold">Education</h3></Reveal>
          <Reveal className="border-t border-line">{education.map((r) => <Role key={r.title} {...r} />)}</Reveal>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="Skills" title="What I work with">
          <Reveal>
            <dl className="border-t border-line">
              {skills.map(([label, items]) => (
                <div key={label} className="grid gap-3 border-b border-line py-5 min-[760px]:grid-cols-[200px_1fr] min-[760px]:gap-8">
                  <dt className="pt-1 font-mono text-[12.5px] uppercase tracking-[.08em] text-muted">{label}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span key={s} className="rounded-lg border border-line-hi bg-surface px-3 py-[5px] text-sm transition-colors hover:border-accent">{s}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Section>

        {/* About */}
        <Section id="about" eyebrow="About" title="A bit about me">
          <div className="grid gap-14 min-[960px]:grid-cols-[1.4fr_1fr] min-[960px]:gap-20">
            <Reveal className="space-y-5 text-lg leading-[1.7] text-[#d4d6d9] [&>p]:max-w-[36em]">
              <p>I&apos;m a software engineer who likes understanding how systems actually work, then turning that understanding into products that people can use.</p>
              <p>I move between backend, frontend, mobile and cloud work. I&apos;m happiest when a project pushes me outside my comfort zone, which is usually how I end up learning something new.</p>
              <p>I&apos;m early in my career, and I&apos;m okay with that. Right now the goal is simple: keep building, keep learning, and get properly good at engineering.</p>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-line bg-surface p-7">
                <div className="mb-5 flex items-center gap-3.5 border-b border-line pb-5">
                  <div aria-hidden="true" className="grid size-12 place-items-center rounded-xl border border-line-hi bg-bg font-bold"><b className="text-accent">AA</b></div>
                  <div>
                    <strong className="block leading-[1.3]">Anupama Abeyrathna</strong>
                    <small className="text-muted">Software Engineer</small>
                  </div>
                </div>
                <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2.5 text-sm">
                  {[["location", "Colombo, Sri Lanka"], ["company", "Techlabs"], ["focus", "Backend, Web, Mobile, Cloud"]].map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="pt-0.5 font-mono text-[12.5px] text-muted">{k}</dt><dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-4 rounded-2xl border border-line bg-surface p-7">
                <h3 className="mb-3.5 flex items-center gap-2.5 text-[15px] font-semibold before:size-[7px] before:rounded-full before:bg-accent">Currently</h3>
                <ul>{now.map((n) => <li key={n} className="border-t border-line py-2 text-[14.5px] text-muted">{n}</li>)}</ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Let's connect." last>
          <Reveal><p className="mb-9 max-w-[32em] text-muted">The best way to reach me is email. I&apos;m also on GitHub and LinkedIn.</p></Reveal>
          <Reveal className="max-w-[640px] border-t border-line">
            {[
              ["Email", EMAIL, `mailto:${EMAIL}`],
              ["GitHub", "github.com/AnupamaSAbeyrathna", GITHUB],
              ["LinkedIn", "linkedin.com/in/anupama-abeyrathna", LINKEDIN],
            ].map(([k, v, href]) => (
              <a key={k} href={href} {...(k === "Email" ? {} : { target: "_blank", rel: "noopener" })}
                className="flex items-center justify-between gap-4 border-b border-line px-1 py-[22px] transition-all hover:bg-surface hover:px-4">
                <span className="min-w-20 font-mono text-[13px] text-muted">{k}</span>
                <span className="flex-1 [overflow-wrap:anywhere]">{v}</span>
                <span aria-hidden="true" className="text-accent">↗</span>
              </a>
            ))}
          </Reveal>
        </Section>
      </main>

      <footer className="py-8 text-sm text-muted">
        <div className="wrap flex flex-wrap justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Anupama Abeyrathna</span>
          <span>Built with Next.js and Tailwind CSS.</span>
        </div>
      </footer>
    </>
  );
}
