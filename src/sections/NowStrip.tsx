import { profile } from "../data/profile";
 
export function NowStrip() {
  return (
    <div className="mt-8 border-y border-line bg-paper">
      <div className="mx-auto grid max-w-[1280px] grid-cols-3 max-[780px]:grid-cols-1">
        {profile.now.map((cell) => (
          <div
            key={cell.key}
            className="
              flex min-w-0 items-baseline gap-3 px-6 py-[18px]
              border-r border-line last:border-r-0
              max-[780px]:border-r-0 max-[780px]:border-b max-[780px]:last:border-b-0
              max-[780px]:px-5 max-[780px]:py-3.5
            "
          >
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              {cell.key}
            </span>
            <span className="now-cell-v">{cell.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
