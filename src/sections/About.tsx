import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { profile } from "../data/profile";
import { SectionHeader } from "../ui/SectionHeader";
 
/**
 * Splits a paragraph into segments where any matching `highlight` term is wrapped in <b>.
 */
function highlightProse(paragraph: string, highlights: readonly string[]) {
  if (highlights.length === 0) return [paragraph];
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  return paragraph.split(pattern);
}
 
// Slight per-card rotation
const STAT_ROTATIONS = ["-1.2deg", "0.6deg", "-0.4deg"];
 
export function About() {
  const prefersReducedMotion = useReducedMotion();
  const reveal: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.22 },
        transition: { duration: 0.55, ease: "easeOut" },
      };
 
  const segments = highlightProse(profile.about.paragraph, profile.about.highlights);
  const highlights = new Set<string>(profile.about.highlights);
 
  return (
    <section id="about" className="portfolio-section">
      <SectionHeader prefix="about," emphasis="briefly" index="01" total="06" />
 
      <div className="grid grid-cols-[1.4fr_1fr] items-start gap-12 max-[800px]:grid-cols-1 max-[800px]:gap-6">
        <motion.p {...reveal} className="about-prose">
          {segments.map((seg, i) =>
            highlights.has(seg) ? (
              <b key={i} className="font-medium italic text-accent">
                {seg}
              </b>
            ) : (
              <span key={i}>{seg}</span>
            )
          )}
        </motion.p>
 
        <motion.div {...reveal} className="flex flex-col gap-4">
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              style={{ transform: `rotate(${STAT_ROTATIONS[i]})` }}
              className="
                relative rounded-md border border-line bg-paper-2 px-6 py-5
                transition-transform duration-[280ms] ease-[cubic-bezier(.2,1,.3,1)]
                hover:!rotate-0 hover:-translate-y-1
              "
            >
              <div className="stat-num">
                <span className="text-accent">{s.accent}</span>
                {s.suffix}
              </div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
