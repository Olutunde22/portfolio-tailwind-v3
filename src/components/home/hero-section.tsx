import { Reveal } from "@/components/ui/reveal";
import { BootPanel } from "@/components/home/boot-panel";
import { TypedLine } from "@/components/home/typed-line";

export function HeroSection() {
  return (
    <section
      className="grid gap-12 bg-[radial-gradient(circle_at_20%_10%,rgb(var(--accent)/0.06),transparent_45%)] px-6 pb-16 pt-16 min-[700px]:pt-19 md:px-9 min-[1000px]:grid-cols-[1fr_380px]"
      id="hero"
    >
      <Reveal>
        <p className="mb-5.5 font-mono text-[14px] text-accent">olutunde@web ~ $ whoami</p>

        <h1 className="font-display text-[44px] font-extrabold leading-[0.98] tracking-[-1.5px] min-[700px]:text-[84px] min-[700px]:tracking-[-3px]">
          I make the web feel{" "}
          <span className="inline-block animate-glitch text-accent">instant.</span>
        </h1>

        <p className="mt-7 font-mono text-[14px] text-fg-mute">
          <TypedLine text="// Olutunde Solabi — Senior Frontend Engineer. React, Next.js, TypeScript." />
        </p>

        <p className="mt-4 max-w-[560px] text-[18px] leading-[1.6] text-fg-dim">
          Four years of turning heavy, complicated products into interfaces that load in
          milliseconds and pass every audit. Performance is not a nice-to-have — it&apos;s the
          product.
        </p>

        <div className="mt-9.5 flex flex-wrap gap-4 font-mono text-[14px]">
          <a
            href="#work"
            className="bg-accent px-5.5 py-3.5 text-bg hover:bg-accent-hover hover:text-bg"
          >
            [ view work ]
          </a>
          <a
            href="/Olutunde-Solabi-CV.pdf"
            download
            className="border border-line-strong px-5.5 py-[13px] hover:border-accent"
          >
            [ download cv ]
          </a>
        </div>
      </Reveal>

      <Reveal delay={110} className="self-start">
        <BootPanel />
      </Reveal>
    </section>
  );
}
