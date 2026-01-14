"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BADGES = [
  {
    id: 1,
    label: "Concept mastery",
    title: "Vectors & 2D Motion",
    description: "Scored 90%+ across quizzes in this concept cluster.",
    color: "from-violet-500 via-fuchsia-500 to-amber-400",
  },
  {
    id: 2,
    label: "Consistency streak",
    title: "7-day learning streak",
    description: "Watched lessons or attempted questions every day.",
    color: "from-emerald-400 via-sky-400 to-cyan-400",
  },
  {
    id: 3,
    label: "Course progress",
    title: "50% through JEE Physics Mastery",
    description: "On track to finish the course before your target date.",
    color: "from-sky-500 via-indigo-500 to-violet-500",
  },
];

export default function StudentAchievementsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <nav className="text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/dashboard/student" className="hover:underline">
            Student dashboard
          </Link>{" "}
          / <span className="text-zinc-700 dark:text-zinc-300">Achievements</span>
        </nav>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Achievements & certificates
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              A glimpse of what your future profile can look like once we wire
              real progress and completion data.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100/80 px-2.5 py-1 dark:bg-zinc-900/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500" />
              UI only &mdash; certificates are mocked.
            </span>
          </div>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]">
        <motion.div
          className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Badges
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Unlocked (mocked)
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {BADGES.map((badge, index) => (
              <motion.article
                key={badge.id}
                className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/80 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/80"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
              >
                <div
                  className={`h-16 w-full bg-gradient-to-tr ${badge.color}`}
                >
                  <div className="flex h-full items-start justify-between p-3 text-[11px] text-white">
                    <span className="inline-flex rounded-full bg-black/25 px-2 py-0.5 font-medium backdrop-blur-sm">
                      {badge.label}
                    </span>
                    <span className="inline-flex rounded-full bg-black/25 px-2 py-0.5 uppercase tracking-tight backdrop-blur-sm">
                      Badge
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5 p-3 text-xs">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {badge.title}
                  </p>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                    {badge.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="space-y-3 rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-zinc-900 via-slate-900 to-violet-900 p-4 text-xs text-zinc-200 shadow-xl shadow-violet-500/30 dark:border-zinc-800/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <div className="mb-1 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-50">
              Sample certificate
            </h2>
            <span className="text-[11px] text-zinc-400">Preview only</span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-zinc-700/70 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.12),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.45),transparent_55%)] p-4 text-[11px]">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                  Certificate of completion
                </p>
                <p className="mt-1 text-base font-semibold text-zinc-50">
                  JEE Physics Mastery
                </p>
              </div>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-violet-500 to-amber-400 text-xs font-semibold text-white shadow-md shadow-violet-500/50">
                eL
              </span>
            </div>
            <p className="text-zinc-200">
              This is a visual certificate mock. In the real LMS, it would show
              the student&apos;s name, completion date, and a verifiable ID.
            </p>
            <div className="mt-3 flex items-center justify-between text-[10px] text-zinc-300">
              <div className="space-y-0.5">
                <p>Instructor</p>
                <p className="font-medium text-zinc-50">Dr. Sharma</p>
              </div>
              <div className="space-y-0.5 text-right">
                <p>Issued by</p>
                <p className="font-medium text-zinc-50">eLearning LMS</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 text-[11px] text-zinc-300">
            <p>
              After backend wiring, certificates can be generated as PDFs or
              shareable links.
            </p>
            <button className="rounded-full bg-zinc-50/10 px-3 py-1.5 text-[11px] font-semibold text-zinc-50 shadow-sm shadow-black/40 transition hover:bg-zinc-50/20">
              Download (mock)
            </button>
          </div>
        </motion.aside>
      </section>
    </div>
  );
}
