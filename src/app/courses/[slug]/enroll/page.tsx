"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function getReadableTitle(slug: string) {
  if (!slug) return "Course";
  if (slug === "jee-physics") return "JEE Physics Mastery";
  if (slug === "neet-biology") return "NEET Biology Booster";
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function CourseEnrollPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const courseTitle = getReadableTitle(slug);

  const isPaid = slug !== "cbse-10-maths" && slug !== "coding-foundations";

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <nav className="text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>{" "}
          / <Link href={`/courses/${slug}`} className="hover:underline">
            {courseTitle}
          </Link>{" "}
          / <span className="text-zinc-700 dark:text-zinc-300">Enroll</span>
        </nav>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              {isPaid ? "Review & confirm enrollment" : "Start learning"}
            </h1>
            <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
              This is a mock checkout screen to visualise how paid and free
              enrollments will feel before we wire real payments and auth.
            </p>
          </div>
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100/80 px-2.5 py-1 dark:bg-zinc-900/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500" />
              UI only &mdash; no real charges or enrollments.
            </span>
          </div>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:items-start">
        <motion.div
          className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="space-y-1">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {courseTitle}
            </h2>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
              Lifetime access to all lessons, quizzes, and live doubt sessions.
              Progress syncs across devices.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-2 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/70">
              <p className="text-[11px] font-medium text-zinc-700 dark:text-zinc-200">
                What you get
              </p>
              <ul className="space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400">
                <li>Structured modules with concept videos and notes.</li>
                <li>Topic-wise quizzes with detailed solutions.</li>
                <li>Weekly live doubt-solving sessions.</li>
                <li>Completion certificate and performance analytics.</li>
              </ul>
            </div>
            <div className="space-y-2 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/70">
              <p className="text-[11px] font-medium text-zinc-700 dark:text-zinc-200">
                For the real app
              </p>
              <ul className="space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400">
                <li>Secure payments via Razorpay/Stripe (not wired here).</li>
                <li>GST invoices and order history.</li>
                <li>Coupons, scholarships, and referral credits.</li>
                <li>Auto-assigning role: student with course access.</li>
              </ul>
            </div>
          </div>

          {isPaid ? (
            <div className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-950/80">
              <p className="text-[11px] font-medium text-zinc-700 dark:text-zinc-200">
                Choose how you&apos;d like to pay
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex flex-col items-start gap-1 rounded-2xl border border-violet-300/80 bg-violet-50/80 p-2.5 text-left text-[11px] text-violet-900 shadow-sm shadow-violet-500/20 dark:border-violet-600/80 dark:bg-violet-950/50 dark:text-violet-100"
                >
                  <span className="font-semibold">UPI / Netbanking</span>
                  <span className="text-[10px] opacity-90">
                    UPI, cards, and netbanking via a payment gateway.
                  </span>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-start gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-2.5 text-left text-[11px] text-zinc-700 shadow-sm dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:text-zinc-200"
                >
                  <span className="font-semibold">No-cost EMI</span>
                  <span className="text-[10px] opacity-90">
                    Visual placeholder for EMI or pay-in-3 options.
                  </span>
                </button>
              </div>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-500">
                In production, this section would open a gateway popup and
                handle success/failure callbacks.
              </p>
            </div>
          ) : (
            <div className="space-y-1 rounded-2xl border border-emerald-300/80 bg-emerald-50/80 p-3 text-[11px] text-emerald-800 shadow-sm dark:border-emerald-700/80 dark:bg-emerald-950/50 dark:text-emerald-200">
              <p className="font-semibold">Free course</p>
              <p>
                This course is marked as free. In the real LMS, clicking
                &quot;Confirm enrollment&quot; would instantly grant access without
                payment.
              </p>
            </div>
          )}
        </motion.div>

        <motion.aside
          className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Order summary
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Mock only
            </span>
          </div>
          <div className="space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center justify-between">
              <span>{courseTitle}</span>
              <span>{isPaid ? "₹14,999" : "₹0"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Platform fee</span>
              <span>{isPaid ? "₹199" : "₹0"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>GST (mock)</span>
              <span>{isPaid ? "₹2,700" : "₹0"}</span>
            </div>
            <div className="mt-1 flex items-center justify-between border-t border-dashed border-zinc-200 pt-2 text-[11px] font-semibold text-zinc-900 dark:border-zinc-800 dark:text-zinc-50">
              <span>Total</span>
              <span>{isPaid ? "₹17,898" : "₹0"}</span>
            </div>
          </div>
          <button
            type="button"
            className="mt-2 flex w-full items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-50 shadow-sm transition hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50"
          >
            {isPaid ? "Confirm enrollment (mock)" : "Start course (mock)"}
          </button>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-500">
            This button doesn&apos;t do anything yet. Later, it will call the
            backend to create an order, verify payment, and update access.
          </p>
          <Link
            href={`/courses/${slug}`}
            className="inline-flex items-center gap-1 pt-2 text-[11px] font-medium text-zinc-600 underline-offset-2 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            ← Back to course details
          </Link>
        </motion.aside>
      </section>
    </div>
  );
}
