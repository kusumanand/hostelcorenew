import LoginForm from "@/components/LoginForm";
import { Users } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Building2 } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Branding Section */}
      <section className="w-full lg:w-1/2 bg-[#071A3D] text-white flex flex-col justify-center px-6 py-10 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-4xl xl:text-5xl">
            All-in-One
            Smart Hostel {" "}
            <span className="text-[#D4A017]">
               Management Solution
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl">
            Manage Every Bed, Every Student, Every Payment Seamlessly.
          </p>

          {/* Stats Card */}
          <div className="mt-8 md:mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
              <div>
                <div className="w-20 h-20 mx-auto rounded-full bg-grey-500/20 flex items-center justify-center ring-2 ring-black-400 shadow-lg">
              <GraduationCap className="w-12 h-12 text-[#D4A017]" />
              </div>

                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#D4A017]">
                  1500+
                </h3>

                <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 mt-1">
                  Students Managed
                </p>
              </div>

              <div>
                <div className="w-20 h-20 mx-auto rounded-full bg-grey-500/20 flex items-center justify-center ring-2 ring-black-400 shadow-lg">
              <Building2 className="w-12 h-12 text-blue-500" />
              </div>

                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-400">
                  500+
                </h3>

                <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 mt-1">
                  Hostels
                </p>
              </div>

              <div>
               <div className="w-20 h-20 mx-auto rounded-full bg-grey-500/20 flex items-center justify-center ring-2 ring-black-400 shadow-lg">
              <Users className="w-12 h-12 text-green-500" />
              </div>

                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-green-400">
                  99%
                </h3>

                <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 mt-1">
                 Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
          <section className="w-full lg:w-1/2 bg-white flex items-center justify-center px-4 py-8 sm:px-6 md:px-8">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}