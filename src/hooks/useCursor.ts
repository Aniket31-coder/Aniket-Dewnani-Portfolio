import { useEffect, useRef } from "react";
 
/**
 * Drives the global custom cursor. The cursor element should exist in the DOM
 * with `id="cursor"` and class `cursor-blob`.
 */
export function useCursor() {
  const targetX = useRef(0);
  const targetY = useRef(0);
 
  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
 
    const cursor = document.getElementById("cursor");
    if (!cursor) return;
 
    targetX.current = window.innerWidth / 2;
    targetY.current = window.innerHeight / 2;
    let curX = targetX.current;
    let curY = targetY.current;
    let raf = 0;
    let activated = false;
 
    function tick() {
      curX += (targetX.current - curX) * 0.22;
      curY += (targetY.current - curY) * 0.22;
      cursor!.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
 
    function handleMove(e: MouseEvent) {
      if (!activated) {
        activated = true;
        curX = e.clientX;
        curY = e.clientY;
        cursor!.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
        cursor!.classList.add("is-active");
      }
      targetX.current = e.clientX;
      targetY.current = e.clientY;
    }
    document.addEventListener("mousemove", handleMove);
 
    function isLink(t: Element): boolean {
      return !!t.closest("a, button, [data-link]");
    }
    function isText(t: Element): boolean {
      return !!t.closest("p, h1, h2, h3, h4, .hero-tag");
    }
 
    function handleOver(e: MouseEvent) {
      const t = e.target as Element | null;
      if (!t) return;
      if (isLink(t)) cursor!.classList.add("is-link");
      else cursor!.classList.remove("is-link");
      if (isText(t)) cursor!.classList.add("is-text");
      else cursor!.classList.remove("is-text");
    }
 
    document.addEventListener("mouseover", handleOver);
 
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
    };
  }, []);
}