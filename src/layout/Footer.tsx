export function Footer({ name }: { name: string }) {
    return (
      <footer className="p-8 text-center font-mono text-xs uppercase tracking-[0.1em] text-muted">
          © {new Date().getFullYear()}. Created with 💖 By {name}.
      </footer>
    );
  }
  