export function Section({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <section id={id} className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-xl">
              {title}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-black/15 to-transparent dark:from-white/15" />
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </section>
    );
  }
  