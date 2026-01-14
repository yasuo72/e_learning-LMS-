"use client";

import { motion } from "framer-motion";

export default function LivePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          Live classes (coming soon)
        </h1>
        <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          This is a placeholder screen to show where live classes, schedules,
          and replays will appear once we connect the frontend to real data.
        </p>
      </header>

      <motion.section
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {["Today", "This week", "Upcoming weeks"].map((label) => (
          <div
            key={label}
            className="flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {label}
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Live schedule UI placeholder
              </p>
              <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                Once wired, this will pull your upcoming live classes from the
                backend and show join links, time, and subject.
              </p>
            </div>
            <p className="mt-3 text-[11px] text-zinc-400 dark:text-zinc-500">
              Frontend-only for now &mdash; safe to ignore if you&apos;re testing
              layouts.
            </p>
          </div>
        ))}
      </motion.section>
    </div>
  );
}
