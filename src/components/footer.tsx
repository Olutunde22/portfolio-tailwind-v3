import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  return (
    <footer
      className="scroll-mt-20 border-t border-line bg-[radial-gradient(circle_at_80%_100%,rgb(var(--accent)/0.08),transparent_50%)] px-6 py-20 md:px-9"
      id="contact"
    >
      <Reveal>
        <p className="font-mono text-[14px] text-accent">olutunde@web ~ $ sudo hire-me</p>

        <p className="mb-6.5 mt-2.5 font-mono text-[13px] text-fg-mute">
          [sudo] permission granted <span className="text-ok">✓</span> — opening channel…
        </p>

        <a
          href="mailto:solabi.tunde@hotmail.com"
          className="inline-block break-all bg-[linear-gradient(rgb(var(--accent)),rgb(var(--accent)))] bg-[length:0%_4px] bg-[position:0_100%] bg-no-repeat font-mono text-[22px] font-bold tracking-[-1px] [transition:background-size_.35s_ease,color_.2s_ease] hover:bg-[length:100%_4px] hover:text-accent min-[700px]:text-[52px]"
        >
          solabi.tunde@hotmail.com
        </a>

        <div className="mt-7.5 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[13px] text-fg-mute">
          <a
            href="https://github.com/Olutunde22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-mute hover:text-accent"
          >
            github/Olutunde22 ↗
          </a>
          <a
            href="https://www.linkedin.com/in/tunde-solabi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-mute hover:text-accent"
          >
            linkedin/tunde-solabi ↗
          </a>
          <span className="w-full md:ml-auto md:w-auto">
            © {new Date().getFullYear()} — engineered for performance
          </span>
        </div>
      </Reveal>
    </footer>
  );
}
