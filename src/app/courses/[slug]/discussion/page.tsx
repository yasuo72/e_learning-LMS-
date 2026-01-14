import { use } from "react";
import Link from "next/link";

function prettifySlug(input: string) {
  if (!input) return "Course";
  if (input === "jee-physics") return "JEE Physics Mastery";
  if (input === "neet-biology") return "NEET Biology Booster";
  return input
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

const MOCK_THREADS = [
  {
    id: 1,
    title: "Confused about resolving vectors at an angle",
    author: "Aarav",
    lesson: "Vectors & 2D motion",
    status: "Answered",
    snippet:
      "I am not sure when to take cos and when to take sin for components...",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "How many questions should I practice daily?",
    author: "Priya",
    lesson: "Mixed PYQs",
    status: "Open",
    snippet:
      "What is a good number of JEE-level questions per topic per day?",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "Doubt in projectile motion formula",
    author: "Rahul",
    lesson: "Projectile motion",
    status: "Instructor replied",
    snippet:
      "Is the range formula valid for all angles or only 45°?",
    time: "2 days ago",
  },
];

export default function CourseDiscussionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const courseTitle = prettifySlug(slug);

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <nav className="text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>{" "}
          / <Link href={`/courses/${slug}`} className="hover:underline">
            {courseTitle}
          </Link>{" "}
          / <span className="text-zinc-700 dark:text-zinc-300">Discussion</span>
        </nav>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Discussion & doubts
            </h1>
            <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
              A mock discussion space where students can ask doubts, reply to
              each other, and see instructor answers. Backend wiring will come
              later.
            </p>
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
            UI only &mdash; threads and replies are static.
          </p>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="mb-2 flex items-center justify-between gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>
              Showing a few example threads. In the real app, you&apos;d be able to
              filter by lesson, status, or search text.
            </span>
            <span className="hidden rounded-full bg-zinc-100/80 px-2 py-0.5 sm:inline-flex dark:bg-zinc-900/80">
              {MOCK_THREADS.length} sample doubts
            </span>
          </div>
          <div className="space-y-3">
            {MOCK_THREADS.map((thread) => (
              <article
                key={thread.id}
                className="flex items-start justify-between gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-3 text-xs dark:border-zinc-800/80 dark:bg-zinc-900/70"
              >
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-[11px] font-semibold text-white shadow-sm shadow-violet-500/40">
                    {thread.author.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-50">
                        {thread.title}
                      </p>
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {thread.lesson}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                      {thread.snippet}
                    </p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-500">
                      Asked by <span className="font-medium">{thread.author}</span>{" "}
                      &bull; {thread.time}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 text-[10px] text-zinc-500 dark:text-zinc-400">
                  <span
                    className={`rounded-full px-2 py-0.5 ${
                      thread.status === "Answered"
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                        : thread.status === "Open"
                        ? "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300"
                        : "bg-violet-50 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300"
                    }`}
                  >
                    {thread.status}
                  </span>
                  <button className="rounded-full border border-zinc-200 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-zinc-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50/80 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-violet-500 dark:hover:bg-violet-950/60">
                    View thread (mock)
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-2 border-t border-dashed border-zinc-200 pt-2 text-[11px] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            In the real LMS, you&apos;d be able to create new doubts, reply, upvote,
            and mark questions as &quot;instructor answered&quot; here.
          </div>
        </div>

        <aside className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Ratings & feedback (mock)
            </h2>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
              UI only
            </span>
          </div>
          <div className="flex items-baseline gap-2 text-zinc-900 dark:text-zinc-50">
            <span className="text-2xl font-semibold">4.8</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              / 5 · Based on 248 reviews
            </span>
          </div>
          <div className="space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400">
            <p>
              Later, this will be driven by real student ratings and comments
              from the backend.
            </p>
            <ul className="space-y-1">
              <li>• "Very clear explanations and visualisations."</li>
              <li>• "Doubts get resolved quickly in live sessions."</li>
              <li>• "More PYQs could be added at the end of each module."</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-zinc-300/80 p-3 text-[11px] text-zinc-500 dark:border-zinc-700/80 dark:text-zinc-400">
            Once wired, students will be able to leave ratings and written
            feedback here, and we&apos;ll surface average ratings back on the course
            card and detail page.
          </div>
        </aside>
      </section>
    </div>
  );
}
