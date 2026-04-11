"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import CompleteNavBar from "../components/CompleteNavBar";

type LoginMethod = "username" | "email";

interface FormData {
    username: string;
    email: string;
    password: string;
}

export default function LoginPage() {
    const [loginMethod, setLoginMethod] = useState<LoginMethod>("username");
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setError("");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const payload =
            loginMethod === "email"
                ? { email: formData.email, password: formData.password }
                : { username: formData.username, password: formData.password };

        try {
            // TODO: Replace with your actual API call
            // const res = await fetch("/api/auth/login", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(payload),
            // });
            // if (!res.ok) throw new Error("Invalid credentials");
            // const data = await res.json();
            // handle success (e.g. store token, redirect)

            console.log("Login payload:", payload);
            await new Promise((r) => setTimeout(r, 800)); // remove when wiring backend
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-[#0b0c0e]">
            {/* Subtle grid texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Accent glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

            {/* Nav */}
            <div className="relative z-10 w-full">
                <CompleteNavBar />
            </div>

            {/* Page body */}
            <div className="relative z-10 flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-16">
                <div className="w-full max-w-md">

                    {/* Card */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 shadow-2xl backdrop-blur-sm">

                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold tracking-tight text-white">
                                Welcome back
                            </h1>
                            <p className="mt-1 text-sm text-zinc-500">
                                Sign in to continue to your account
                            </p>
                        </div>

                        {/* Toggle: username / email */}
                        <div className="mb-6 flex rounded-lg bg-white/[0.05] p-1">
                            {(["username", "email"] as LoginMethod[]).map((method) => (
                                <button
                                    key={method}
                                    type="button"
                                    onClick={() => {
                                        setLoginMethod(method);
                                        setError("");
                                    }}
                                    className={`flex-1 rounded-md py-1.5 text-sm font-medium capitalize transition-all duration-200 ${
                                        loginMethod === method
                                            ? "bg-indigo-600 text-white shadow"
                                            : "text-zinc-400 hover:text-zinc-200"
                                    }`}
                                >
                                    {method}
                                </button>
                            ))}
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} noValidate className="space-y-4">
                            {/* Identifier field */}
                            {loginMethod === "username" ? (
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-400"
                                    >
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="your_username"
                                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20"
                                    />
                                </div>
                            ) : (
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-400"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20"
                                    />
                                </div>
                            )}

                            {/* Password field */}
                            <div>
                                <div className="mb-1.5 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
                                    >
                                        Password
                                    </label>
                                    <a
                                        href="/forgot-password"
                                        className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 pr-11 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((v) => !v)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Error message */}
                            {error && (
                                <p className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2.5 text-sm text-red-400">
                                    {error}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="mt-2 w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#0b0c0e] disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Signing in…
                  </span>
                                ) : (
                                    "Sign in"
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="my-6 flex items-center gap-3">
                            <div className="h-px flex-1 bg-white/[0.06]" />
                            <span className="text-xs text-zinc-600">IT - By humans. For humans</span>
                            <div className="h-px flex-1 bg-white/[0.06]" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}