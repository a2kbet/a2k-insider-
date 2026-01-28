"use client"; // required for client-side state/interaction

import React from "react";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/HOMEIMAGE.jpg"
        alt="Home Background"
        fill
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative ml-5 z-10 text-center text-white max-w-3xl px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Step Into the World of Winners with{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f7e183, #e4c169, #caa74d)",
            }}
          >
            Ace2King
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl tracking-wide">
          India’s #1 Online Casino & Sports Betting Platform
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 tracking-wide">
          Play, Win Real Rewards & Rule the Table.
        </p>

        <a href="https://www.a2k.bet/signUp?pid=topvip">
          <button
            className="px-6 sm:px-8 py-2 sm:py-3 cursor-pointer font-semibold text-black rounded-full transition-transform duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(to right, #f7e183, #e4c169, #caa74d)",
              boxShadow: "0 0 15px rgba(229, 193, 105, 0.6)",
            }}
          >
            Play Now & Rule the Table
          </button>
        </a>
      </div>
    </div>
  );
};

export default MainPage;
