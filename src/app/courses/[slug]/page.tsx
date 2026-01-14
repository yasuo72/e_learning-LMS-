"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MOCK_COURSES = {
  "jee-physics": {
    title: "JEE Physics Mastery",
    category: "JEE Mains",
    level: "Advanced",
    duration: "40+ hours",
    lessons: 120,
    rating: 4.8,
    learners: "12.4k",
  },
  "neet-biology": {
    title: "NEET Biology Booster",
    category: "NEET",
    level: "Intermediate",
    duration: "32+ hours",
    lessons: 96,
    rating: 4.9,
    learners: "9.1k",
  },
} as const;

function getCourseFromSlug(slug: string) {
  if (slug in MOCK_COURSES) {
    return MOCK_COURSES[slug as keyof typeof MOCK_COURSES];
  }
  const readable = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    title: readable || "Course details",
    category: "All courses",
    level: "Intermediate",
    duration: "24+ hours",
    lessons: 80,
    rating: 4.7,
    learners: "3.2k",
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const course = getCourseFromSlug(slug);

  return (
    <div className="space-y-8">
      <nav className="text-xs text-zinc-500 dark:text-zinc-400">
        <Link href="/courses" className="hover:underline">
          Courses
        </Link>{" "}
        / <span className="text-zinc-700 dark:text-zinc-300">{course.title}</span>
      </nav>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-zinc-100/80 px-3 py-1 text-[11px] font-medium text-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500" />
            {course.category}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            {course.title}
          </h1>
          <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
            Structured concepts, live doubt sessions, quizzes, and detailed
            analytics wrapped into a guided journey tailored for your exam.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px] text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-0.5 dark:bg-zinc-900">
              Level: <span className="font-medium text-zinc-900 dark:text-zinc-50">{course.level}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-0.5 dark:bg-zinc-900">
              Duration: <span className="font-medium text-zinc-900 dark:text-zinc-50">{course.duration}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-0.5 dark:bg-zinc-900">
              Lessons: <span className="font-medium text-zinc-900 dark:text-zinc-50">{course.lessons}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-0.5 dark:bg-zinc-900">
              ★ {course.rating} &bull; {course.learners} learners
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
            <Link
              href={`/courses/${slug}/enroll`}
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-50 shadow-sm transition hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50"
            >
              Enroll now
            </Link>
            <button className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-medium text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-900">
              Start free trial
            </button>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
              UI only &mdash; payments and enrollment will be wired later.
            </span>
          </div>
        </div>

        <motion.aside
          className="rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-zinc-900 via-slate-900 to-violet-900 p-4 text-xs text-zinc-200 shadow-xl shadow-violet-500/30 dark:border-zinc-800/80"
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="mb-3 rounded-2xl bg-zinc-900/60 p-3">
            <p className="text-[11px] font-medium text-zinc-300">
              Course preview
            </p>
            <div className="mt-2 flex h-32 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.4),transparent_55%)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-xs font-semibold text-white shadow-lg shadow-black/50">
                ▶
              </div>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center justify-between gap-3 rounded-xl bg-zinc-900/60 px-3 py-2">
              <span className="text-[11px] text-zinc-300">
                Includes quizzes, assignments, and completion certificate
              </span>
            </li>
            <li className="flex items-center justify-between gap-3 rounded-xl bg-zinc-900/60 px-3 py-2">
              <span className="text-[11px] text-zinc-300">
                Live doubt solving sessions every week
              </span>
            </li>
            <li className="flex items-center justify-between gap-3 rounded-xl bg-zinc-900/60 px-3 py-2">
              <span className="text-[11px] text-zinc-300">
                Access on web and mobile with progress sync
              </span>
            </li>
          </ul>
        </motion.aside>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-600 dark:text-zinc-300">
            <button className="rounded-full bg-zinc-900 px-3 py-1 text-zinc-50 shadow-sm dark:bg-zinc-100 dark:text-zinc-900">
              Overview
            </button>
            <button className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-200">
              Curriculum
            </button>
            <button className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-200">
              Reviews
            </button>
            <button className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-200">
              FAQ
            </button>
          </div>
          <div className="pt-1 text-xs text-zinc-500 dark:text-zinc-400">
            <Link
              href={`/courses/${slug}/discussion`}
              className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 font-medium text-zinc-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50/80 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:border-violet-500 dark:hover:bg-violet-950/60"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500" />
              View discussion & doubts (mock)
            </Link>
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p>
              This course breaks complex concepts into visual, bite-sized videos
              followed by quizzes and assignments. You&apos;ll move module by
              module, mastering foundations before tackling advanced topics.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-zinc-600 dark:text-zinc-400">
              <li>Concept visualisations and real exam-style questions.</li>
              <li>Live doubt clearing with expert instructors.</li>
              <li>Detailed reports to track progress and focus areas.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="mb-1 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Sample curriculum
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
              UI only &mdash; lessons are mocked.
            </span>
          </div>
          <div className="space-y-2">
            {[
              {
                module: "Module 1 · Foundations",
                lessons: ["Kinematics basics", "Vectors & 2D motion"],
              },
              {
                module: "Module 2 · Problem solving",
                lessons: ["Relative motion", "Projectile motion"] ,
              },
              {
                module: "Module 3 · Advanced practice",
                lessons: ["Mixed PYQs", "Speed drill"] ,
              },
            ].map((m) => (
              <div
                key={m.module}
                className="rounded-xl border border-zinc-200/70 bg-zinc-50/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/70"
              >
                <p className="text-[11px] font-medium text-zinc-800 dark:text-zinc-100">
                  {m.module}
                </p>
                <ul className="mt-1 space-y-0.5 text-[11px] text-zinc-600 dark:text-zinc-400">
                  {m.lessons.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
