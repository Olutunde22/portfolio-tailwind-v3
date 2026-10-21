import { Reveal } from "@/components/ui/reveal";

const BAR_STAGGER_MS = 100;

const skills = [
  { label: "react / next.js", value: 96 },
  { label: "tailwind / css", value: 95 },
  { label: "typescript", value: 94 },
  { label: "git", value: 92 },
  { label: "websockets / real-time", value: 90 },
  { label: "jest / cypress", value: 88 },
  { label: "http / rest", value: 85 },
];

export function SkillsSection() {
  return (
    <Reveal>
      <section className="scroll-mt-20 px-6 pt-16 md:px-9" id="skills">
        <h2 className="mb-8 font-mono text-[14px] font-normal text-accent">
          $ npm run skills --verbose
        </h2>

        <div className="grid gap-x-14 gap-y-5.5 font-mono text-[13px] min-[700px]:grid-cols-2">
          {skills.map(({ label, value }, index) => (
            <div key={label}>
              <div className="mb-2 flex justify-between">
                <span>{label}</span>
                <span className="text-fg-mute">{value}%</span>
              </div>
              <div className="h-2 border border-line">
                <div
                  className="h-full animate-grow-bar bg-accent"
                  style={{ width: `${value}%`, animationDelay: `${index * BAR_STAGGER_MS}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
