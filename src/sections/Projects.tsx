import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { profile, type Project } from "../data/profile";
import { SectionHeader } from "../ui/SectionHeader";
 
function ThumbGlyph({ mark } : {mark: string}) {
  if(mark == "mic") {
    return (
      <svg viewBox="0 0 24 32" width="32" height="42" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="8" height="14" rx="4" />
        <path d="M 5 14 Q 5 21 12 21 Q 19 21 19 14" />
        <line x1="12" y1="21" x2="12" y2="27" />
        <line x1="8" y1="27" x2="16" y2="27" />
      </svg> 
    )
  }
  return <span>{mark}</span>
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className={`
        group relative flex flex-col p-7 pt-8 pb-7
        border-b border-r border-line last:border-r-0
        transition-[background] duration-[320ms]
        hover:bg-paper-2
        max-[980px]:border-r-0
        ${p.inProgress ? "opacity-85" : ""}
      `}
    >
      <div
        className={`
          relative mb-6 grid aspect-[16/10] w-full place-items-center overflow-hidden
          rounded-md border border-line-soft
          transition-transform duration-[420ms] ease-[cubic-bezier(.2,1,.3,1)]
          group-hover:-translate-y-1
          ${!p.thumbImage ? `border border-line-soft proj-thumb-${p.thumbVariant}`: 
          "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08),0_4px_6px_rgba(0,0,0,0.1)]"}
        `}
        aria-hidden="true"
      >
        {p.thumbImage ?
          <img
            src={p.thumbImage}
            alt={p.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        : (
          <span className="thumb-mark group-hover:rotate-[15deg] group-hover:scale-110">
            <ThumbGlyph mark={p.thumbMark} />
          </span>
        )}
      </div>
 
      <div className="mb-2.5 flex items-baseline justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
          {p.tag}
        </span>
        <span className="font-serif text-sm italic text-muted [font-variation-settings:'opsz'_24]">
          {p.number}
        </span>
      </div>
 
      <h3 className="proj-title">{p.name}</h3>
 
      <p className="m-0 mb-4 grow text-[14.5px] leading-[1.55] text-ink-soft">
        {p.description}
      </p>
 
      <div className="mb-4 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="
              rounded border border-line-soft bg-paper-2 px-2 py-[3px]
              font-mono text-[11px] text-ink-soft
              group-hover:bg-paper
            "
          >
            {s}
          </span>
        ))}
      </div>
 
      {(p.github || p.live) && (
        <div className="flex gap-[18px]">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              data-link
              className="
                group/link inline-flex items-center gap-1
                border-b-[1.5px] border-accent pb-px
                font-mono text-xs text-ink no-underline
                transition-colors duration-[220ms]
              "
            >
              GitHub{" "}
              <span
                aria-hidden="true"
                className="transition-transform duration-[220ms] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              data-link
              className="
                group/link inline-flex items-center gap-1
                border-b-[1.5px] border-accent pb-px
                font-mono text-xs text-ink no-underline
                transition-colors duration-[220ms]
              "
            >
              {p.live === "#top" ? "You’re here" : "Live"}{" "}
              <span
                aria-hidden="true"
                className="transition-transform duration-[220ms] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
 
export function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const reveal: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.55, ease: "easeOut" },
      };
 
  return (
    <section id="projects" className="portfolio-section">
      <SectionHeader prefix="things I" emphasis="made" index="03" total="06" />
 
      <motion.div
        {...reveal}
        className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-2 border-t border-line"
      >
        {profile.projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </motion.div>
    </section>
  );
}
