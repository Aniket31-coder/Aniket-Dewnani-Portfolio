import { motion, type MotionProps } from "framer-motion";
import { Card } from "../ui/Card";
import { baseRevealTransition } from "../motion/reveal";
import type { profile as profileValue } from "../data/profile";
import { BulletList } from "../ui/BulletList";
 
export function ExperienceSection({
  profile,
  reveal,
}: {
  profile: typeof profileValue;
  reveal: MotionProps;
}) {
  return (
    <div className="space-y-5">
      {profile.experience.map((e, i) => (
        <motion.div
          key={`${e.company}-${e.title}`}
          {...reveal}
          transition={{ ...baseRevealTransition, delay: i * 0.04 }}
        >
          <Card>
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-50">{e.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{e.company}</p>
              </div>
              <p className="text-xs text-zinc-400">{e.date}</p>
            </div>
            <BulletList items={[...e.desc]} />
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
