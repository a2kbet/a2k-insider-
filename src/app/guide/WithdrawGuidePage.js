"use client";

import React from "react";

const WithdrawGuidePage = () => {
  return (
    <div className="bg-white text-black font-poppins min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12">
      {/* Heading */}
      <header className="text-center mb-16">
        <h1 className="text-3xl md:text-6xl font-bold text-black">
          How to Withdraw from Ace2King
        </h1>
        <p className="text-black/60 text-base sm:text-lg mt-4 max-w-3xl mx-auto">
          Learn how to{" "}
          <span className="font-semibold text-black">
            withdraw your winnings
          </span>{" "}
          quickly and securely from{" "}
          <span className="font-semibold text-black">Ace2King Casino</span>.
        </p>
      </header>

      {/* Layout */}
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center max-w-7xl w-full gap-12">
        {/* Left Image */}
        <div className="flex flex-col items-center relative w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
          <img
            src="/images/DGSS1.jpg"
            alt="Withdraw Screenshot 1"
            className="rounded-xl w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] object-contain border border-black/10"
          />
          {/* Left Connector Arrow (desktop only) */}
          <div className="hidden lg:flex absolute -right-5 top-1/3 items-center">
            <div className="w-12 h-[2px] bg-black"></div>
            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-black"></div>
          </div>
        </div>

        {/* Steps in Center */}
        <section className="flex-1 p-8 sm:p-10 rounded-xl border border-black/10 bg-white">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 text-black">
            Withdraw Guide
          </h2>
          <ol className="space-y-6 text-black/70 text-base sm:text-lg leading-relaxed relative">
            {/* Linked to LEFT */}
            <li className="relative">
              Log in to your{" "}
              <span className="font-semibold text-black">Ace2King</span>{" "}
              account.
              <span className="absolute -left-6 lg:-left-8 top-2 w-2.5 h-2.5 rounded-full bg-black"></span>
            </li>
            <li className="relative">
              Go to the{" "}
              <span className="font-semibold text-black">Withdraw</span>{" "}
              section.
              <span className="absolute -left-6 lg:-left-8 top-2 w-2.5 h-2.5 rounded-full bg-black"></span>
            </li>

            {/* Linked to RIGHT */}
            <li className="relative">
              Select a withdrawal method (UPI, Bank Transfer, or USDT).
              <span className="absolute -right-6 lg:-right-8 top-2 w-2.5 h-2.5 rounded-full bg-black"></span>
            </li>
            <li className="relative">
              Enter the amount you want to withdraw.
              <span className="absolute -right-6 lg:-right-8 top-2 w-2.5 h-2.5 rounded-full bg-black"></span>
            </li>
            <li className="relative">
              Provide accurate payment details (Bank, UPI ID, Wallet Address).
              <span className="absolute -right-6 lg:-right-8 top-2 w-2.5 h-2.5 rounded-full bg-black"></span>
            </li>
            <li className="relative">
              Click <span className="font-semibold text-black">Confirm</span> to
              submit.
              <span className="absolute -right-6 lg:-right-8 top-2 w-2.5 h-2.5 rounded-full bg-black"></span>
            </li>
            <li className="relative">
              Funds will be credited once approved.
              <span className="absolute -right-6 lg:-right-8 top-2 w-2.5 h-2.5 rounded-full bg-black"></span>
            </li>
          </ol>
        </section>

        {/* Right Image */}
        <div className="flex flex-col items-center relative w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
          <img
            src="/images/WGSS.jpg"
            alt="Withdraw Screenshot 2"
            className="rounded-xl w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] object-contain border border-black/10"
          />
          {/* Right Connector Arrow (desktop only) */}
          <div className="hidden lg:flex absolute -left-5 top-1/2 items-center">
            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-black"></div>
            <div className="w-12 h-[2px] bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawGuidePage;
