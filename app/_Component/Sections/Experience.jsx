const experience = [
  {
    company: "iGaming startup (confidential)",
    role: "Backend Engineer",
    place: "Remote",
    period: "Oct 2025 – Sep 2026",
    // note: "The company can’t be named. A reference from my team lead is available on request.",
    bullets: [
      "Built a game management service that loads, reloads and removes games at runtime. Configuration changes reach every instance without a restart, using Redis pub/sub.",
      "Drained active sessions safely before admin changes (Redis counters and a pause flag) and guarded concurrent admin changes with fencing tokens.",
      "Load-tested the service on four instances behind NGINX.",
      "Designed a typed game library (TypeScript generics, monorepo) so the live server and a separate simulation service run identical game logic.",
      "Built a simulation engine with configuration math checks, parallel stability analysis on worker threads and player-type session modelling, plus configurable acceptance rules for domain experts.",
    ],
    tags: ["TypeScript", "Node.js", "Redis", "NGINX", "k6", "Worker Threads"],
  },
  {
    company: "Swan Technology",
    role: "Full-Stack Developer",
    place: "Dubai, UAE (remote)",
    period: "Oct 2023 – Oct 2025",
    bullets: [
      "Built a lab management system that replaced the lab’s failed legacy software: patient records and history, doctor-configurable tests with reference thresholds, and printing of reports, invoices and envelopes. It handles 450+ reports a month, and report preparation dropped from 10 minutes to under 2.",
      "Wrote a custom A4 pagination engine for multi-page reports, with repeating headers and test groups that split across pages.",
      "Shipped the system as on-premise releases: GitHub Actions runs the tests and builds a bundle, and the update script backs up the database, migrates, and rolls back automatically if the health check fails.",
      "Also built a React Native storefront on Shopify’s GraphQL API, and the permission system (Unix-style users and groups) for a Laravel document-routing app for a university.",
    ],
    tags: [
      "Next.js",
      "Prisma",
      "SQLite",
      "GitHub Actions",
      "React Native",
      "GraphQL",
      "Laravel",
    ],
  },
  {
    company: "Self-employed",
    role: "Software Developer",
    place: "Hama, Syria",
    period: "Jan 2020 – Oct 2023",
    bullets: [
      "Restaurant POS & Inventory System (Laravel/React): point-of-sale, inventory and automated financial reporting, replacing a manual end-of-day reconciliation of about an hour with a process under 5 minutes. In production for 3+ years.",
      "Dental Clinic Management System (React/Node.js/TypeScript): patient records for 50+ monthly visits, treatment tracking, X-ray storage and a custom interactive tooth chart. In production for 2 years.",
    ],
    tags: ["Laravel", "React", "Node.js", "TypeScript"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center w-full px-4 py-10 md:py-14 gap-6 scroll-mt-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold dark:text-gray-100 text-gray-800">
        Experience
      </h2>

      <div className="flex flex-col gap-5 w-full max-w-4xl">
        {experience.map((job) => (
          <article
            key={job.company}
            className="flex flex-col gap-3 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 md:p-6"
          >
            <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold dark:text-gray-100 text-gray-800 break-words">
                  {job.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {job.role} · {job.place}
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 md:whitespace-nowrap">
                {job.period}
              </p>
            </header>

            {job.note && (
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                {job.note}
              </p>
            )}

            <ul className="list-disc pl-5 flex flex-col gap-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
              {job.bullets.map((b) => (
                <li key={b} className="break-words">
                  {b}
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2 pt-1" aria-label="Technologies">
              {job.tags.map((t) => (
                <li
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
