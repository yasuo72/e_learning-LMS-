"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StudentDashboardPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          Student dashboard
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          A quick glimpse of your learning journey &mdash; courses, progress,
          and upcoming live classes.
        </p>
        <div className="flex flex-wrap gap-2 pt-1 text-xs text-zinc-500 dark:text-zinc-400">
          <Link
            href="/dashboard/student/achievements"
            className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 font-medium text-zinc-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50/80 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:border-violet-500 dark:hover:bg-violet-950/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500" />
            View achievements & certificates (mock)
          </Link>
          <Link
            href="/dashboard/student/progress"
            className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 font-medium text-zinc-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50/80 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:border-violet-500 dark:hover:bg-violet-950/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500" />
            View detailed progress (mock)
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Active courses",
            value: "4",
            hint: "+2 new this week",
          },
          {
            label: "Weekly watch time",
            value: "12.5h",
            hint: "Target: 15h",
          },
          {
            label: "Streak",
            value: "7 days",
            hint: "Great consistency!",
          },
        ].map((item) => (
          <motion.div
            key={item.label}
            className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm shadow-violet-500/10 dark:border-zinc-800 dark:bg-zinc-950/80"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {item.label}
            </p>
            <p className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {item.value}
            </p>
            <p className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400">
              {item.hint}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]">
        <motion.div
          className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Continue learning
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
              UI only &mdash; progress is mocked.
            </span>
          </div>
          <div className="space-y-3">
            {[ 
              "JEE Physics Mastery",
              "NEET Biology Booster",
              "Coding Foundations in JavaScript",
            ].map((title, index) => (
              <div
                key={title}
                className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50/80 p-3 text-xs dark:border-zinc-800/80 dark:bg-zinc-900/70"
              >
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">
                    {title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                    Lesson {index + 3} &bull; 12 min remaining
                  </p>
                 </div>
                 {index === 0 ? (
                   <Link
                     href="/learn/jee-physics/vectors-2d-motion"
                     className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold text-zinc-50 shadow-sm dark:bg-zinc-100 dark:text-zinc-900"
                   >
                     Resume
                   </Link>
                 ) : (
                   <button className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold text-zinc-50 shadow-sm dark:bg-zinc-100 dark:text-zinc-900">
                     Resume
                   </button>
                 )}
               </div>
             ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Upcoming live classes
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
              All times in IST
            </span>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200/70 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/5 to-sky-400/10 p-3 dark:border-zinc-700/80 dark:bg-zinc-900/70">
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-50">
                  Live Physics Doubt Solving
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-600 dark:text-zinc-400">
                  Today, 7:00 PM &bull; JEE Physics Mastery
                </p>
              </div>
              <button className="rounded-full bg-violet-600 px-3 py-1 text-[11px] font-semibold text-white shadow-sm shadow-violet-500/40">
                Join lobby
              </button>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-zinc-300/80 p-3 text-[11px] text-zinc-500 dark:border-zinc-700/80 dark:text-zinc-400">
              <span>No more live sessions scheduled. New classes will appear here.</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
