"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Building2,
} from "lucide-react";

export default function RegisterForm() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();



    router.push("/dashboard");
  };

  return (
    <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl w-full">

      {/* Left Section */}
      <div className="bg-[#071A3D] p-10 text-white">
        <h2 className="text-4xl font-bold">
          Why Choose
          <span className="text-[#D4A017]">
            {" "}HostelCore?
          </span>
        </h2>
          
          <ul className="mt-12 space-y-6">
          <li>✓ Complete Hostel Management</li>
          <li>✓ Smart & Secure</li>
          <li>✓ Real-Time Reports</li>
          <li>✓ Fee Collection</li>
          <li>✓ Attendance Tracking</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="p-10">
        <h2 className="text-3xl font-bold">
          Create Account
        </h2>

        <p className="text-gray-500 mt-2">
          Start managing your hostel smarter.
        </p>

        <form
          onSubmit={handleRegister}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
        >
          <Input
            icon={<User size={18} />}
            placeholder="Full Name"
          />

          <Input
            icon={<Mail size={18} />}
            placeholder="Email Address"
          />

          <Input
            icon={<Phone size={18} />}
            placeholder="Mobile Number"
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

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#D4A017] text-white font-semibold hover:bg-[#b98a11] transition"
            >
              Create Account
            </button>
          </div>

          <div className="md:col-span-2 text-center">
            Already have an account?

            <Link
              href="/login"
              className="ml-2 text-[#D4A017] font-medium"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({
  icon,
  placeholder,
  type = "text",
}: {
  icon: ReactNode;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-4 text-gray-400">
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-12 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
      />
    </div>
  );
}