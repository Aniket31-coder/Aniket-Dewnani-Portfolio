export function Card({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur
                   dark:border-white/10 dark:bg-white/5"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div
            className="absolute inset-y-0 -left-3/4 w-2/3 -skew-x-12 bg-gradient-to-r
                       from-transparent via-white/20 to-transparent
                       motion-safe:group-hover:animate-sheen"
          />
        </div>
        {children}
      </div>
    );
  }  