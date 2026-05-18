import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { profile } from "../data/profile";
import { SectionHeader } from "../ui/SectionHeader";
 
export function Experience() {
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
    <section id="work" className="portfolio-section">
      <SectionHeader prefix="where I’ve" emphasis="worked" index="02" total="06" />

      <motion.div {...reveal} className="timeline">
        {profile.experience.map((e) => (
          <div key={`${e.company}-${e.title}`} className="tl-item group relative pt-4 pb-9">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
              {e.date}
            </span>
            <h3 className="tl-heading">
              {e.title}{" "}
              <span className="italic text-accent">— {e.company}</span>
            </h3>
            <p className="mt-2.5 max-w-[680px] text-[15px] text-ink-soft">
              {e.description}
            </p>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {e.pills.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
