"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const COURSES = [
  {
    id: "jee-physics",
    title: "JEE Physics Mastery",
    completion: 52,
    hoursWatched: 18.4,
    quizzesTaken: 6,
    avgScore: 82,
  },
  {
    id: "neet-biology",
    title: "NEET Biology Booster",
    completion: 35,
    hoursWatched: 9.1,
    quizzesTaken: 3,
    avgScore: 78,
  },
  {
    id: "coding-foundations",
    title: "Coding Foundations in JavaScript",
    completion: 68,
    hoursWatched: 11.7,
    quizzesTaken: 4,
    avgScore: 88,
  },
];

export default function StudentProgressPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <nav className="text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/dashboard/student" className="hover:underline">
            Student dashboard
          </Link>{" "}
          / <span className="text-zinc-700 dark:text-zinc-300">Progress</span>
        </nav>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Progress overview
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Mock analytics view showing how a student&apos;s progress dashboard
              can look once wired to real data.
            </p>
          </div>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
            UI only &mdash; numbers are hard-coded for now.
          </span>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {["Courses in progress", "Hours watched (this week)", "Average quiz score"].map(
          (label, index) => (
            <motion.div
              key={label}
              className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{label}</p>
              <p className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {index === 0 ? 3 : index === 1 ? "8.5h" : "84%"}
              </p>
              <p className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                Mock metric &mdash; for UI only.
              </p>
            </motion.div>
          ),
        )}
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:items-start">
        <motion.div
          className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <div className="mb-1 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Course-wise progress
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
              Mock data
            </span>
          </div>
          <div className="space-y-3">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="space-y-1.5 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/70"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-medium text-zinc-900 dark:text-zinc-50">
                      {course.title}
                    </p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                      {course.hoursWatched}h watched · {course.quizzesTaken} quizzes ·
                      avg {course.avgScore}%
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-200">
                    {course.completion}%
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400"
                    style={{ width: `${course.completion}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-zinc-500 dark:text-zinc-400">
                  <span>Lesson-level progress view (mock)</span>
                  <Link
                    href={`/learn/${course.id}/vectors-2d-motion`}
                    className="font-medium text-violet-600 underline-offset-2 hover:underline dark:text-violet-400"
                  >
                    Go to course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
        >
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Upcoming checkpoints (mock)
          </h2>
          <ul className="space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400">
            <li>• Quiz: Vectors &amp; 2D Motion (due tomorrow)</li>
            <li>• Assignment: Mixed kinematics problems (this weekend)</li>
            <li>• Mock test: Mechanics full syllabus (next week)</li>
          </ul>
          <div className="rounded-2xl border border-dashed border-zinc-300/80 p-3 text-[11px] text-zinc-500 dark:border-zinc-700/80 dark:text-zinc-400">
            In the full LMS, this sidebar could be driven by real schedules and
            completion rules coming from the backend.
          </div>
        </motion.aside>
      </section>
    </div>
  );
}
