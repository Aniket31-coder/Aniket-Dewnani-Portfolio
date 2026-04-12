import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, type MotionProps, useInView, animate } from "framer-motion";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaDocker, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
 
import { Card } from "../ui/Card";
import { Pill } from "../ui/Pill";
import { colorFromIndex } from "../utils/colors";
import type { profile as profileValue } from "../data/profile";
 
type SkillRingProps = {
  label: string;
  value: number;
  icon: ReactNode;
  index: number;
  start: boolean;
};
 
function AnimatedSkillRing({
  label,
  value,
  icon,
  index,
  start,
}: SkillRingProps) {
  const [progress, setProgress] = useState(0);
 
  useEffect(() => {
    if (!start) {
      setProgress(0);
      return;
    }
 
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setProgress(Math.round(latest)),
    });
 
    return () => controls.stop();
  }, [start, value]);
 
  return (
    <div className="mx-auto flex w-24 flex-col items-center" title={label}>
    <div className="w-20">
      <CircularProgressbarWithChildren
        value={progress}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: colorFromIndex(index),
          trailColor: "rgba(113, 113, 122, 0.16)",
          pathTransition: "none",
        })}
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden
          className="text-2xl text-zinc-700 dark:text-zinc-100"
        >
          {icon}
        </span>
      </CircularProgressbarWithChildren>
    </div>
 
    <span className="mt-2 text-center text-xs font-medium text-zinc-700 dark:text-zinc-200">
      {label}
    </span>
  </div>
 
  );
}
 
export function SkillsSection({
  profile,
  reveal,
}: {
  profile: typeof profileValue;
  reveal: MotionProps;
}) {
  const ringsRef = useRef<HTMLDivElement | null>(null);
  const ringsInView = useInView(ringsRef, { once: false, amount: 0.35 });
 
  const skillRings = [
    { label: "HTML", value: 90, icon: <FaHtml5 /> },
    { label: "CSS", value: 88, icon: <FaCss3Alt /> },
    { label: "React", value: 86, icon: <FaReact /> },
    { label: "Next.js", value: 80, icon: <SiNextdotjs /> },
    { label: "Oracle SQL", value: 84, icon: <FaDatabase /> },
    { label: "Figma", value: 78, icon: <FaFigma /> },
    { label: "Docker", value: 72, icon: <FaDocker /> },
    { label: "TailwindCSS", value: 88, icon: <SiTailwindcss /> },
  ];
 
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <motion.div {...reveal}>
        <Card>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Skill Snapshot
          </p>
 
          <div
            ref={ringsRef}
            className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {skillRings.map((skill, i) => (
              <AnimatedSkillRing
                key={skill.label}
                label={skill.label}
                value={skill.value}
                icon={skill.icon}
                index={i}
                start={ringsInView}
              />
            ))}
          </div>
        </Card>
      </motion.div>
 
      <motion.div {...reveal}>
        <div className="grid gap-5">
          {profile.skills.map((g) => (
            <Card key={g.title}>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {g.title}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Pill key={it}>{it}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
