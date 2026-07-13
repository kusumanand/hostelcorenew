import LoginForm from "@/components/LoginForm";
import { Users, GraduationCap, Building2 } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="h-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Left Branding Section */}
      <section className="w-full lg:w-1/2 bg-[#071A3D] text-white flex flex-col justify-center px-6 py-5 sm:px-8 md:px-10 lg:px-12">
        <div className="max-w-xl mx-auto lg:mx-0">
          <h1 className="font-bold leading-tight text-2xl sm:text-3xl md:text-4xl xl:text-[42px]">
            All-in-One
            <br />
            Smart Hostel{" "}
            <span className="text-[#D4A017]">
              Management Solution
            </span>
          </h1>

          <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-300 max-w-lg">
            Manage Every Bed, Every Student, Every Payment Seamlessly.
          </p>

          {/* Stats Card */}
          <div className="mt-6 md:mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              {/* Students */}
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-9 h-9 text-[#D4A017]" />
                </div>

                <h3 className="mt-3 text-lg sm:text-xl md:text-3xl font-bold text-[#D4A017]">
                  1500+
                </h3>

                <p className="text-[10px] sm:text-xs text-gray-300 mt-1">
                  Students Managed
                </p>
              </div>

              {/* Hostels */}
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center shadow-lg">
                  <Building2 className="w-9 h-9 text-blue-400" />
                </div>

                <h3 className="mt-3 text-lg sm:text-xl md:text-3xl font-bold text-blue-400">
                  500+
                </h3>

                <p className="text-[10px] sm:text-xs text-gray-300 mt-1">
                  Hostels
                </p>
              </div>

              {/* Satisfaction */}
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center shadow-lg">
                  <Users className="w-9 h-9 text-green-400" />
                </div>

                <h3 className="mt-3 text-lg sm:text-xl md:text-3xl font-bold text-green-400">
                  99%
                </h3>

                <p className="text-[10px] sm:text-xs text-gray-300 mt-1">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Login Section */}
      <section className="w-full lg:w-1/2 bg-white flex items-center justify-center px-4 py-4 sm:px-6 md:px-6">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}