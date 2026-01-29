import React from "react";
import { Apple, Play } from "lucide-react";

const DownloadApp = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white text-black">
      
      {/* Left Side Big Image */}
      <div className="w-full md:w-[45%] flex items-center justify-center p-6 md:p-10">
        <img
          src="/images/PI.png"
          alt="App showcase"
          className="rounded-2xl w-full max-w-sm md:max-w-lg object-cover border border-black/10"
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-[55%] flex flex-col items-center justify-center px-6 md:px-14 py-6 text-center space-y-6 md:space-y-8">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-black max-w-2xl">
          Download the App
        </h2>

        {/* Logo Image */}
        <img
          src="/images/ACE2KING.webp"
          alt="App Logo"
          className="w-[170px] md:w-[210px] h-auto object-contain mx-auto"
        />

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-black/70 leading-relaxed max-w-2xl">
          Unlock a world of premium gaming at your fingertips. Enjoy
          lightning-fast deposits, instant withdrawals, and exclusive offers —
          all wrapped in one sleek app experience.
        </p>

        {/* Small Preview Images */}
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            src="/images/ANDROID.webp"
            alt="Android Preview"
            className="h-10 sm:h-12 md:h-14 w-auto rounded-lg object-contain border border-black/10"
          />
          <img
            src="/images/IOS.webp"
            alt="iOS Preview"
            className="h-10 sm:h-12 md:h-14 w-auto rounded-lg object-contain border border-black/10"
          />
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center w-full sm:w-auto">
          
          <a href="https://www.a2k.bet/download">
            <button className="flex items-center justify-center px-7 py-3 space-x-3 rounded-full border border-black bg-white text-black font-medium hover:bg-black hover:text-white transition">
              <Play size={20} />
              <span className="text-sm sm:text-base">Android</span>
            </button>
          </a>

          <a href="https://www.a2k.bet/download">
            <button className="flex items-center justify-center px-7 py-3 space-x-3 rounded-full border border-black bg-white text-black font-medium hover:bg-black hover:text-white transition">
              <Apple size={20} />
              <span className="text-sm sm:text-base">iOS</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
