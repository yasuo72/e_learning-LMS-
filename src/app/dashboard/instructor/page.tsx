"use client";

import { motion } from "framer-motion";

export default function InstructorDashboardPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          Instructor dashboard
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Manage courses, track learner engagement, and stay on top of
          assignments.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Active courses", value: "6" },
          { label: "Enrolled learners", value: "18.4k" },
          { label: "Assignments to review", value: "23" },
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

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]">
        <motion.div
          className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Your courses
            </h2>
            <button className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold text-zinc-50 shadow-sm hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50">
              + New course
            </button>
          </div>
          <div className="space-y-3 text-xs">
            {["JEE Physics Mastery", "NEET Biology Booster", "Data Science with Python"].map(
              (title) => (
                <div
                  key={title}
                  className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/70"
                >
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-zinc-50">
                      {title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                      1.2k learners &bull; 4.8 rating
                    </p>
                  </div>
                  <button className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] font-medium text-zinc-700 shadow-sm hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900">
                    Manage
                  </button>
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
              Assignments to review
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
              UI only &mdash; data is mocked.
            </span>
          </div>
          <div className="space-y-3 text-xs">
            {[
              {
                title: "Vectors & 2D Motion",
                course: "JEE Physics Mastery",
                submissions: 8,
              },
              {
                title: "Human Physiology Quiz",
                course: "NEET Biology Booster",
                submissions: 9,
              },
              {
                title: "Mini project: Portfolio page",
                course: "Coding Foundations in JavaScript",
                submissions: 6,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/70"
              >
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                    {item.course}
                  </p>
                </div>
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900">
                  {item.submissions} pending
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
