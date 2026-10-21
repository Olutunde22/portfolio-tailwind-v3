import { Reveal } from "@/components/ui/reveal";

const roles = [
  {
    dates: "2025 — now",
    hash: "a97f3e2",
    head: true,
    company: "Autochek Africa",
    title: "Engineer",
    logs: [
      "Rebuilt core flows: 2s+ page loads → under 50ms with ISR, in one week.",
      "Cut memory 90% with aggressive tree-shaking and lazy loading.",
    ],
  },
  {
    dates: "2023 — 2025",
    hash: "c50ms01",
    company: "Vaulthill",
    title: "Full stack engineer",
    logs: [
      "Architected the real-time layer of a metaverse: custom WebSocket protocol, live state sync.",
    ],
  },
  {
    dates: "2023",
    hash: "b4dg3s7",
    company: "Spur SMB",
    title: "Frontend & backend lead",
    logs: ["Led frontend and backend — 15% faster loads, 100% WCAG compliant."],
  },
  {
    dates: "2023 — 2025",
    hash: "0p3nd35",
    company: "OpenDesk",
    title: "Frontend developer",
    logs: [
      "Built a modular ERP in React and TypeScript — 20% faster feature delivery.",
      "Set review and unit-test standards that cut production bugs 35%.",
    ],
  },
  {
    dates: "2022 — 2023",
    hash: "aje0220",
    company: "Ajeo",
    title: "Frontend engineer",
    logs: [
      "Centralised state with Redux — 25% fewer UI inconsistency bugs.",
      "Held 99.9% uptime through peak e-commerce traffic.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <Reveal>
      <section className="scroll-mt-20 px-6 pt-16 md:px-9" id="experience">
        <h2 className="mb-8 font-mono text-[14px] font-normal text-accent">
          $ git log --experience
        </h2>

        {roles.map(({ dates, hash, head, company, title, logs }) => (
          <div
            key={company}
            className="grid gap-x-8 gap-y-4 border-t border-line py-7 [transition:transform_.2s_ease] last:border-b hover:translate-x-2 min-[700px]:grid-cols-[180px_1fr]"
          >
            <div className="font-mono text-[13px] text-fg-mute">
              {dates}
              <br />
              <span className="text-[11px] text-hash">{hash}</span>{" "}
              {head && (
                <span className="border border-accent px-1.5 py-px text-[11px] text-accent">
                  HEAD
                </span>
              )}
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-3.5">
                <h3 className="text-[22px] font-bold">{company}</h3>
                <p className="font-mono text-[12px] uppercase text-accent">{title}</p>
              </div>

              <p className="mt-3 font-mono text-[13px] leading-[1.8] text-fg-dim">
                {logs.map((log) => (
                  <span key={log} className="block">
                    &gt; {log}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Reveal>
  );
}
