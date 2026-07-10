"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Later add authentication here

    router.push("/dashboard");
  };

  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold">
        Welcome Back 👋
      </h2>

      <p className="text-gray-500 mt-2">
        Login to continue
      </p>

      <form onSubmit={handleLogin} className="space-y-5 mt-8">
        {/* Email */}
        <div>
          <label className="text-sm font-medium">
            Email
          </label>

          <div className="relative mt-2">
            <Mail
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="email"
              placeholder="Enter email"
              className="w-full h-12 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium">
            Password
          </label>

          <div className="relative mt-2">
            <Lock
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="password"
              placeholder="Enter password"
              className="w-full h-12 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="mt-2 text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-[#D4A017] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full h-12 rounded-xl bg-[#D4A017] text-white font-semibold hover:opacity-90 transition"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-500">
          Don't have an account?
          <Link
            href="/register"
            className="ml-2 text-[#D4A017] hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}