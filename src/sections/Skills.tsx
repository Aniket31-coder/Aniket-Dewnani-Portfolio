import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { Fragment } from "react";
import { profile } from "../data/profile";
import { SectionHeader } from "../ui/SectionHeader";
 
export function Skills() {
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
    <section id="skills" className="portfolio-section">
      <SectionHeader prefix="the" emphasis="toolkit" index="04" total="06" />
 
      <motion.div {...reveal} className="flex flex-col gap-3.5">
        {profile.toolkit.map((row) => {
          const tagAccent = row.primary || row.learning;
 
          return (
            <div
              key={row.tag}
              className="
                kit-row-bg
                grid grid-cols-[200px_1fr] items-baseline gap-6 rounded-lg
                border border-dashed border-line bg-paper-2 px-[26px] py-[22px]
                transition-[background,border-color] duration-[280ms]
                hover:bg-paper
                max-[760px]:grid-cols-1 max-[760px]:gap-2 max-[760px]:px-5 max-[760px]:py-[18px]
              "
            >
              <span
                className={`
                  font-mono text-[11px] font-medium uppercase tracking-[0.12em]
                  ${tagAccent ? "text-accent" : "text-ink-soft"}
                `}
              >
                {row.tag}
              </span>
 
              <span className="kit-items">
                {row.items.map((item, i) => (
                  <Fragment key={item}>
                    <span>{item}</span>
                    {i < row.items.length - 1 && (
                      <span className="not-italic text-muted">·</span>
                    )}
                  </Fragment>
                ))}
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
