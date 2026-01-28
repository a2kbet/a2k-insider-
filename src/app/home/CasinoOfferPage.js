"use client";

import Image from "next/image";

const advantages = [
  {
    title: "Secure Transactions",
    description:
      "Your deposits and withdrawals are protected with bank-grade encryption for complete peace of mind.",
  },
  {
    title: "100% Live Casino Deposit Bonus",
    description:
      "Get double your first deposit and boost your chances to win big — only on live casino tables!",
  },
  {
    title: "Instant Withdrawals",
    description: "Winnings paid out in minutes — no delays, no hassle.",
  },
  {
    title: "Daily Live Casino Rewards",
    description:
      "Claim new rewards and exclusive bonuses every day when you play live casino games.",
  },
];

const CasinoOfferPage = () => {
  return (
    <div className="bg-[#1a1b1b] text-white font-poppins">
      {/* Page Heading */}
      <div className="text-center px-4 py-8">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
          Latest Casino Offers
        </h2>
      </div>

      {/* Image + Paragraph + Cards Section */}
      <div className="flex flex-col md:flex-row px-6 md:px-12 gap-6">
        {/* Left Image */}
        <div className="md:w-[40%]">
          <Image
            src="/images/LIVECASINO.jpg"
            alt="Casino"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-[60%] flex flex-col gap-4">
          {/* Paragraph */}
          <p className="text-gray-300 text-xl leading-relaxed">
            Welcome to{" "}
            <span className="text-yellow-300 font-semibold">Ace2King</span> —
            your Online Trusted Casino Platform and the ultimate destination for
            live casino entertainment and online betting excitement! Experience
            the thrill of real-time gaming on the best online live casino, where
            professional dealers host immersive tables of{" "}
            <a
              href="https://www.a2k.bet/livegame?brand=EVO,EZ,SEXY,MGP,SA,WM,AG,PT,VENUS,CQ9&gameKind=13"
              target="_blank"
              className="text-blue-500"
              rel="noopener noreferrer"
            >
              live roulette online casino
            </a>{" "}
            and{" "}
            <a
              href="https://www.a2k.bet/livegame?brand=EVO,EZ,SEXY,MGP,SA,WM,AG,PT,VENUS,CQ9&gameKind=10"
              target="_blank"
              className="text-blue-500"
              rel="noopener noreferrer"
            >
              baccarat casino online
            </a>
            , all in stunning HD streaming.
          </p>

          <p className="text-gray-300 text-xl leading-relaxed">
            At Ace2King, we combine the excitement of authentic casino gameplay
            with the reliability of an{" "}
            <a
              href="https://www.a2k.bet/"
              target="_blank"
              className="text-blue-500"
              rel="noopener noreferrer"
            >
              online trusted casino website
            </a>{" "}
            . Play your favorite games — poker, blackjack, roulette, and
            baccarat — and enjoy secure transactions, instant withdrawals, and
            exclusive daily bonuses that make every session rewarding.
          </p>

          <p className="text-gray-300 text-xl leading-relaxed">
            Recognized among the{" "}
            <a
              href="https://www.a2k.bet/"
              target="_blank"
              className="text-blue-500"
              rel="noopener noreferrer"
            >
              best online gambling sites in India
            </a>{" "}
            , Ace2King guarantees fair play, lightning-fast payouts, and
            round-the-clock entertainment. Whether you’re a casual player or a
            high roller, our user-friendly app delivers a smooth, premium
            experience that keeps the action going wherever you are.
          </p>

          <p className="text-gray-300 text-xl leading-relaxed">
            Join thousands of players who trust{" "}
            <span className="text-yellow-300 font-semibold">Ace2King</span> for
            its transparency, speed, and unbeatable rewards — it’s not just
            gaming, it’s your chance to win big every single day!
          </p>

          {/* Advantage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-yellow-500 bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] shadow-md transition-transform hover:scale-[1.03]"
              >
                <h3 className="text-2xl font-semibold mb-3 text-yellow-300">
                  {adv.title}
                </h3>
                <p className="text-gray-300 text-lg">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoOfferPage;
