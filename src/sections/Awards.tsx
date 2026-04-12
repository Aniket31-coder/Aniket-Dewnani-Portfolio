import { motion, type MotionProps } from "framer-motion";
import { Card } from "../ui/Card";
import type { profile as profileValue } from "../data/profile";
import { BulletList } from "../ui/BulletList";
export function AwardsSection({
  profile,
  reveal,
}: {
  profile: typeof profileValue;
  reveal: MotionProps;
}) {
  return (
	<motion.div {...reveal}>
  	<Card>
    	<p className="title text-sm font-medium">Awards</p>
    	<BulletList items={[...profile.awards]} />
  	</Card>
	</motion.div>
  );
}
