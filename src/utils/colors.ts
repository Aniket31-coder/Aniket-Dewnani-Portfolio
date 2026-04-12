const palette = ["#22c55e", "#38bdf8", "#a78bfa", "#fb7185", "#fbbf24", "#34d399"];
 
export function colorFromIndex(i: number) {
  return palette[((i % palette.length) + palette.length) % palette.length];
}