"use client";

import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Free trial",
    price: "₹0",
    badge: "Best for getting a feel",
    features: [
      "Limited access to selected lessons",
      "No credit card required",
      "Basic quizzes and practice",
    ],
  },
  {
    name: "Standard",
    price: "₹1,499 / month",
    badge: "Mock pricing only",
    features: [
      "Full course access for one stream (e.g. JEE or NEET)",
      "Live classes & doubt solving",
      "Practice sets and analytics",
    ],
  },
  {
    name: "Pro",
    price: "₹2,499 / month",
    badge: "Visual placeholder",
    features: [
      "All exam categories in one subscription",
      "Priority doubt support",
      "Advanced analytics and reports",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          Pricing (UI mock)
        </h1>
        <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          These plans are just placeholders to help you visualise how a pricing
          page will look. No real payments or subscriptions are connected yet.
        </p>
      </header>

      <motion.section
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {PLANS.map((plan, index) => (
          <motion.article
            key={plan.name}
            className={`flex h-full flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80 ${
              index === 1
                ? "shadow-violet-500/20 ring-1 ring-violet-400/60 dark:ring-violet-500/60"
                : ""
            }`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
          >
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {plan.name}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {plan.price}
                  </p>
                </div>
                <span className="rounded-full bg-zinc-100/80 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-300">
                  {plan.badge}
                </span>
              </div>
              <ul className="mt-1 space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-3 space-y-1 text-[11px] text-zinc-500 dark:text-zinc-500">
              <button className="flex w-full items-center justify-center rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-50 shadow-sm transition hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50">
                Select (mock)
              </button>
              <p>
                This button doesn&apos;t do anything yet. Later, it would open a
                real checkout flow.
              </p>
            </div>
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
}
