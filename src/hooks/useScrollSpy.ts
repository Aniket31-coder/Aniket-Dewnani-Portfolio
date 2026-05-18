import { useEffect, useState } from "react";

/**
 * Used to highlight the active nav pill in navbar
 */
export function useScrollSpy(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
 
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
 
    if (els.length === 0) return;
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
 
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
 
  return active;
}