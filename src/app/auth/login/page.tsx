"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const MODES = ["email", "mobile"] as const;

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<(typeof MODES)[number]>("email");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (!identifier.trim()) return;
    setStep(2);
  };

  const handleVerifyOtp = () => {
    if (otp.trim().length < 4) return;
    setStep(3);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-6">
      <div className="relative w-full max-w-md">
        <div className="pointer-events-none absolute -inset-x-16 -top-24 -z-10 flex justify-center">
          <div className="h-64 w-[28rem] rounded-full bg-gradient-to-tr from-violet-500/40 via-fuchsia-500/30 to-sky-400/40 blur-3xl dark:from-violet-700/40 dark:via-fuchsia-600/40 dark:to-sky-500/40" />
        </div>

        <motion.div
          className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/80 p-5 shadow-xl shadow-violet-500/20 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center justify-between gap-2">
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Welcome back
              </h1>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Log in with email or mobile using a one-time password.
              </p>
            </div>
            <div className="hidden text-[10px] text-zinc-400 sm:block dark:text-zinc-500">
              UI only &mdash; backend wiring comes later.
            </div>
          </div>

          {/* mode selector */}
          <div className="mb-4 inline-flex rounded-full bg-zinc-100/80 p-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-300">
            {MODES.map((m) => {
              const active = mode === m;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => {
                    setMode(m);
                    setStep(1);
                    setIdentifier("");
                    setOtp("");
                  }}
                  className={`relative flex-1 rounded-full px-3 py-1 transition ${
                    active
                      ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                      : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200"
                  }`}
                >
                  {m === "email" ? "Email" : "Mobile"}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
                    {mode === "email" ? "Email address" : "Mobile number"}
                  </label>
                  <input
                    type={mode === "email" ? "email" : "tel"}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={
                      mode === "email"
                        ? "student@example.com"
                        : "Enter 10-digit mobile number"
                    }
                    className="w-full rounded-2xl border border-zinc-200 bg-white/80 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-violet-500/40 placeholder:text-zinc-400 focus:border-violet-400 focus:ring dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/40 transition hover:shadow-lg hover:shadow-violet-500/60"
                >
                  Send OTP
                </button>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-500">
                  By continuing, you agree to receive one-time verification codes
                  for login. No spam.
                </p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Enter the 4-digit code sent to
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {" "}
                      {identifier || (mode === "email" ? "your email" : "your mobile")}
                    </span>
                    .
                  </p>
                  <div className="flex justify-between gap-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        className="h-10 w-full max-w-[3rem] rounded-2xl border border-zinc-200 bg-white/80 text-center text-lg font-semibold tracking-[0.15em] text-zinc-900 shadow-sm outline-none ring-violet-500/40 focus:border-violet-400 focus:ring dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-50"
                        value={otp[index] || ""}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, "");
                          const next = otp.split("");
                          next[index] = value;
                          setOtp(next.join("").slice(0, 4));
                        }}
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-zinc-50 shadow-sm transition hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50"
                >
                  Verify &amp; continue
                </button>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-500">
                  <button
                    type="button"
                    className="underline-offset-2 hover:underline"
                    onClick={() => setStep(1)}
                  >
                    Edit {mode === "email" ? "email" : "mobile"}
                  </button>
                  <button
                    type="button"
                    className="cursor-not-allowed text-zinc-400"
                  >
                    Resend OTP in 30s
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-4 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 to-sky-400 text-xl text-emerald-950 shadow-md shadow-emerald-300/70">
                  ✓
                </div>
                <div className="space-y-1">
                  <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    You&apos;re in!
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    This is a visual prototype. In the real app, you would now be
                    redirected to your personalised dashboard.
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-xs sm:flex-row">
                  <button
                    className="flex-1 rounded-2xl bg-zinc-900 px-3 py-2 font-semibold text-zinc-50 shadow-sm transition hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50"
                    type="button"
                    onClick={() => router.push("/dashboard/student")}
                  >
                    Go to student dashboard
                  </button>
                  <button
                    className="flex-1 rounded-2xl border border-zinc-200 bg-white/80 px-3 py-2 font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
                    type="button"
                    onClick={() => router.push("/courses")}
                  >
                    Browse courses
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
