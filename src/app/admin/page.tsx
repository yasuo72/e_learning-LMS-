"use client";

import { motion } from "framer-motion";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          Admin panel
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          High-level view of users, courses, and platform health. UI only for
          now.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total users", value: "42.3k" },
          { label: "Active courses", value: "128" },
          { label: "Monthly revenue", value: "₹ 18.6L" },
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
          </motion.div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)]">
        <motion.div
          className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Recent signups
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
              Last 24 hours
            </span>
          </div>
          <div className="space-y-2 text-xs">
            {["Ankita (JEE)", "Rahul (NEET)", "Meera (CBSE)", "Aditya (Coding)"].map(
              (user) => (
                <div
                  key={user}
                  className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50/80 p-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/70"
                >
                  <span className="text-zinc-800 dark:text-zinc-100">{user}</span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Student
                  </span>
                </div>
              ),
            )}
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
              Items needing moderation
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
              Flags are mocked.
            </span>
          </div>
          <div className="space-y-2 text-xs">
            {[
              "Course: Organic Chemistry Crash Course",
              "Comment: Doubt on vector question",
              "Review: Data Science with Python",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50/80 p-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/70"
              >
                <span className="line-clamp-1 text-zinc-800 dark:text-zinc-100">
                  {item}
                </span>
                <button className="rounded-full border border-zinc-300 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-700 shadow-sm hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900">
                  Review
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
