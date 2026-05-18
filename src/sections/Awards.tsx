import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { profile } from "../data/profile";
import { SectionHeader } from "../ui/SectionHeader";
 
export function Awards() {
  const prefersReducedMotion = useReducedMotion();
  const reveal: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.55, ease: "easeOut" },
      };
 
  return (
    <section id="awards" className="portfolio-section">
      <SectionHeader prefix="shiny" emphasis="things" index="05" total="06" />
 
      <motion.div
        {...reveal}
        className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4"
      >
        {profile.awards.map((a) => (
          <div
            key={a.title}
            className="
              group relative flex items-start gap-4
              rounded-lg border border-line bg-paper-2 p-[22px_24px]
              transition-[transform,background] duration-[280ms] ease-[cubic-bezier(.2,1,.3,1)]
              hover:-translate-y-[3px] hover:-rotate-[0.4deg] hover:bg-paper
              max-[600px]:p-5
            "
          >
            <div className="award-mark">{a.mark}</div>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <p className="award-title">{a.title}</p>
              <p className="m-0 text-sm leading-[1.5] text-ink-soft">
                {a.context}
              </p>
              <span className="mt-1 block font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
                {a.meta}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}