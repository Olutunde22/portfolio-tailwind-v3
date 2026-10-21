import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const COUNT_DURATION_MS = 1400;

const stats = [
  { value: 97, format: (n: number) => `${n}%`, label: "Faster core flows" },
  { value: 90, format: (n: number) => `−${n}%`, label: "Memory footprint" },
  { value: 100, format: (n: number) => `${n}%`, label: "WCAG compliance" },
  { value: 4, format: (n: number) => `${n}+`, label: "Products shipped", accent: true },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const elapsed = Math.min(1, (now - start) / COUNT_DURATION_MS);
          setProgress(1 - Math.pow(1 - elapsed, 3));
          if (elapsed < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.35 }
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Reveal>
      <section
        ref={sectionRef}
        id="stats"
        className="grid grid-cols-2 gap-px border-b border-line bg-line min-[1000px]:grid-cols-4"
      >
        {stats.map(({ value, format, label, accent }) => (
          <div key={label} className="bg-bg px-6 py-8 md:px-9">
            <div
              className={`font-display text-[36px] font-extrabold md:text-[48px] ${accent ? "text-accent" : ""}`}
            >
              {format(Math.round(value * progress))}
            </div>
            <div className="mt-1.5 font-mono text-[12px] uppercase tracking-[1px] text-fg-mute">
              {label}
            </div>
          </div>
        ))}
      </section>
    </Reveal>
  );
}
