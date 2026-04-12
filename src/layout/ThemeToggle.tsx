import { useEffect, useState } from "react";
 
function SunIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
    </svg>
  );
}
 
function MoonIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}
 
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  return saved ? saved === "dark" : prefersDark;
}
 
export default function ThemeToggle() {
const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    const initial = getInitialTheme();
    setIsDark(initial);
    document.documentElement.classList.toggle("dark", initial);
    setMounted(true);
 
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        const next = e.newValue === "dark";
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
      }
    };
 
    const handleThemeSync = () => {
      const next = localStorage.getItem("theme") === "dark";
      setIsDark(next);
      document.documentElement.classList.toggle("dark", next);
    };
 
    window.addEventListener("storage", handleStorage);
    window.addEventListener("theme-change", handleThemeSync as EventListener);
 
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("theme-change", handleThemeSync as EventListener);
    };
  }, []);
 
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event("theme-change"));
  };
 
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="group relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-black/10
                bg-white/70 p-1 shadow-[0_6px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-sky-400/70 dark:border-white/10 dark:bg-white/10 dark:shadow-[0_6px_24px_rgba(0,0,0,0.28)]
                sm:h-10 sm:w-[4.5rem]"
    >
      <span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/10 via-fuchsia-500/10 to-emerald-500/10 opacity-80"
        aria-hidden="true"
      />
 
      <span
        className={`absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full
                    border border-black/5 bg-white text-amber-500 shadow-sm transition-all duration-300
                    dark:border-white/10 dark:bg-[#0F172A] dark:text-sky-200 sm:h-8 sm:w-8
                    ${mounted && isDark ? "translate-x-7 sm:translate-x-8" : "translate-x-0"}`}
        aria-hidden="true"
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
 
      <span className="flex w-full items-center justify-between px-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
        <SunIcon className={`h-3.5 w-3.5 transition-opacity ${isDark ? "opacity-35" : "opacity-100"}`} />
        <MoonIcon className={`h-3.5 w-3.5 transition-opacity ${isDark ? "opacity-100" : "opacity-35"}`} />
      </span>
    </button>
  );
}
