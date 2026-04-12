export function Pill({ children }: { children: React.ReactNode }) {
    return (
      <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-zinc-700 backdrop-blur
                       dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
        {children}
      </span>
    );
  }
  