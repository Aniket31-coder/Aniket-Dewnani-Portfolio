import { useEffect, useMemo, useState } from "react";
 
export function useTypewriter(text: string, speedMs = 70) {
  const safe = useMemo(() => text ?? "", [text]);
  const [idx, setIdx] = useState(0);
 
  useEffect(() => {
    setIdx(0);
    const t = window.setInterval(() => setIdx((v) => Math.min(v + 1, safe.length)), speedMs);
    return () => window.clearInterval(t);
  }, [safe, speedMs]);
 
  return safe.slice(0, idx);
}
