import { motion, type MotionProps } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react"; //, Sparkles
import { FaGithub as GitHub, FaLinkedinIn as LinkedIn } from "react-icons/fa6";
import { useTypewriter } from "../hooks/useTypewriter";
import type { profile as profileValue } from "../data/profile";
 
function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 opacity-25 blur-2xl dark:opacity-30" />
      <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-sky-400/30 blur-3xl animate-floaty" />
        <div className="absolute top-10 -right-20 h-64 w-64 rounded-full bg-fuchsia-400/25 blur-3xl animate-drift" />
        <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-emerald-400/25 blur-3xl animate-floaty" />
 
        <div className="relative rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5">
          <img
            src="/assets/heroimage.png"
            alt="Hero illustration"
            className="h-[320px] w-full rounded-xl object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
 
// function HeroShowcase() {
//   return (
//     <div className="relative mx-auto w-full max-w-md">
//       <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 opacity-25 blur-2xl dark:opacity-30" />
//       <div className="relative rounded-[28px] border border-black/10 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
//         <div className="flex items-center justify-between">
//           <p className="title text-sm font-semibold">Highlights</p>
//           <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
//             <Sparkles className="h-3.5 w-3.5" /> vibrant
//           </span>
//         </div>
 
//         <div className="mt-4 grid grid-cols-2 gap-3">
//           <div className="rounded-2xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
//             <p className="muted text-xs">Focus</p>
//             <p className="title mt-1 text-sm font-semibold">UI + Analytics</p>
//           </div>
//           <div className="rounded-2xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
//             <p className="muted text-xs">Stack</p>
//             <p className="title mt-1 text-sm font-semibold">React • Tailwind</p>
//           </div>
//           <div className="col-span-2 overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
//             <div className="relative">
//               <div className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-sky-400/40 blur-2xl dark:bg-sky-400/25" />
//               <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/40 blur-2xl dark:bg-fuchsia-400/25" />
//               <div className="absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-emerald-400/40 blur-2xl dark:bg-emerald-400/25" />
//               <p className="title relative text-sm font-semibold">Currently shipping</p>
//               <p className="muted relative mt-1 text-sm">
//                 Clean, responsive experiences with intentional motion.
//               </p>
//             </div>
//           </div>
//         </div>
 
//         <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
//           <span className="rounded-full bg-black/5 px-2 py-1 dark:bg-white/10">modern</span>
//           <span className="rounded-full bg-black/5 px-2 py-1 dark:bg-white/10">fast</span>
//           <span className="rounded-full bg-black/5 px-2 py-1 dark:bg-white/10">accessible</span>
//         </div>
//       </div>
//     </div>
//   );
// }
 
export function HeroSection({
  profile,
  reveal,
}: {
  profile: typeof profileValue;
  reveal: MotionProps;
}) {
  const typedName = useTypewriter(profile.name, 60);
 
  const github = profile.socials.find((x) => x.label === "GitHub")?.href ?? "#";
  const linkedin = profile.socials.find((x) => x.label === "LinkedIn")?.href ?? "#";
 
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div {...reveal}>
          <p className="muted text-sm">{profile.location}</p>
 
          <h1 className="title mt-2 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="inline-block hover:animate-wiggle">{typedName}</span>
          </h1>
 
          <p className="muted mt-3 text-pretty text-base md:text-lg">{profile.roleLine}</p>
 
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary" href={github}>
              <GitHub className="h-4 w-4" /> GitHub <ArrowUpRight className="h-4 w-4 opacity-80" />
            </a>
            <a className="btn-soft" href={linkedin}>
              <LinkedIn className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>
            <a className="btn-soft" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" /> Email
            </a>
            {profile.socials
              .filter((s) => s.label === "Resume")
              .map((s) => (
                <a key={s.label} className="btn-soft" href={s.href}>
                  Resume <ArrowUpRight className="h-4 w-4 opacity-70" />
                </a>
              ))}
          </div>
        </motion.div>
 
        <motion.div {...reveal} className="md:justify-self-end">
          <HeroArt />
        </motion.div>
      </div>
    </div>
  );
}
