"use client";

import Image from "next/image";

const topGames = [
  { name: "Live Games", img: "/images/LIVE3.webp", link: "https://www.a2k.bet/livegame" },
  { name: "Slot Games", img: "/images/GAME8.webp", link: "https://www.a2k.bet/slotgame" },
  { name: "Sport Games", img: "/images/CRICKET.webp", link: "https://www.a2k.bet/sportgame" },
  { name: "Cock Fighting", img: "/images/COCK.webp", link: "https://www.a2k.bet/cockfightinggame" },
  { name: "Fishing", img: "/images/FISHING.webp", link: "https://www.a2k.bet/fishergame" },
  { name: "Other Games", img: "/images/GAME2.webp", link: "https://www.a2k.bet/othergame" },
];

const TopGames = () => {
  return (
    <div className="px-10 py-16 bg-[#1a1b1b] text-white">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] text-center mb-12">
        Top Games Recommendations
      </h2>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {topGames.map((game, i) => (
          <a
            key={i}
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            {/* Game Image */}
            <div className="w-full">
              <Image
                src={game.img}
                alt={game.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
            </div>

            {/* Game Info */}
            <div className="py-3 flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-semibold">{game.name}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* Centered CTA Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://www.a2k.bet/promotion"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-[#DAA520] to-[#FFF4C2] text-black font-semibold hover:opacity-90 transition"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default TopGames;
