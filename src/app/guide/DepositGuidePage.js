"use client";

import React from "react";

const DepositGuidePage = () => {
  return (
    <div className="bg-[#1a1b1b] text-white font-poppins min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12">
      {/* Heading */}
      <header className="text-center mb-16">
        <h1 className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
          How to Deposit on Ace2King
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-3xl mx-auto">
          Follow this step-by-step guide to{" "}
          <span className="text-yellow-300 font-semibold">deposit funds</span>{" "}
          using UPI, Cards, Bank Transfer, or USDT on{" "}
          <span className="text-yellow-300 font-semibold">Ace2King Casino</span>.
        </p>
      </header>

      {/* Layout */}
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center max-w-7xl w-full gap-12">
        {/* Left Image */}
        <div className="flex flex-col items-center relative w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
          <img
            src="/images/DGSS1.jpg"
            alt="Deposit Screenshot 1"
            className="rounded-xl shadow-lg w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] object-contain"
          />
          {/* Left Connector Arrow (only visible on lg+) */}
          <div className="hidden lg:flex absolute -right-3 top-25 items-center">
            <div className="w-12 h-[4px] bg-yellow-500"></div>
            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-yellow-500"></div>
          </div>
        </div>

        {/* Steps in Center */}
        <section className="flex-1 p-8 sm:p-10 rounded-xl border border-yellow-500 bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] shadow-lg">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520]">
            Deposit Guide
          </h2>
          <ol className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed relative">
            {/* Linked to LEFT */}
            <li className="relative">
              Log in to your{" "}
              <span className="text-yellow-300">Ace2King</span> account.
              <span className="absolute -left-6 lg:-left-8 top-2 w-3 h-3 rounded-full bg-yellow-500"></span>
            </li>
            <li className="relative">
              Go to the{" "}
              <span className="text-yellow-300">Deposit</span> section.
              <span className="absolute -left-6 lg:-left-8 top-2 w-3 h-3 rounded-full bg-yellow-500"></span>
            </li>

            {/* Linked to RIGHT */}
            <li className="relative">
              Select a payment method (UPI, Cards, USDT, Bank Transfer).
              <span className="absolute -right-6 lg:-right-8 top-2 w-3 h-3 rounded-full bg-yellow-500"></span>
            </li>
            <li className="relative">
              Enter your deposit amount.
              <span className="absolute -right-6 lg:-right-8 top-2 w-3 h-3 rounded-full bg-yellow-500"></span>
            </li>
            <li className="relative">
              Follow on-screen instructions to complete the payment.
              <span className="absolute -right-6 lg:-right-8 top-2 w-3 h-3 rounded-full bg-yellow-500"></span>
            </li>
            <li className="relative">
              Confirm the transaction securely.
              <span className="absolute -right-6 lg:-right-8 top-2 w-3 h-3 rounded-full bg-yellow-500"></span>
            </li>
            <li className="relative">
              Your wallet balance will be updated instantly.
              <span className="absolute -right-6 lg:-right-8 top-2 w-3 h-3 rounded-full bg-yellow-500"></span>
            </li>
          </ol>
        </section>

        {/* Right Image */}
        <div className="flex flex-col items-center relative w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
          <img
            src="/images/DGSS2.jpg"
            alt="Deposit Screenshot 2"
            className="rounded-xl shadow-lg w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] object-contain"
          />
          {/* Right Connector Arrow (only visible on lg+) */}
          <div className="hidden lg:flex absolute -left-5 mt-4 top-1/2 items-center">
            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-yellow-500"></div>
            <div className="w-12 h-[4px] bg-yellow-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositGuidePage;
