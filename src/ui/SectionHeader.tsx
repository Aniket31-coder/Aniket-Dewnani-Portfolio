import { motion, useReducedMotion, type MotionProps } from "framer-motion";
 
type Props = {
  prefix: string;
  emphasis: string;
  index: string;
  total: string;
};
 
/**
 * The standard section heading — "shiny things 05 / 06".
 */
export function SectionHeader({ prefix, emphasis, index, total }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const reveal: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.55, ease: "easeOut" },
      };
 
  return (
    <div className="mb-[60px] flex flex-wrap items-baseline justify-between gap-6 max-[780px]:mb-9">
      <motion.h2 {...reveal} className="section-heading">
        {prefix} <span className="section-em">{emphasis}</span>
      </motion.h2>
      <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-muted">
        {index} / {total}
      </span>
    </div>
  );
}