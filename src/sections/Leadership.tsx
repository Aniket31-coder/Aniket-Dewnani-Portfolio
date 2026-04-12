import { motion, type MotionProps } from "framer-motion";
import { Card } from "../ui/Card";
import { baseRevealTransition } from "../motion/reveal";
import type { profile as profileValue } from "../data/profile";
import { BulletList } from "../ui/BulletList";
 
export function LeadershipSection({
  profile,
  reveal,
}: {
  profile: typeof profileValue;
  reveal: MotionProps;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {profile.positions.map((x, i) => (
        <motion.div key={x.title} {...reveal} transition={{ ...baseRevealTransition, delay: i * 0.05 }}>
          <Card>
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-medium text-zinc-900 dark:text-zinc-50">{x.title}</p>
              <p className="text-xs text-zinc-400">{x.date}</p>
            </div>
            <BulletList items={[...x.bullets]} />
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
