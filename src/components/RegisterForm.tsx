"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Building2,
  UserCog,
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { ROLES, ROLE_LABELS, type Role } from "@/lib/roles";

export default function RegisterForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("student");
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    login({
      name: name || email.split("@")[0] || "User",
      email,
      role,
    });

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col justify-center bg-[#071A3D] px-12 py-16 text-white">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-4xl font-bold leading-tight">
              Why Choose
              <span className="text-[#D4A017]"> HostelCore?</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-300">
              A complete SaaS-based hostel management solution that simplifies
              admissions, operations, accounting, security, and student
              engagement from one centralized dashboard.
            </p>

            <ul className="mt-10 space-y-5 text-base">
              <li>✓ Complete Hostel Management</li>
              <li>✓ Smart & Secure Access Control</li>
              <li>✓ Real-Time Reports & Analytics</li>
              <li>✓ Online Fee Collection</li>
              <li>✓ Attendance Tracking</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center px-8 py-10">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="mt-2 text-gray-500">
              Start managing your hostel smarter.
            </p>

            <form
              onSubmit={handleRegister}
              className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {/* Account Type */}
            <div className="md:col-span-2">
  <label className="mb-2 block text-sm font-medium text-gray-700">
    Account Type
  </label>

  <div className="relative">
    <div className="absolute left-4 top-4 text-gray-400">
      <UserCog size={18} />
    </div>

    <select
      value={role}
      onChange={(e) => setRole(e.target.value as Role)}
      className="w-full h-12 pl-12 pr-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017] appearance-none bg-white"
      required
    >
      {ROLES.map((r) => (
        <option key={r} value={r}>
          {ROLE_LABELS[r]}
        </option>
      ))}
    </select>
  </div>
</div> 

              <Input
                icon={<User size={18} />}
                placeholder="Full Name"
                value={name}
                onChange={setName}
              />

              <Input
                icon={<Mail size={18} />}
                placeholder="Email Address"
                type="email"
                 value={email}
                 onChange={setEmail}
              />

              <Input
                icon={<Phone size={18} />}
                placeholder="Mobile Number"
                type="tel"
              />

              <Input
                icon={<Building2 size={18} />}
                placeholder="Hostel Name"
              />

              <Input
                icon={<Lock size={18} />}
                placeholder="Password"
                type="password"
              />

              <Input
                icon={<Lock size={18} />}
                placeholder="Confirm Password"
                type="password"
              />

              <div className="mt-2 md:col-span-2">
                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-[#D4A017] text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b98a11]"
                >
                  Create Account
                </button>
              </div>

              <div className="mt-2 text-center text-sm text-gray-500 md:col-span-2">
                Already have an account?
                <Link
                  href="/login"
                  className="ml-2 font-semibold text-[#D4A017] hover:underline"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  icon,
  placeholder,
  type = "text",
   value,
  onChange,
}: {
   icon: ReactNode;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </div>

     
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="w-full h-12 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
      />
    </div>
  );
}