import { motion, type MotionProps } from "framer-motion";
import { Card } from "../ui/Card";
import { Pill } from "../ui/Pill";
import { baseRevealTransition } from "../motion/reveal";
import type { profile as profileValue } from "../data/profile";
import { BulletList } from "../ui/BulletList";
 
export function ProjectsSection({
  profile,
  reveal,
}: {
  profile: typeof profileValue;
  reveal: MotionProps;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {profile.projects.map((p, i) => (
        <motion.div key={p.name} {...reveal} transition={{ ...baseRevealTransition, delay: i * 0.05 }}>
          <Card>
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-medium text-zinc-900 dark:text-zinc-50">{p.name}</p>
              <p className="text-xs text-zinc-400">{p.date}</p>
            </div>
            <BulletList items={p.bullets} />
 
            <div className="mt-4 flex flex-wrap gap-2">
              {p.skills.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
 
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-300">
              {p.github && p.github !== "#" ? (
                <a className="hover:text-zinc-50" href={p.github}>
                  GitHub
                </a>
              ) : null}
              {p.live && p.live !== "#" ? (
                <a className="hover:text-zinc-50" href={p.live}>
                  Live
                </a>
              ) : null}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
