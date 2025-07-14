"use client";
import React from "react";
import { CalendarIcon, SunIcon } from "@heroicons/react/24/outline";

const VacationWrapper: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated sun icon */}
        <div className="relative mb-8 overflow-hidden">
          <div className="absolute inset-0 animate-ping">
            <SunIcon className="w-24 h-24 text-[#FFDF22] mx-auto opacity-20" />
          </div>
          <SunIcon className="w-24 h-24 text-[#FFDF22] mx-auto animate-pulse" />
        </div>

        {/* Main content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl font-bold text-green/80">
              Fromaj este în concediu!
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-eerie-black-1/80 leading-relaxed">
              Echipa Fromaj se bucură de o binemeritată vacanță și se pregătește
              să revină cu energie nouă și brânzeturi delicioase.
            </p>

            <div className="text-eerie-black-1/80 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <CalendarIcon className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Ne întoarcem curând</h2>
              </div>
              <p className="text-indigo-100">
                Revenim din vacanță cu un site complet renovat și multe surprize
                pentru iubitorii de brânzeturi artizanale!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacationWrapper;
