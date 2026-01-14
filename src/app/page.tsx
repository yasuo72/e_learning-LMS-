"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100/80 px-3 py-1 text-[11px] font-medium text-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500" />
            Inspired by Byju&apos;s &amp; Unacademy style learning journeys
          </div>
          <motion.h1
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-zinc-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Up your
            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text pl-2 text-transparent">
              skills
            </span>
            <br className="hidden sm:block" />
            to advance your career path.
          </motion.h1>
          <motion.p
            className="max-w-xl text-sm text-zinc-600 md:text-base dark:text-zinc-400"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          >
            Learn from structured tracks, live classes, and interactive
            assessments &mdash; designed to feel like a polished edtech
            platform while we wire up the real backend.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
          >
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-50 shadow-sm transition hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50"
            >
              Browse courses
            </Link>
            <Link
              href="/auth/login"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-medium text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              Log in / Sign up
            </Link>
            <div className="flex flex-wrap gap-3 text-[11px] text-zinc-500 dark:text-zinc-400">
              <span>Live &amp; recorded classes</span>
              <span className="hidden md:inline">Quizzes, assignments, analytics</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-zinc-900 via-slate-900 to-emerald-900 p-4 text-xs text-zinc-200 shadow-xl shadow-emerald-500/25 dark:border-zinc-800/80"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[11px] font-medium text-zinc-300">
              Featured mentor
            </p>
            <span className="rounded-full bg-zinc-900/70 px-2 py-0.5 text-[10px] text-zinc-300">
              Mock profile · UI only
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-2 rounded-2xl bg-zinc-900/60 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-400 to-sky-400 text-xs font-semibold text-emerald-950 shadow-md shadow-emerald-300/60">
                  DR
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-zinc-50">Dr. Riya Mehta</p>
                  <p className="text-[10px] text-zinc-400">Physics · JEE / NEET</p>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-zinc-300">
                "I break complex topics into visual stories so concepts actually
                stick."
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-zinc-900/60 p-3">
              <p className="text-[11px] text-zinc-400">Live &amp; progress</p>
              <p className="text-[11px] text-zinc-300">
                Next live class: <span className="font-medium">Today, 7:00 PM</span>
              </p>
              <p className="text-[11px] text-zinc-300">
                Students enrolled: <span className="font-medium">1,240+</span>
              </p>
              <p className="text-[11px] text-zinc-300">
                Average rating: <span className="font-medium">4.8 / 5</span>
              </p>
            </div>
          </div>
          <div className="mt-3 space-y-2 rounded-2xl bg-zinc-900/60 p-3">
            <p className="text-[11px] font-medium text-zinc-200">
              Quick links
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <Link
                href="/courses"
                className="rounded-full bg-zinc-100/10 px-3 py-1 text-zinc-50 underline-offset-2 hover:underline"
              >
                Explore all courses
              </Link>
              <Link
                href="/pricing"
                className="rounded-full bg-zinc-100/10 px-3 py-1 text-zinc-50 underline-offset-2 hover:underline"
              >
                View pricing (mock)
              </Link>
              <Link
                href="/live"
                className="rounded-full bg-zinc-100/10 px-3 py-1 text-zinc-50 underline-offset-2 hover:underline"
              >
                Upcoming live classes
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="space-y-4">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-500">
            Why learners love it
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50">
            Fostering a playful &amp; engaging learning environment
          </h2>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            These cards are UI-only mocks, but mirror the sections in the
            reference design.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[ 
            {
              title: "Interactive classes",
              body: "Bite-sized lessons with quizzes and assignments right after.",
            },
            {
              title: "Live doubt solving",
              body: "Slots for live sessions that later connect to Zoom / Meet.",
            },
            {
              title: "Analytics that guide you",
              body: "Mock charts today, full progress tracking once backend is wired.",
            },
          ].map((item) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-zinc-800 dark:text-zinc-100">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-500">
            Popular classes
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50">
            Our most popular classes (mocked)
          </h2>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            These mirror the course cards from the /courses page so the home
            screen feels like the reference design.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[ 
            {
              title: "JEE Physics Mastery",
              tag: "JEE Mains",
              price: "₹17,840 (mock)",
            },
            {
              title: "NEET Biology Booster",
              tag: "NEET",
              price: "₹15,320 (mock)",
            },
            {
              title: "UI/UX for Modern EdTech",
              tag: "Upskilling",
              price: "₹13,100 (mock)",
            },
          ].map((course) => (
            <motion.article
              key={course.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="h-20 bg-gradient-to-tr from-emerald-400 via-sky-400 to-violet-400" />
              <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                <div>
                  <p className="text-[11px] font-medium text-emerald-600 dark:text-emerald-300">
                    {course.tag}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {course.title}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                  <span>{course.price}</span>
                  <Link
                    href="/courses"
                    className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold text-zinc-50 shadow-sm transition hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-500">
            Mentors
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50">
            Meet the heroes behind the classes (mock)
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {["Thomas", "Sarika", "Arjun", "Meera"].map((name) => (
            <motion.article
              key={name}
              className="space-y-2 rounded-2xl border border-zinc-200/80 bg-white/80 p-3 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 to-sky-400 text-[11px] font-semibold text-emerald-950">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-50">
                    {name} (mock)
                  </p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                    Subject expert
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                In the real LMS, this would show real mentor bios and stats.
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="rounded-3xl bg-emerald-50/80 p-6 text-center text-sm text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
            Testimonial (mock)
          </p>
          <p className="mt-2 max-w-2xl mx-auto">
            "Courses was fantastic! It&apos;s a master platform for those looking
            to start a new career, or need a refresher. This block replicates
            the testimonial style from your reference design."
          </p>
          <p className="mt-2 text-xs font-medium">Rohan, JEE aspirant (mock)</p>
        </div>
      </section>

      <section className="space-y-5">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-500">
            From the blog (mock)
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50">
            Our recent posts
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[ 
            "5 tips to stay consistent with online learning",
            "Designing engaging live classes",
            "Balancing school, coaching, and self-study",
          ].map((title) => (
            <motion.article
              key={title}
              className="space-y-2 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p className="text-[11px] font-medium text-zinc-900 dark:text-zinc-50">
                {title}
              </p>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                Short description placeholder for how this post helps learners.
              </p>
              <p className="text-[10px] text-zinc-400">Blog · UI only</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
