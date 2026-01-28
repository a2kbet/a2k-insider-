"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "Hey Ace2King, what exactly is an online casino and how does yours work?",
    a: "At Ace2King, our online casino is your gateway to thrilling games like slots, poker, blackjack, and more — playable for real or virtual money. We run on licensed, certified software that ensures fair play, transparent rules, and secure transactions so you can enjoy the game with confidence.",
  },
  {
    q: "How do I know Ace2King is a safe place to play?",
    a: "Your safety is our top priority. Ace2King is fully licensed, uses secure payment gateways, applies advanced encryption, and operates with complete transparency. Plus, our players’ reviews speak for themselves — we’re here to give you a trusted, premium gaming experience.",
  },
  {
    q: "Can I cash out my winnings from Ace2King whenever I want?",
    a: "Absolutely! You can request withdrawals anytime. Depending on your payment method, processing times may vary, and certain bonuses might have wagering requirements before withdrawal. We make sure all this info is clear and easy to check in your account.",
  },
  {
    q: "Why does Ace2King ask me to verify my ID?",
    a: "We ask for ID verification to confirm it’s really you, protect your account, and comply with international anti-fraud and anti–money laundering regulations. It’s a one-time step that keeps your funds and personal details safe.",
  },
  {
    q: "What exactly are wagering requirements on Ace2King?",
    a: "When you claim bonuses at Ace2King, wagering requirements tell you how much you need to bet before bonus winnings become withdrawable. We clearly display these terms so you know exactly what’s needed.",
  },
  {
    q: "Does Ace2King actually pay out players?",
    a: "Yes — we take pride in paying our winners quickly and securely. As a licensed operator, all payouts follow our clear withdrawal terms, ensuring your money reaches you on time, every time.",
  },
  {
    q: "Do you have bonuses for new players at Ace2King?",
    a: "Of course! We welcome new players with exciting offers like deposit matches, free spins, and exclusive rewards. Keep an eye on our promotions page so you never miss a deal.",
  },
  {
    q: "Can I try Ace2King games for free before betting real money?",
    a: "Yes — many of our games have demo modes where you can practice and get familiar without risking a cent. When you’re ready, you can switch to real money play anytime.",
  },
  {
    q: "What should I do if my Ace2King withdrawal takes longer than expected?",
    a: "First, check that you’ve met all the wagering requirements and that your payment details are correct. If everything’s in order, our 24/7 customer support team will be happy to look into it for you immediately.",
  },
  {
    q: "Can I actually win consistently playing on Ace2King?",
    a: "Casino games are built on chance, so there’s no way to guarantee consistent wins — and that’s what makes the thrill real! We encourage you to play responsibly, enjoy the experience, and treat winnings as a bonus to your entertainment.",
  },
];

const CasinoQA = () => {
  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const toggleLeft = (i) => setOpenLeft(openLeft === i ? null : i);
  const toggleRight = (i) => setOpenRight(openRight === i ? null : i);

  const renderFaq = (item, isOpen, toggle, key) => (
    <div
      key={key} // ✅ Add a unique key here
      className="bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] border border-yellow-500/30 rounded-xl p-6 shadow-lg"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-lg font-semibold">{item.q}</p>
        <span className="text-2xl font-bold text-yellow-400">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-300 text-base leading-relaxed">{item.a}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#1a1b1b] text-white min-h-screen px-6 py-12 flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] mb-12">
        Casino Q&A: Your Questions Answered
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div className="space-y-6">
          {leftFaqs.map((item, i) =>
            renderFaq(item, openLeft === i, () => toggleLeft(i), `left-${i}`)
          )}
        </div>
        <div className="space-y-6">
          {rightFaqs.map((item, i) =>
            renderFaq(item, openRight === i, () => toggleRight(i), `right-${i}`)
          )}
        </div>
      </div>
    </div>
  );
};

export default CasinoQA;
