import React from "react";

const PromoDetailsPage = () => {
  const promos = [
    {
      img: "/images/CHECKINBONUS.webp",
      title: "Daily Check-In Bonus",
      desc: "Log in daily and unlock instant rewards. Stay active, keep your streak, and claim big wins!",
    },
    {
      img: "/images/DAILYLUCKYDRAW.webp",
      title: "Daily Lucky Draw",
      desc: "Enter the draw every day for free spins, surprise prizes, and exciting bonus drops!",
    },
    {
      img: "/images/AVIATORWELCOMEBONUS.webp",
      title: "100% Aviator Welcome Bonus",
      desc: "Fly high with Aviator! Deposit now and get a 100% bonus boost to double your chances.",
    },
    {
      img: "/images/CASHBACKONMONDAY.webp",
      title: "5% Cashback on Monday",
      desc: "Lost on Monday? Don’t worry. Get 5% cashback credited straight to your wallet instantly!",
    },
    {
      img: "/images/LIVECASINODEPOSITBONUS.webp",
      title: "100% Live Casino Deposit Bonus",
      desc: "Deposit and double your thrill! Enjoy a 100% bonus on all Live Casino game deposits.",
    },
    {
      img: "/images/REFER.webp",
      title: "Refer & Get Unlimited Bonus",
      desc: "Invite your friends to join the fun. Earn unlimited bonuses as they win and play daily!",
    },
    {
      img: "/images/MYSTERYBONUS.webp",
      title: "Mystery Bonus",
      desc: "Unlock secret bonuses every day! From free bets to coins, surprises are just a click away.",
    },
    {
      img: "/images/DOWNLOADGET150.webp",
      title: "Download App & Get ₹150 Free",
      desc: "Install the app now and receive ₹150 free to start your exciting gaming adventure today!",
    },
    {
      img: "/images/USDT.webp",
      title: "2% USDT Deposit Bonus",
      desc: "Deposit using USDT and get an extra 2% bonus instantly credited to your account.",
    },
  ];

  return (
    <div className="min-h-[90vh] bg-white px-4 py-12 text-black flex flex-col items-center">
      <h2 className="text-4xl mb-10 md:text-6xl font-bold text-black text-center">
        Exclusive Promotions Awaits
      </h2>

      <div className="grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-8xl">
        {promos.map((promo, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 border border-black/10 hover:border-black transition"
          >
            <img
              src={promo.img}
              alt={promo.title}
              className="w-full h-50 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3">
              {promo.title}
            </h3>
            <p className="text-black/70 text-base md:text-lg leading-relaxed">
              {promo.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoDetailsPage;
