import { profile } from "../data/profile";
import { useTypewriter } from "../hooks/useTypewriter";
 
export function Hero() {
  const typedName = useTypewriter(profile.name, 60);
 
  const [first = "", ...rest] = typedName.split(" ");
  const last = rest.join(" ");
 
  return (
    <header className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="meta">
            <span className="live" aria-hidden="true" />
            <span>{profile.availability} — {profile.location}</span>
          </div>
 
          <h1>
            <span className="first">{first || "\u00a0"}</span>
            <span className="last">
              {last}
              {last && <span className="swash">.</span>}
            </span>
          </h1>
 
          <p className="hero-tag">
            {profile.heroTagline.plain1}{" "}
            <em>{profile.heroTagline.em1}</em>{" "}
            {profile.heroTagline.plain2}{" "}
            <em>{profile.heroTagline.em2}</em>{" "}
            {profile.heroTagline.plain3}{" "}
            <span className="squiggle">
              {profile.heroTagline.squiggleText}
              <svg viewBox="0 0 200 18" preserveAspectRatio="none">
                <path d="M2,12 Q20,2 40,10 T80,10 T120,10 T160,10 T198,10" />
              </svg>
            </span>
            .
          </p>
        </div>
 
        <div className="hero-right">
          <img
            className="hero-img"
            src="/assets/heroimage.png"
            alt="Illustration of a developer at a workstation with React, Next.js, Tailwind, and Oracle dashboards"
            loading="eager"
            width="1376"
            height="768"
          />
        </div>
      </div>
    </header>
  );
}
