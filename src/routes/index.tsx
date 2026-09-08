import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hiren Sheth — Principal Software Engineer & Architect" },
      {
        name: "description",
        content:
          "Hiren Sheth, Principal Software Engineer in Hyderabad with 10+ years building scalable Java, cloud, and AI platforms.",
      },
      { property: "og:title", content: "Hiren Sheth — Principal Software Engineer & Architect" },
      {
        property: "og:description",
        content:
          "10+ years designing and modernizing distributed systems across Java, Spring Boot, AWS, and AI platforms.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const competencies = [
  "Software Architecture",
  "Distributed Systems",
  "Microservices",
  "Technical Strategy",
  "Engineering Leadership",
  "System Modernization",
  "Cloud Architecture",
  "Generative AI",
  "Agentic AI Workflows",
  "Serverless",
  "Platform Engineering",
  "Multi-Region Architecture",
  "Scalability & Reliability",
  "AWS Cost Optimization",
  "Infrastructure as Code",
  "Production Observability",
  "API & Third-Party Integrations",
  "Technical Mentoring",
  "Cross-Functional Leadership",
  "Agile Delivery",
];

const experience = [
  {
    role: "Principal Software Engineer",
    company: "CognitiveBotics",
    period: "Mar 2024 — Present",
    place: "Hyderabad, India",
    points: [
      "Own architectural direction and engineering execution for a 12-member team, partnering with the Founder, CTO and CBOs on technical strategy and delivery.",
      "Architected and evolved a Java and Spring Boot microservices platform deployed across 4 regional brands.",
      "Designed a Spring Cloud Config-driven architecture so a single codebase supports multiple brands, regional configurations and feature variations.",
      "Led decisions across backend services, cloud infrastructure, AI workloads, scalability and operations.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Aura (offshore engagement)",
    period: "Mar 2021 — Feb 2022",
    place: "Remote, India",
    points: [
      "Collaborated with an offshore team on a serverless product supporting Aura.com.",
      "Designed and implemented serverless functions powering back-office workflows.",
      "Built Terraform-based infrastructure and deployment workflows for consistent, repeatable provisioning.",
      "Introduced a unit-testing framework to lift coverage and reduce regression risk.",
    ],
  },
  {
    role: "Full-Stack Java Developer",
    company: "byPeople Technologies",
    period: "May 2015 — Aug 2020",
    place: "Ahmedabad, India",
    points: [
      "Built full-stack applications with Java, Spring Boot, Node.js, Angular and MongoDB.",
      "Sole developer on an MVP for a translation-based AI system; team lead for an online ticket-booking platform.",
      "Worked in Scrum, deploying to Linux environments with Jenkins-based continuous deployment.",
    ],
  },
  {
    role: "Java Developer",
    company: "ICT Infracon",
    period: "Jul 2014 — May 2015",
    place: "GIFT City, India",
    points: [
      "Built a Java payroll application within a 10-member team, covering leave management, payslips and monthly employee reporting.",
    ],
  },
];

const skills = [
  {
    label: "Languages & Frameworks",
    items: "Java, Spring Boot, Spring Cloud Config, Node.js, Angular, Next.js, HTML, Bootstrap",
  },
  { label: "Cloud & AI", items: "AWS ECS, EC2, SageMaker, Bedrock, CloudFront, CloudWatch" },
  {
    label: "Architecture",
    items: "Microservices, Serverless, Multi-Region Platforms, Configuration-Driven Architecture",
  },
  { label: "Infrastructure & DevOps", items: "Terraform, Jenkins, Linux, Maven, NPM, Git" },
  { label: "Data & Observability", items: "MongoDB, ELK Stack" },
  { label: "Integrations", items: "Stripe, DocuSign, IRS Electronic Filing" },
];

const stats = [
  { value: "10+", label: "Years building" },
  { value: "100K+", label: "Customers served" },
  { value: "100K/day", label: "Peak traffic, zero downtime" },
  { value: "4", label: "Regional brands, one codebase" },
];

const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "hiren.sheth — principal engineer" },
  { prompt: true, text: "deploy --region ap-south --brands 4" },
  { prompt: false, text: "✓ zero downtime · 100K req/day · live" },
];

