import { Reveal } from "@/components/ui/reveal";

const projects = [
  {
    index: "01",
    domain: "tredbase.com",
    name: "Tredbase",
    tag: "NEXT.JS / EDTECH",
    description:
      "School payments, minus the paperwork. Fee collection and financial tracking for institutions.",
    image: "/projects/tredbase.png",
    href: "https://www.tredbase.com/",
  },
  {
    index: "02",
    domain: "usebash.io",
    name: "Bash",
    tag: "NEXT.JS / EVENTS",
    description: "Event management end to end — plan it, list it, sell the tickets, run the door.",
    image: "/projects/bash.png",
    href: "https://www.usebash.io/",
  },
  {
    index: "03",
    domain: "hancaly.com",
    name: "Hancaly",
    tag: "NEXT.JS / SAAS",
    description:
      "A handy calendar for appointments — scheduling and booking that stays out of the way.",
    image: "/projects/hancaly.png",
    href: "https://hancaly.com/",
  },
  {
    index: "04",
    domain: "alliancechemicalsglobal.com",
    name: "Alliance Chemicals",
    tag: "REACT / CORPORATE",
    description:
      "Global chemical solutions platform — quality and sustainability at industrial scale.",
    image: "/projects/alliance-chemicals.png",
    href: "https://www.alliancechemicalsglobal.com/",
  },
];

export function ProjectsSection() {
  return (
    <section className="scroll-mt-20 px-6 pb-16 pt-16 md:px-9" id="work">
      <h2 className="mb-8 font-mono text-[14px] font-normal text-accent">$ open ./work --all</h2>

      <Reveal className="grid gap-6 min-[1000px]:grid-cols-2">
        {projects.map(({ index, domain, name, tag, description, image, href }, position) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-line bg-panel [transition:transform_.18s_ease,border-color_.18s_ease] hover:-translate-y-1 hover:border-accent hover:text-fg"
          >
            <div className="flex items-center gap-2 border-b border-line px-4.5 py-3 font-mono text-[11px] text-fg-mute">
              <span className="size-2 rounded-full bg-accent" />
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="ml-1.5 truncate">{domain}</span>
              <span className="ml-auto">{index}</span>
            </div>

            <div className="relative h-[210px]">
              <img
                src={image}
                alt={`${name} product screenshot`}
                width={1220}
                height={420}
                className="absolute inset-0 size-full object-cover object-top"
                loading={position === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>

            <div className="px-4.5 py-5.5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[20px] font-bold">{name}</h3>
                <span className="whitespace-nowrap font-mono text-[11px] text-accent">{tag}</span>
              </div>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-fg-mute">{description}</p>
            </div>
          </a>
        ))}
      </Reveal>

      <a
        id="writing"
        href="https://medium.com/@olutunde/a-cleaner-way-to-inject-runtime-configs-in-react-with-docker-and-nginx-0c6e75af476f"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex scroll-mt-20 flex-col items-start gap-6 border border-dashed border-line-strong px-8 py-7 hover:border-accent hover:text-fg md:flex-row md:items-center md:justify-between md:gap-8"
      >
        <div>
          <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[2px] text-accent">
            Featured writing — 10 min read
          </p>
          <h3 className="text-[20px] font-bold">
            Injecting runtime configs in React with Docker &amp; nginx — the clean way
          </h3>
        </div>
        <span className="whitespace-nowrap font-mono text-[13px]">read →</span>
      </a>
    </section>
  );
}
