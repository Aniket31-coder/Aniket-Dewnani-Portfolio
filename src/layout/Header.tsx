import ThemeToggle from "./ThemeToggle.tsx";
export function Header() {
  return (
	<header
  	className="sticky top-0 z-50 border-b border-black/5 bg-white/55 backdrop-blur-xl
             	dark:border-white/10 dark:bg-[#060B22]/55"
	>
  	<div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
    	<a
      	href="#top"
      	className="flex min-w-0 shrink items-center gap-2.5 font-semibold tracking-tight"
    	>
      	<span
        	className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-black/10 bg-white/70 shadow-sm
                   	dark:border-white/10 dark:bg-white/5 sm:h-10 sm:w-10"
      	>
        	<img
          	src="/assets/logo.png"
          	alt="AD logo"
          	className="h-full w-full object-contain invert dark:invert-0"
        	/>
      	</span>
      	<span
        	className="truncate bg-gradient-to-r from-sky-600 via-fuchsia-600 to-emerald-600 bg-clip-text text-base text-transparent
                   	dark:from-sky-300 dark:via-fuchsia-300 dark:to-emerald-300 sm:text-lg"
      	>
        	AD
      	</span>
    	</a>
    	<div className="flex items-center gap-4">
      	<nav className="hidden items-center gap-5 lg:flex">
        	<a className="text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" href="#about">About</a>
        	<a className="text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" href="#experience">Experience</a>
        	<a className="text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" href="#projects">Projects</a>
        	<a className="text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" href="#skills">Skills</a>
        	<a className="text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" href="#leadership">Leadership</a>
        	<a className="text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" href="#contact">Contact</a>
      	</nav>
      	<ThemeToggle />
    	</div>
  	</div>
	</header>
  );
}
