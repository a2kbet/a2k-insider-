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
    <div className="bg-white text-black w-full min-h-screen px-5 py-12 flex flex-col items-center">
      {/* Heading */}
      <section className="text-center mb-12">
        <h2 className="text-5xl sm:text-6xl font-bold mb-3">Top Casino Tips</h2>
        <p className="text-black/70 md:text-3xl text-xl">
          Simple and practical advice for safer and smarter play
        </p>
      </section>

      {/* Image + Tips Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 max-w-7xl w-full items-start">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/images/CASINOTIPS.jpg"
            alt="Casino Tips"
            className="w-full h-[600px] rounded-xl object-cover border border-black/10"
          />
        </div>

        {/* Right Tips as cards */}
        <div className="grid grid-cols-1 gap-6">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="bg-white border border-black/10 rounded-xl p-6 transition"
            >
              <div className="flex items-start gap-4">
                <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-black" />
                <p className="text-black/80 text-xl leading-relaxed">{tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasinoTips;
