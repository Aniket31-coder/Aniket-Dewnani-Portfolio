import { motion, type MotionProps } from "framer-motion";
import { Card } from "../ui/Card";
import type { profile as profileValue } from "../data/profile";
// import { BulletList } from "../ui/BulletList";
export function AboutSection({
  profile,
  reveal,
}: {
  profile: typeof profileValue;
  reveal: MotionProps;
}) {
  return (
	<div className="grid gap-5">
  	<motion.div {...reveal}>
    	<Card>
      	<div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
        	{profile.about.map((p) => (
          	<p key={p} className="text-pretty leading-6">
            	{p}
          	</p>
        	))}
      	</div>
    	</Card>
  	</motion.div>
  	{/* <motion.div {...reveal}>
    	<Card>
      	<p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">What I’m optimizing for</p>
      	<BulletList items={["Modern UI with strong responsiveness","Motion that feels intentional (not noisy)","Clear “resume alignment” for recruiters"]} />
    	</Card>
  	</motion.div> */}
	</div>
  );
}
