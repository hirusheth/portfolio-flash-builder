import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Braces,
  Cloud,
  Cpu,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hiren Sheth — Principal Software Engineer" },
      {
        name: "description",
        content:
          "Hiren Sheth is a Principal Software Engineer building scalable Java, cloud, and AI platforms.",
      },
      { property: "og:title", content: "Hiren Sheth — Principal Software Engineer" },
      {
        property: "og:description",
        content: "Software architecture, distributed systems, cloud, and AI platforms at scale.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const experience = [
  {
    role: "Principal Software Engineer",
    company: "CognitiveBotics",
    period: "Mar 2024 — Present",
    place: "Hyderabad, India",
    code: "CB-04",
    points: [
      "Own architectural direction and engineering execution for a 12-member team, partnering with the Founder, CTO and CBOs.",
      "Architected a Java and Spring Boot microservices platform deployed across four regional brands.",
      "Designed a configuration-driven architecture so one codebase supports multiple brands, regions and feature variations.",
      "Lead decisions across backend services, cloud infrastructure, AI workloads, scalability and operations.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Aura",
    period: "Mar 2021 — Feb 2022",
    place: "Remote, India",
    code: "AU-03",
    points: [
      "Collaborated with an offshore team on a serverless product supporting Aura.com.",
      "Designed and implemented serverless functions powering back-office workflows.",
      "Built Terraform infrastructure and deployment workflows for repeatable provisioning.",
      "Introduced a unit-testing framework to lift coverage and reduce regression risk.",
    ],
  },
  {
    role: "Full-Stack Java Developer",
    company: "byPeople Technologies",
    period: "May 2015 — Aug 2020",
    place: "Ahmedabad, India",
    code: "BP-02",
    points: [
      "Built full-stack applications with Java, Spring Boot, Node.js, Angular and MongoDB.",
      "Sole developer on an AI translation MVP; team lead for an online ticket-booking platform.",
      "Worked in Scrum, deploying to Linux environments with Jenkins-based continuous deployment.",
    ],
  },
  {
    role: "Java Developer",
    company: "ICT Infracon",
    period: "Jul 2014 — May 2015",
    place: "GIFT City, India",
    code: "ICT-01",
    points: [
      "Built a Java payroll application within a 10-member team, covering leave management, payslips and monthly reporting.",
    ],
  },
];

const skillGroups = [
  { label: "Core", items: ["Java", "Spring Boot", "Node.js", "Angular", "Next.js"] },
  { label: "Cloud + AI", items: ["AWS", "SageMaker", "Bedrock", "Serverless", "CloudWatch"] },
  { label: "Systems", items: ["Microservices", "Multi-region", "Terraform", "ELK", "MongoDB"] },
  { label: "Delivery", items: ["Jenkins", "Linux", "Maven", "Git", "Technical mentoring"] },
];

const stats = [
  { value: "10+", label: "years building" },
  { value: "100K+", label: "customers served" },
  { value: "100K", label: "requests / day" },
  { value: "04", label: "brands · one core" },
];

function Index() {
  const [activeExperience, setActiveExperience] = useState(0);
  const activeJob = experience[activeExperience];

  if (!activeJob) return null;

  return (
    <main className="site-grid min-h-screen px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-4 flex items-center justify-between rounded-md border border-border bg-background/90 px-4 py-3 backdrop-blur">
          <a href="#top" className="flex items-center gap-3" aria-label="Hiren Sheth, home">
            <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary font-[family-name:var(--font-mono)] text-xs font-bold text-primary-foreground">HS</span>
            <span className="hidden text-sm font-semibold text-foreground sm:block">Hiren Sheth</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="status-dot" aria-hidden />
            <span className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase text-muted-foreground">Available for ambitious systems</span>
          </div>
        </nav>

        <div id="top" className="bento-grid">
          <section className="panel hero-panel rise">
            <p className="eyebrow">Principal engineer · architect · builder</p>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.96] text-foreground sm:text-7xl lg:text-[5.7rem]">
              I design systems that stay <span className="text-primary">calm at scale.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&rsquo;m Hiren Sheth, a software architect with 10+ years across distributed Java platforms, cloud infrastructure and production AI. I turn complex requirements into resilient systems and focused engineering teams.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="mailto:shethhiren93@gmail.com"><Mail /> Start a conversation</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://linkedin.com/in/hirensheth1" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a>
              </Button>
            </div>
          </section>

          <aside className="panel signal-panel rise" aria-label="System profile">
            <div className="orbit" aria-hidden>
              <span className="orbit-ring orbit-ring-one" />
              <span className="orbit-ring orbit-ring-two" />
              <span className="orbit-core"><Cpu /></span>
              <span className="orbit-node node-one"><Server /></span>
              <span className="orbit-node node-two"><Cloud /></span>
              <span className="orbit-node node-three"><Braces /></span>
            </div>
            <div className="mt-auto border-t border-border pt-5">
              <p className="eyebrow text-primary">Current focus</p>
              <p className="mt-2 text-xl font-semibold text-foreground">Cloud + AI platforms</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Architecture direction, engineering leadership, multi-region reliability.</p>
            </div>
          </aside>

          <section className="panel stats-panel rise" aria-label="Career highlights">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-cell">
                <p className="font-[family-name:var(--font-mono)] text-3xl font-medium text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </section>

          <section className="panel journey-panel rise">
            <div className="section-heading">
              <div><p className="eyebrow">Career topology</p><h2>Journey through the stack</h2></div>
              <span className="font-[family-name:var(--font-mono)] text-xs text-muted-foreground">2014 → NOW</span>
            </div>
            <div className="journey-shell">
              <div className="journey-track" aria-label="Career timeline">
                <span className="journey-line" aria-hidden />
                <span className="journey-progress" style={{ height: `${(activeExperience / (experience.length - 1)) * 100}%` }} aria-hidden />
                {experience.map((job, index) => (
                  <Button
                    key={job.company}
                    type="button"
                    variant="ghost"
                    className={`journey-stop ${index === activeExperience ? "is-active" : ""}`}
                    onClick={() => setActiveExperience(index)}
                    aria-pressed={index === activeExperience}
                  >
                    <span className="journey-node">{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 text-left">
                      <span className="block text-[0.65rem] uppercase text-muted-foreground">{job.period}</span>
                      <span className="mt-1 block truncate text-sm font-semibold text-foreground">{job.company}</span>
                    </span>
                  </Button>
                ))}
              </div>
              <article key={activeJob.company} className="journey-detail animate-fade-in">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
                  <div><p className="eyebrow text-primary">{activeJob.code} · selected node</p><h3 className="mt-2 text-3xl font-semibold leading-tight text-foreground">{activeJob.role}</h3><p className="mt-1 text-sm text-primary">{activeJob.company}</p></div>
                  <span className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-2 font-[family-name:var(--font-mono)] text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{activeJob.place}</span>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground">
                  {activeJob.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />{point}</li>)}
                </ul>
              </article>
            </div>
          </section>

          <section className="panel stack-panel rise">
            <div className="section-heading"><div><p className="eyebrow">Technical inventory</p><h2>Stack &amp; tools</h2></div><Braces className="text-primary" /></div>
            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 font-[family-name:var(--font-mono)] text-[0.65rem] uppercase text-muted-foreground">// {group.label}</p>
                  <ul className="flex flex-wrap gap-2">{group.items.map((item) => <li key={item} className="tech-pill">{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          <section className="panel contact-panel rise">
            <div>
              <p className="eyebrow text-primary">Open channel</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Let&rsquo;s build the system behind the idea.</h2>
            </div>
            <div className="mt-10 space-y-3 text-sm">
              <a className="contact-row" href="mailto:shethhiren93@gmail.com"><Mail /> shethhiren93@gmail.com</a>
              <a className="contact-row" href="tel:+919722825095"><Phone /> +91 97228 25095</a>
              <span className="contact-row"><MapPin /> Hyderabad, India</span>
            </div>
          </section>

          <section className="panel education-panel rise">
            <p className="eyebrow">Education</p>
            <p className="mt-5 text-2xl font-semibold text-foreground">B.E. Computer Science</p>
            <p className="mt-2 text-sm text-muted-foreground">Gujarat Technological University</p>
            <p className="mt-8 font-[family-name:var(--font-mono)] text-xs text-primary">2010 — 2014</p>
          </section>
        </div>

        <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-md border border-border bg-background/90 px-4 py-4 text-xs text-muted-foreground">
          <p>© 2026 Hiren Sheth</p><p className="font-[family-name:var(--font-mono)]">BUILDING RELIABLE THINGS · HYDERABAD</p>
        </footer>
      </div>
    </main>
  );
}