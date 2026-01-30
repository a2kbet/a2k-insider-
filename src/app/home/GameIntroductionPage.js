import React from "react";
import Image from "next/image";

const GameIntroductionPage = () => {
  const categories = [
    {
      title: "Sportsbook",
      description:
        "Ace2King Sportsbook brings the adrenaline of real-time sports betting straight to your screen. From cricket boundaries to football goals, every moment is packed with unmatched excitement. Predict winners, chase instant odds, and experience the unstoppable thrill of live play. With lightning-fast payouts, unbeatable bonuses, and 24/7 access — every match is your golden chance to win big and rule the game.",
      images: [
        "/images/CRICKET.webp",
        "/images/FOOTBALL.webp",
        "/images/BASKETBALL.webp",
        "/images/SABA.webp",
      ],
    },
    {
      title: "Slots",
      description:
        "Ace2King Slots is your passport to a world of endless spins and instant thrills. Explore blockbuster titles like Money Coming, Super Ace, Crazy 777, and Fortune Gems — each loaded with stunning visuals, immersive gameplay, and massive rewards. Spin the reels, hit jackpots, and watch your winnings roll in instantly — because here, every spin could be the one that changes your fortune.",
      images: [
        "/images/MONEYCOMING.webp",
        "/images/SUPERACE.webp",
        "/images/CRAZY777.webp",
        "/images/FORTUNEGEMS.webp",
      ],
    },
  ];

  return (
    <div className="min-h-[85vh] py-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center bg-white text-black">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold text-black text-center">
        Explore Game Categories
      </h2>

      {/* Category Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-4">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col text-center bg-white p-6 rounded-2xl border border-black/10 transition"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
              {category.title}
            </h3>

            {/* 4 Images */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {category.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${category.title} ${i}`}
                  width={300}
                  height={200}
                  className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-lg border border-black/10"
                />
              ))}
            </div>

            <p className="text-black/70 text-base sm:text-lg leading-relaxed mb-6">
              {category.description}
            </p>

            {/* Button */}
            <div className="w-full flex justify-center">
              <a href="https://www.a2k.bet/promotion?pid=topvip">
                <button className="text-white text-base sm:text-lg font-medium px-6 sm:px-7 py-2 sm:py-3 rounded-full bg-black border border-black hover:bg-white hover:text-black transition">
                  🎮 Explore More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameIntroductionPage;
