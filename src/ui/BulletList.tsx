export function BulletList({ items }: { items: string[] }) {
    return (
      <ul className="mt-3 space-y-2">
        {items.map((t) => (
          <li
            key={t}
            className="relative pl-5 md:pl-6 text-sm text-zinc-700 dark:text-zinc-200"
          >
            <span
              aria-hidden
              className="absolute left-0 top-[0.42rem] h-2 w-2 rounded-full
                         bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 p-[1px]"
            >
              <span className="block h-full w-full rounded-full bg-white/80 dark:bg-[#050816]" />
            </span>
            {t}
          </li>
        ))}
      </ul>
    );
  }
  