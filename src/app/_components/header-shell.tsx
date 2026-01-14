"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function useManualTheme(): {
  theme: ThemeMode;
  toggleTheme: () => void;
} {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("lms-theme");
    const initial: ThemeMode = stored === "dark" ? "dark" : "light";
    setTheme(initial);

    const root = document.documentElement;
    root.classList.remove("manual-light", "manual-dark");
    root.classList.add(initial === "dark" ? "manual-dark" : "manual-light");
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        const root = document.documentElement;
        root.classList.remove("manual-light", "manual-dark");
        root.classList.add(next === "dark" ? "manual-dark" : "manual-light");
        window.localStorage.setItem("lms-theme", next);
      }
      return next;
    });
  };

  return { theme, toggleTheme };
}

export default function HeaderShell() {
  const { theme, toggleTheme } = useManualTheme();
  const [open, setOpen] = useState(false);

  const notifications = [
    {
      title: "Live JEE Physics class starts in 20 min",
      time: "Today • 7:00 PM",
    },
    {
      title: "Quiz result: NEET Biology Booster",
      time: "Scored 18/20 • View analysis",
    },
    {
      title: "New course recommended: Data Science with Python",
      time: "Based on your recent activity",
    },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-400 text-xs font-semibold text-white shadow-md shadow-emerald-500/40">
            eL
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:inline">
            eLearning LMS
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-medium text-zinc-700 sm:flex md:text-sm dark:text-zinc-300">
          <Link
            href="/"
            className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            Courses
          </Link>
          <Link
            href="/live"
            className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            Live
          </Link>
          <Link
            href="/pricing"
            className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm">
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-white/60 px-2.5 py-1 text-[11px] font-medium text-zinc-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50/80 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/60 sm:inline-flex"
          >
            <span className="h-3 w-3 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500" />
            {theme === "dark" ? "Dark" : "Light"} mode
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-[11px] font-medium text-zinc-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50/80 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/60"
            >
              🔔
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 p-3 text-xs shadow-lg shadow-emerald-500/15 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/95">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Notifications
                  </p>
                  <button
                    type="button"
                    className="text-[10px] text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    Mark all as read
                  </button>
                </div>
                <ul className="space-y-2">
                  {notifications.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-xl border border-zinc-200/80 bg-zinc-50/90 p-2.5 text-left transition hover:border-emerald-200 hover:bg-emerald-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:hover:border-emerald-600/70 dark:hover:bg-emerald-950/60"
                    >
                      <p className="text-[11px] font-medium text-zinc-900 dark:text-zinc-50">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400">
                        {item.time}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/auth/login"
            className="hidden rounded-full border border-zinc-200 bg-white/60 px-3 py-1.5 font-medium text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:border-zinc-600 sm:inline-flex"
          >
            Log in
          </Link>
          <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-400 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-emerald-500/40 transition hover:shadow-lg hover:shadow-emerald-500/50 sm:text-sm">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