function Index() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 pb-24 pt-16 sm:px-8 md:pt-24">
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[26rem]" aria-hidden />
      <header className="rise border-b border-border pb-12">
        <div className="flex items-center gap-2">
          <span className="pulse-live inline-block h-2 w-2 rounded-full bg-primary" />
          <p className="rule-label">Hyderabad, India · systems online</p>
        </div>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight text-foreground sm:text-7xl">
          Hiren Sheth
        </h1>
        <p className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-xl italic text-primary sm:text-2xl">
          Principal Software Engineer — software architecture, cloud &amp; AI platforms.
        </p>
        <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground">
          10+ years designing, building, modernizing and operating scalable platforms across Java,
          Spring Boot, microservices, serverless, cloud, frontend and AI ecosystems. I own
          architectural direction, lead engineering teams, and keep production systems calm at
          scale — multi-region and multi-brand architecture, generative and agentic AI workflows,
          cloud cost optimization, and deep observability.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm">
          <ContactLink href="mailto:shethhiren93@gmail.com" label="shethhiren93@gmail.com" />
          <ContactLink href="tel:+919722825095" label="+91 97228 25095" />
          <ContactLink
            href="https://linkedin.com/in/hirensheth1"
            label="linkedin.com/in/hirensheth1"
          />
        </ul>

        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-2/70" />
            <span className="ml-3 font-[family-name:var(--font-mono)] text-xs text-muted-foreground">
              hiren@prod — zsh
            </span>
          </div>
          <div className="space-y-1.5 px-4 py-4 font-[family-name:var(--font-mono)] text-[0.82rem] leading-relaxed">
            {terminalLines.map((line, i) => (
              <p key={line.text} className="term-line" style={{ animationDelay: `${0.6 + i * 1.1}s` }}>
                {line.prompt ? (
                  <span className="text-primary">➜&nbsp;</span>
                ) : (
                  <span className="text-muted-foreground">{line.text}</span>
                )}
                {line.prompt && <span className="text-foreground">{line.text}</span>}
              </p>
            ))}
            <p>
              <span className="text-primary">➜&nbsp;</span>
              <span className="caret-blink inline-block h-4 w-2 translate-y-0.5 bg-primary" />
            </p>
          </div>
        </div>
      </header>

      <section className="rise grid grid-cols-2 gap-px border-b border-border bg-border sm:grid-cols-4" style={{ animationDelay: "0.15s" }}>
        {stats.map((s) => (
          <div key={s.label} className="bg-background px-1 py-7">
            <p className="font-[family-name:var(--font-display)] text-3xl text-foreground">
              {s.value}
            </p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      <Section title="Experience" delay={0.25}>
        <ol className="space-y-10">
          {experience.map((job, i) => (
            <li key={job.company} className="relative pl-5">
              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground">
                  {job.role}
                </h3>
                <span className="rule-label">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary">
                {job.company} · <span className="text-muted-foreground">{job.place}</span>
              </p>
              <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                {job.points.map((p) => (
                  <li key={p} className="before:mr-2 before:text-border before:content-['—']">
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Core competencies">
        <ul className="flex flex-wrap gap-2">
          {competencies.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Skills">
        <dl className="divide-y divide-border border-y border-border">
          {skills.map((s) => (
            <div key={s.label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="rule-label pt-1">{s.label}</dt>
              <dd className="text-[0.95rem] leading-relaxed text-foreground">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground">
            B.E. Computer Science
          </h3>
          <span className="rule-label">2010 — 2014</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">Gujarat Technological University</p>
      </Section>

      <footer className="mt-20 border-t border-border pt-8 text-sm text-muted-foreground">
        <p className="font-[family-name:var(--font-display)] text-xl italic text-foreground">
          Let&rsquo;s talk architecture.
        </p>
        <p className="mt-2">
          <a
            href="mailto:shethhiren93@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            shethhiren93@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}

function Section({
  title,
  delay = 0,
  children,
}: {
  title: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <section className="rise mt-16" style={{ animationDelay: `${delay}s` }}>
      <h2 className="rule-label mb-6">{title}</h2>
      {children}
    </section>
  );
}

function ContactLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
      >
        {label}
      </a>
    </li>
  );
}
