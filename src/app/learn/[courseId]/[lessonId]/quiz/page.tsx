"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Question = {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "A vector of magnitude 10 makes an angle of 60° with the +x axis. What is its x-component?",
    options: [
      "5",
      "10 cos 30°",
      "10 cos 60°",
      "10 sin 60°",
    ],
    correctIndex: 2,
  },
  {
    id: 2,
    text: "When adding two vectors graphically, which construction is correct?",
    options: [
      "Place them tail-to-tail and draw a line between heads",
      "Place them head-to-head and draw a line between tails",
      "Place them tail-to-head and draw the resultant from first tail to last head",
      "Place them randomly and measure the angle",
    ],
    correctIndex: 2,
  },
  {
    id: 3,
    text: "Resultant of two perpendicular vectors of equal magnitude V is:",
    options: [
      "V",
      "2V",
      "V / \u221a2",
      "V\u221a2",
    ],
    correctIndex: 3,
  },
  {
    id: 4,
    text: "Unit vector along a given vector is obtained by:",
    options: [
      "Multiplying the vector by its magnitude",
      "Dividing the vector by its magnitude",
      "Adding 1 to each component",
      "Subtracting magnitude from each component",
    ],
    correctIndex: 1,
  },
];

function prettifySlug(input: string) {
  if (!input) return "";
  return input
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function LessonQuizPage({
  params,
}: {
  params: { courseId: string; lessonId: string };
}) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUESTIONS.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);

  const courseTitle =
    params.courseId === "jee-physics"
      ? "JEE Physics Mastery"
      : prettifySlug(params.courseId);

  const lessonTitle =
    params.lessonId === "vectors-2d-motion"
      ? "Vectors & 2D Motion"
      : prettifySlug(params.lessonId);

  const allAnswered = answers.every((a) => a !== null);

  const score = submitted
    ? answers.reduce((acc, answer, index) => {
        if (answer === QUESTIONS[index].correctIndex) return acc + 1;
        return acc;
      }, 0)
    : 0;

  const handleSelect = (qIndex: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = optionIndex;
      return next;
    });
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <nav className="text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>{" "}
          / <span className="hover:underline">{courseTitle}</span> /{" "}
          <span className="hover:underline">{lessonTitle}</span> /{" "}
          <span className="text-zinc-700 dark:text-zinc-300">Quick quiz</span>
        </nav>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50">
              Quick quiz: {lessonTitle}
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              4 conceptual questions to check your understanding before moving
              ahead. UI only &mdash; results are not stored yet.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>{QUESTIONS.length} questions</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Target time: 6 min</span>
          </div>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:items-start">
        <motion.div
          className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="mb-2 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>Single-correct MCQs &mdash; tap an option to select</span>
            {submitted ? (
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                Submitted
              </span>
            ) : (
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-600 dark:bg-zinc-900/70 dark:text-zinc-300">
                Not submitted
              </span>
            )}
          </div>

          <div className="space-y-3">
            {QUESTIONS.map((q, qIndex) => {
              const selected = answers[qIndex];
              const isCorrect =
                submitted && selected === q.correctIndex;
              const isWrong =
                submitted && selected !== null && selected !== q.correctIndex;

              return (
                <motion.article
                  key={q.id}
                  className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-3 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/70"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut", delay: qIndex * 0.03 }}
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-[11px] font-medium text-zinc-800 dark:text-zinc-100">
                      Q{qIndex + 1}. {q.text}
                    </p>
                    {submitted && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${isCorrect ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300" : isWrong ? "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300" : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-300"}`}
                      >
                        {isCorrect
                          ? "Correct"
                          : isWrong
                          ? "Incorrect"
                          : "Not attempted"}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    {q.options.map((option, optionIndex) => {
                      const isSelected = selected === optionIndex;
                      const isRightOption = q.correctIndex === optionIndex;

                      let stateClasses = "";
                      if (submitted) {
                        if (isRightOption) {
                          stateClasses =
                            "border-emerald-300/80 bg-emerald-50/80 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/50 dark:text-emerald-200";
                        } else if (isSelected && !isRightOption) {
                          stateClasses =
                            "border-rose-300/80 bg-rose-50/80 text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200";
                        }
                      } else if (isSelected) {
                        stateClasses =
                          "border-violet-400/80 bg-violet-50/80 text-violet-800 dark:border-violet-500/80 dark:bg-violet-950/50 dark:text-violet-200";
                      }

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleSelect(qIndex, optionIndex)}
                          className={`flex w-full items-start gap-2 rounded-xl border border-zinc-200/80 bg-white/80 px-2.5 py-2 text-left text-[11px] text-zinc-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50/60 dark:border-zinc-700/80 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-violet-500 dark:hover:bg-violet-950/60 ${stateClasses}`}
                        >
                          <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border border-zinc-300 bg-white text-[10px] text-zinc-500 dark:border-zinc-600 dark:bg-zinc-900">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-2 flex flex-col gap-2 border-t border-dashed border-zinc-200 pt-3 text-[11px] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Select an option for each question, then submit to reveal the
              answer key.
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={!allAnswered || submitted}
                onClick={handleSubmit}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition ${
                  !allAnswered || submitted
                    ? "cursor-not-allowed bg-zinc-300 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                    : "bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50"
                }`}
              >
                Submit quiz
              </button>
              <Link
                href={`/learn/${params.courseId}/${params.lessonId}`}
                className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
              >
                Back to lesson
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Your performance
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Mock score
            </span>
          </div>
          <div className="flex items-baseline gap-2 text-zinc-900 dark:text-zinc-50">
            <span className="text-2xl font-semibold">
              {submitted ? score : "\u2013"}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              / {QUESTIONS.length}
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
            In the full LMS, this score would update your analytics, unlock
            mastery badges, and adapt your practice set.
          </p>
          <div className="rounded-xl border border-dashed border-zinc-300/80 p-2.5 text-[11px] text-zinc-500 dark:border-zinc-700/80 dark:text-zinc-400">
            After wiring the backend, we&apos;ll pull real quizzes, record
            attempts, and show detailed solution steps here.
          </div>
        </motion.aside>
      </section>
    </div>
  );
}
