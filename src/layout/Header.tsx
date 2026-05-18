import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { useScrollSpy } from "../hooks/useScrollSpy";
 
const SECTION_IDS = ["about", "work", "projects", "skills", "awards"];
 
function SunIcon() {
  return (
    <svg
      className="sun"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: 16, height: 16, position: "absolute" }}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}
 
function MoonIcon() {
  return (
    <svg
      className="moon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: 16, height: 16, position: "absolute" }}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
 
export function Header() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
 
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
 
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
 
  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }
 
  // Close navbar menu on link click, outside click, escape
  useEffect(() => {
    if (!menuOpen) return;
    const handleDocClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("click", handleDocClick);
    window.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleDocClick);
      window.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);
 
  return (
    <nav ref={navRef} className={`portfolio-nav ${menuOpen ? "menu-open" : ""}`}>
      <a className="mark" href="#top" aria-label={`${profile.name} — home`}>
        <img
          src="/assets/logo.png"
          alt=""
          width="36"
          height="36"
        />
      </a>
      <ul className="navlinks">
        {profile.navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              data-link
              className={activeId === l.href.slice(1) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
 
      <div className="right">
        <button
          type="button"
          className="theme-tog"
          onClick={toggleTheme}
          data-link
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          <SunIcon />
          <MoonIcon />
        </button>
 
        <a
          className="cta"
          href={profile.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          data-link
        >
          Résumé <span className="arr" aria-hidden="true">↗</span>
        </a>
 
        <button
          type="button"
          className="nav-burger"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
          }}
          data-link
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>
    </nav>
  );
}