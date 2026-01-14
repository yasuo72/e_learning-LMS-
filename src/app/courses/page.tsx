"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MOCK_COURSES = [
  {
    id: "jee-physics",
    title: "JEE Physics Mastery",
    instructor: "Dr. Sharma",
    category: "JEE Mains",
    level: "Advanced",
    priceType: "Paid",
    duration: "40+ hours",
    lessons: 120,
    rating: 4.8,
    learners: "12.4k",
    live: true,
    color: "from-violet-500 via-fuchsia-500 to-amber-400",
  },
  {
    id: "neet-biology",
    title: "NEET Biology Booster",
    instructor: "Dr. Iyer",
    category: "NEET",
    level: "Intermediate",
    priceType: "Paid",
    duration: "32+ hours",
    lessons: 96,
    rating: 4.9,
    learners: "9.1k",
    live: false,
    color: "from-emerald-500 via-sky-400 to-cyan-400",
  },
  {
    id: "cbse-10-maths",
    title: "CBSE Class 10 Mathematics",
    instructor: "Anita Verma",
    category: "CBSE 9-12",
    level: "Beginner",
    priceType: "Free",
    duration: "25+ hours",
    lessons: 80,
    rating: 4.7,
    learners: "5.3k",
    live: false,
    color: "from-sky-500 via-indigo-500 to-violet-500",
  },
  {
    id: "coding-foundations",
    title: "Coding Foundations in JavaScript",
    instructor: "Rahul Singh",
    category: "Coding",
    level: "Beginner",
    priceType: "Free",
    duration: "18+ hours",
    lessons: 60,
    rating: 4.6,
    learners: "7.8k",
    live: true,
    color: "from-rose-500 via-orange-500 to-amber-400",
  },
  {
    id: "data-science",
    title: "Data Science with Python",
    instructor: "Priya Nair",
    category: "Data Science",
    level: "Intermediate",
    priceType: "Paid",
    duration: "45+ hours",
    lessons: 130,
    rating: 4.9,
    learners: "4.6k",
    live: false,
    color: "from-teal-500 via-emerald-500 to-lime-400",
  },
  {
    id: "upskilling-design",
    title: "UI/UX for Modern EdTech",
    instructor: "Sanjana Rao",
    category: "Upskilling",
    level: "Intermediate",
    priceType: "Paid",
    duration: "20+ hours",
    lessons: 70,
    rating: 4.8,
    learners: "2.9k",
    live: false,
    color: "from-fuchsia-500 via-purple-500 to-sky-500",
  },
];

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          Explore courses
        </h1>
        <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          Hand-crafted courses for JEE, NEET, CBSE, coding, and more &mdash;
          inspired by the visual, guided journeys of Byju&apos;s and Unacademy.
        </p>
      </header>

      <section className="flex flex-col gap-3 rounded-2xl border border-zinc-200/70 bg-white/70 p-3 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/70 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for a course, subject, or exam..."
              className="w-full rounded-full border border-zinc-200 bg-white/80 px-4 py-2 pr-9 text-xs text-zinc-900 shadow-sm outline-none ring-violet-500/40 placeholder:text-zinc-400 focus:border-violet-400 focus:ring dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100 dark:placeholder:text-zinc-500"
            />
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-400">
              ⌕
            </span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
            <button className="rounded-full border border-violet-200 bg-violet-50/70 px-3 py-1 font-medium text-violet-700 shadow-sm dark:border-violet-700/60 dark:bg-violet-950/60 dark:text-violet-300">
              All levels
            </button>
            <button className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 font-medium text-zinc-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50/80 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-violet-600 dark:hover:bg-violet-950/70">
              Free
            </button>
            <button className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 font-medium text-zinc-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50/80 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-violet-600 dark:hover:bg-violet-950/70">
              Paid
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] text-zinc-500 sm:justify-end sm:text-xs dark:text-zinc-400">
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100/80 px-2.5 py-1 dark:bg-zinc-900/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500" />
            Best matches
          </span>
          <span className="hidden sm:inline">Sort &amp; filters are visual only for now.</span>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <span>Showing {MOCK_COURSES.length} curated courses</span>
          <span className="hidden sm:inline">Hover on a card to see more details.</span>
        </div>

        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {MOCK_COURSES.map((course, index) => (
            <motion.article
              key={course.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 shadow-sm shadow-violet-500/5 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/20 dark:border-zinc-800 dark:bg-zinc-950/80 dark:hover:border-violet-700/70"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
            >
              <div
                className={`relative h-24 w-full bg-gradient-to-tr ${course.color}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.2),transparent_55%)] opacity-80" />
                <div className="relative flex h-full items-start justify-between p-3 text-[11px] text-white">
                  <div className="space-y-1">
                    <span className="inline-flex rounded-full bg-black/25 px-2 py-0.5 font-medium backdrop-blur-sm">
                      {course.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/25 px-1.5 py-0.5 backdrop-blur-sm">
                        ★ {course.rating}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/25 px-1.5 py-0.5 backdrop-blur-sm">
                        {course.learners} learners
                      </span>
                    </div>
                  </div>
                  {course.live && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/90 px-2 py-0.5 text-[10px] font-semibold text-emerald-950 shadow-sm shadow-emerald-300/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-900" />
                      LIVE
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <div>
                  <h2 className="line-clamp-2 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {course.title}
                  </h2>
                  <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    {course.instructor}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
                    {course.level}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
                    {course.lessons} lessons
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
                    {course.priceType}
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-1 text-[11px]">
                  <Link
                    href={`/courses/${course.id}`}
                    className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1 font-medium text-zinc-50 shadow-sm transition group-hover:bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50"
                  >
                    View details
                  </Link>
                  <span className="text-zinc-400 dark:text-zinc-500">
                    UI only &mdash; no backend yet
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
