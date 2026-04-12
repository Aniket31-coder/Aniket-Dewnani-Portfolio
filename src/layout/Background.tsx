export function Background() {
    return (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-36 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl
                     opacity-[0.14] bg-gradient-to-tr from-sky-400 via-fuchsia-400 to-emerald-300
                     dark:opacity-25 dark:from-sky-400 dark:via-fuchsia-400 dark:to-emerald-300"
        />
        <div
          className="absolute top-48 -left-48 h-[560px] w-[560px] rounded-full blur-3xl
                     opacity-[0.10] bg-gradient-to-tr from-cyan-300 via-violet-400 to-fuchsia-300
                     dark:opacity-20 dark:from-cyan-400 dark:via-violet-500 dark:to-fuchsia-400"
        />
        <div
          className="absolute -bottom-56 right-[-140px] h-[560px] w-[560px] rounded-full blur-3xl
                     opacity-[0.08] bg-gradient-to-tr from-emerald-300 via-sky-300 to-indigo-300
                     dark:opacity-15 dark:from-emerald-300 dark:via-sky-300 dark:to-indigo-300"
        />
      </div>
    );
  }
  