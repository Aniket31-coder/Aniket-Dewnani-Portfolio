import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { profile } from "../data/profile";
 
export function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const reveal: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: "easeOut" },
      };
 
  return (
    <section id="contact" className="portfolio-section pb-0">
      {/* `.contact-panel` keeps the dotted overlay (::before) and dark-mode bg */}
      <motion.div
        {...reveal}
        className="
          contact-panel
          relative mx-auto mt-0 mb-20 max-w-[1216px] overflow-hidden rounded-xl
          px-12 py-20 text-center
          max-[780px]:px-6 max-[780px]:py-14 max-[780px]:mx-5 max-[780px]:mb-[60px]
        "
      >
        {/* All children sit above the ::before overlay */}
        <h2 className="contact-h2">
          let’s <em>talk</em>.
        </h2>
 
        <a
          href={`mailto:${profile.email}`}
          data-link
          className="email-link group/em"
        >
          {profile.email}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-[280ms] group-hover/em:translate-x-1 group-hover/em:-translate-y-1"
          >
            ↗
          </span>
        </a>
 
        <div className="
          relative mt-10 flex flex-wrap justify-center gap-8
          font-mono text-[13px] uppercase tracking-[0.12em]
          max-[780px]:gap-[18px] max-[780px]:text-[11px] max-[780px]:tracking-[0.1em]
        ">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              data-link
              className="border-b border-current pb-0.5 text-[inherit] no-underline"
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            data-link
            className="border-b border-current pb-0.5 text-[inherit] no-underline"
          >
            Résumé ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
