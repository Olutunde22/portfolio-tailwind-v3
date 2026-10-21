import { useEffect, useState } from "react";

const FIRST_LINE_DELAY_MS = 350;
const LINE_STAGGER_MS = 240;

const checks = [
  "react@19 ............ ok",
  "vite@8 .............. ok",
  "tailwind@3 .......... ok",
  "tsc --strict ........ ok",
  "lighthouse ...... 100/100",
  "wcag 2.2 ............ AA",
];

const LINE_COUNT = checks.length + 1;

export function BootPanel() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers = Array.from({ length: LINE_COUNT }, (_, index) =>
      setTimeout(() => setVisibleLines(index + 1), FIRST_LINE_DELAY_MS + index * LINE_STAGGER_MS)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const lineClass = (index: number) =>
    `[transition:opacity_.25s_ease] ${index < visibleLines ? "opacity-100" : "opacity-0"}`;

  return (
    <aside className="border border-line bg-panel px-6.5 py-6 font-mono text-[13px] leading-[2.1]">
      <p className="mb-3.5 border-b border-line pb-3 text-fg-mute">$ system --check</p>

      {checks.map((check, index) => (
        <p key={check} data-boot-line className={`text-fg-dim ${lineClass(index)}`}>
          <span className="text-ok">✓</span> {check}
        </p>
      ))}

      <p data-boot-line className={`mt-2.5 text-accent ${lineClass(checks.length)}`}>
        status: available_for_work
        <span
          aria-hidden="true"
          className="ml-1 inline-block h-3.5 w-2 animate-blink bg-accent align-[-2px]"
        />
      </p>
    </aside>
  );
}
