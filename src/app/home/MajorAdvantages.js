"use client";

import React from "react";
import { 
  FaShieldAlt, 
  FaBolt, 
  FaLock, 
  FaStar, 
  FaGlobe, 
  FaGift, 
  FaUsers, 
  FaCrown 
} from "react-icons/fa";

const advantages = [
  {
    icon: <FaShieldAlt />,
    title: "Secure Platform",
    desc: "Your safety is our top priority. We use advanced encryption technology, multi-layer firewalls, and continuous monitoring to ensure your funds and data are always protected from any threat."
  },
  {
    icon: <FaBolt />,
    title: "Fast Transactions",
    desc: "Enjoy instant deposits and lightning-fast withdrawals with no unnecessary delays, so you can focus more on playing and winning without waiting."
  },
  {
    icon: <FaLock />,
    title: "Data Protection",
    desc: "We guarantee that your personal and financial information remains 100% confidential through cutting-edge security measures and strict privacy policies."
  },
  {
    icon: <FaStar />,
    title: "Top Rated Games",
    desc: "Play only the most popular and trusted games in the industry, carefully selected from world-class providers to give you the ultimate gaming experience."
  },
  {
    icon: <FaGlobe />,
    title: "Global Access",
    desc: "No matter where you are, enjoy seamless gameplay across the globe with full platform accessibility anytime, on any device."
  },
  {
    icon: <FaGift />,
    title: "Daily Rewards",
    desc: "Receive exciting bonuses, free spins, and exclusive offers every single day to make your gaming journey even more rewarding."
  },
  {
    icon: <FaUsers />,
    title: "Active Community",
    desc: "Be part of a vibrant and friendly community of players from around the world, sharing tips, strategies, and endless fun."
  },
  {
    icon: <FaCrown />,
    title: "VIP Benefits",
    desc: "Unlock premium perks, bigger bonuses, and personalized services designed exclusively for our most loyal and high-value players."
  },
];

const MajorAdvantages = () => {
  return (
    <div className="py-12 px-6 bg-[#1a1b1b] text-white">
      {/* Page Heading */}
      <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
        Major Casino Advantages
      </h2>

      {/* Advantages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="flex flex-col items-start py-5 px-5 rounded-xl shadow-lg bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] hover:scale-105 hover:shadow-yellow-500/50 transition-transform duration-300"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="text-yellow-400 text-4xl">{adv.icon}</div>
              <h2 className="text-2xl font-semibold">{adv.title}</h2>
            </div>
            <p className="text-gray-300 mt-4 text-lg">{adv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MajorAdvantages;
