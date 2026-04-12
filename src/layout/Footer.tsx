export function Footer({ name }: { name: string }) {
    return (
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto text-center max-w-6xl px-4 py-10 text-xs text-zinc-500 dark:text-zinc-300">
          © {new Date().getFullYear()}. Created with 💖 By {name}.
        </div>
      </footer>
    );
  }
  