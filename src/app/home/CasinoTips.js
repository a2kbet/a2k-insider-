"use client";

import React from "react";

const tips = [
  "Set a budget before you play and never chase losses.",
  "Learn poker hand rankings for quicker, confident decisions.",
  "Use table position in poker to guide your strategy.",
  "Track wins and losses to spot patterns and improve.",
  "Check slot paytables and bonuses before playing.",
  "Take breaks to stay sharp and avoid fatigue.",
];

const CasinoTips = () => {
  return (
    <div className="bg-[#1a1b1b] text-white w-full min-h-screen px-5 py-10 flex flex-col items-center">
      {/* Heading */}
      <section className="text-center mb-10">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] mb-3">
          Top Casino Tips
        </h2>
        <p className="text-gray-300 md:text-3xl text-xl">
          Simple and practical advice for safer and smarter play
        </p>
      </section>

      {/* Image + Tips Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 max-w-7xl w-full items-start">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/images/CASINOTIPS.jpg" // directly use path from public folder
            alt="Casino Tips"
            className="w-full h-[600px] rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Tips as cards */}
        <div className="grid grid-cols-1 gap-6">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] border border-yellow-500/40 rounded-xl p-5 shadow-lg hover:shadow-yellow-900/30 hover:border-yellow-400/60 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                <p className="text-gray-200 text-xl leading-relaxed">{tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasinoTips;
