"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Mail, Lock, UserCog} from "lucide-react";

import { useAuth } from "@/lib/auth-context";
import { ROLES, ROLE_LABELS, type Role } from "@/lib/roles";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("super_admin");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = email.split("@")[0] || "User";

    login({
      name: username.charAt(0).toUpperCase() + username.slice(1),
      email,
      role,
    });

    console.log("Logged in as:", role);

    router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900">
        Welcome Back 👋
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Login to continue
      </p>

      <form onSubmit={handleLogin} className="mt-6 space-y-4">
        {/* User Type */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            User Type
          </label>

          <div className="relative mt-2">
            <UserCog
              size={18}
               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="mt-2 h-11 w-full rounded-xl border border-gray-300 bg-white pl-10 pr-3 text-sm focus:border-[#D4A017] focus:outline-none focus:ring-2 focus:ring-[#D4A017]"          >
            {ROLES.map((item) => (
              <option key={item} value={item}>
                {ROLE_LABELS[item]}
              </option>
            ))}
          </select>
        </div>
        </div>
        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Email
          </label>

          <div className="relative mt-2">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="h-11 w-full rounded-xl border border-gray-300 pl-10 pr-3 text-sm focus:border-[#D4A017] focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative mt-2">
            <Lock
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="h-11 w-full rounded-xl border border-gray-300 pl-10 pr-3 text-sm focus:border-[#D4A017] focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
            />
          </div>

          <div className="mt-2 text-right">
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-[#D4A017] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="h-11 w-full rounded-xl bg-[#D4A017] text-sm font-semibold text-white transition hover:bg-[#b98a11]"
        >
          Login
        </button>

        {/* Register */}
        <p className="text-center text-sm text-gray-500">
          Don't have an account?
          <Link
            href="/register"
            className="ml-1 font-medium text-[#D4A017] hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}