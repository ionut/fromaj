"use client";
import React from "react";
import {
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";

const MaintenanceWrapper: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated wrench icon */}
        <div className="relative mb-8 overflow-hidden">
          <div className="absolute inset-0 animate-ping">
            <WrenchScrewdriverIcon className="w-24 h-24 text-green mx-auto opacity-20" />
          </div>
          <WrenchScrewdriverIcon className="w-24 h-24 text-green mx-auto animate-pulse" />
        </div>

        {/* Main content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="space-y-6">
            <div className=" rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CodeBracketIcon className="w-6 h-6 text-green" />
                <h1 className="text-3xl font-bold text-green">
                  Site în dezvoltare
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-green">
                  Lucrăm intens la o versiune nouă și îmbunătățită a site-ului
                  nostru.
                </p>

                <p className="text-lg text-green">
                  Vă mulțumim pentru răbdare! Revenim foarte curând cu o
                  experiență complet renovată și funcționalități noi.
                </p>

                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="w-2 h-2 bg-green rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-green rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-green rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Contact info (optional) */}
            <div className="border-t border-green pt-6">
              <p className="text-green ">
                Pentru comenzi ne puteți contacta la:{" "}
                <a
                  href="tel:+40754404000"
                  className="underline text-green font-semibold"
                >
                  +40 754 404 000
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceWrapper;
