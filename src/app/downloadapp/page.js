import React from "react";
import { Apple, Play } from "lucide-react";

export default function DownloadAppPage() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#1a1b1b] text-white">
      
      {/* Left Side Big Image */}
      <div className="w-full md:w-[45%] flex items-center justify-center p-6 md:p-8">
        <img
          src="/images/PI.png"
          alt="App showcase"
          className="rounded-3xl w-full max-w-sm md:max-w-lg object-cover"
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-[55%] flex flex-col items-center justify-center px-4 md:px-12 py-4 text-center space-y-5 md:space-y-7">

        {/* Heading */}
        <h2 className="text-4xl mb-10 md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#FFD700] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] max-w-2xl">
          Download the App
        </h2>

        {/* Logo Image */}
        <img
          src="/images/ACE2KING.webp"
          alt="App Logo"
          className="w-[180px] md:w-[220px] h-auto object-contain mx-auto"
        />

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
          Unlock a world of premium gaming at your fingertips. Enjoy
          lightning-fast deposits, instant withdrawals, and exclusive offers —
          all wrapped in one sleek app experience.
        </p>

        {/* Small Preview Images */}
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            src="/images/ANDROID.webp"
            alt="Android Preview"
            className="h-10 sm:h-12 md:h-14 w-auto rounded-xl object-contain shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-yellow-500/40"
          />
          <img
            src="/images/IOS.webp"
            alt="iOS Preview"
            className="h-10 sm:h-12 md:h-14 w-auto rounded-xl object-contain shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-yellow-500/40"
          />
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center w-full sm:w-auto">
          {/* Android Button */}
          <a href="https://www.a2k.bet/download">
            <button className="flex items-center justify-center px-6 py-3 space-x-3 rounded-full bg-gradient-to-r from-[#FFF4C2] via-[#FFD700] to-[#DAA520] text-black font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] transition">
              <Play size={22} />
              <span className="text-sm sm:text-base">Android</span>
            </button>
          </a>

          {/* iOS Button */}
          <a href="https://www.a2k.bet/download">
            <button className="flex items-center justify-center px-6 py-3 space-x-3 rounded-full bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#FFF4C2] text-black font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] transition">
              <Apple size={22} />
              <span className="text-sm sm:text-base">iOS</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
