"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Blog3() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "1. Are online casinos legal for Indian players?",
      a: "Online casinos that operate outside India and hold international licenses (like Malta Gaming Authority or Curacao eGaming) are legal for Indian players, as long as the platform accepts INR and follows responsible gaming policies.",
    },
    {
      q: "2. Which payment methods can Indian players use at online casinos?",
      a: "Indian players can use secure payment options like UPI, Paytm, PhonePe, Net Banking, Google Pay, and even cryptocurrency on select platforms for quick deposits and withdrawals.",
    },
    {
      q: "3. Which is the most trusted online casino for Indians in 2025?",
      a: "Some of the most trusted online casinos for Indian players in 2025 include Royal Vegas, LeoVegas, 22Bet, PureWin, and Betway — all licensed and known for safe gameplay and fast payouts.",
    },
    {
      q: "4. Can I play Indian games like Teen Patti and Andar Bahar online?",
      a: "Yes. Casinos like PureWin and 22Bet offer popular Indian games such as Teen Patti, Andar Bahar, and Hindi Roulette with real dealers and localized themes.",
    },
    {
      q: "5. Is it safe to deposit money using UPI or Paytm on these casinos?",
      a: "Yes, as long as you play on licensed and trusted platforms like those listed above. They use advanced SSL encryption and secure gateways to ensure your transactions remain safe.",
    },
    {
      q: "6. Which casino is best for mobile gaming?",
      a: "LeoVegas is considered the best mobile casino for Indian players in 2025. Its dedicated app for Android and iOS ensures smooth gaming and fast access to live dealer tables.",
    },
  ];

  return (
    <>
      {/* Blog Content */}
      <div className="bg-[#1a1b1b] text-white w-full min-h-screen md:px-12 py-5">
        <article className="max-w-6xl mx-auto space-y-12 text-gray-300 text-lg md:text-xl leading-relaxed">
          {/* Intro */}
          <p>
            Online casino gaming has grown rapidly in India, and 2025 looks
            brighter than ever for players who enjoy fun, rewards, and
            entertainment. With secure payment methods like UPI, Paytm, and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Online_banking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Net Banking
            </a>{" "}
            now available, Indian players can easily explore world-class casinos
            from the comfort of their own homes.
          </p>
          <p>
            In this guide, we share the Top 5 trusted online casinos for Indian
            players in 2025, focusing on licensed platforms, smooth gameplay,
            and attractive bonuses. If you’re ready to discover exciting games,
            explore jackpots, and play responsibly, this guide is for you.
          </p>

          {/* 1. Royal Vegas */}
          <section>
            <h2 className="text-3xl font-bold mb-2 text-[#FFF4C2]">
              1. Royal Vegas Casino – Premium Gaming Experience
            </h2>
            <p>
              Royal Vegas has been a global name for years, offering Indian
              players a premium casino environment. With games powered by
              Microgaming, you’ll find everything from slots to live dealer
              tables.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                <strong>License:</strong> Malta Gaming Authority
              </li>
              <li>
                <strong>Why Indians Love It:</strong> Smooth deposits via UPI
                and instant withdrawals
              </li>
              <li>
                <strong>Highlights:</strong> 700+ games, 24/7 support,
                high-security encryption
              </li>
            </ul>
            <p>
              👉 Discover more trusted gaming options at{" "}
              <a
                href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                A2K.bet
              </a>
              .
            </p>
          </section>

          {/* 2. LeoVegas */}
          <section>
            <h2 className="text-3xl font-bold mb-2 text-[#FFF4C2]">
              2. LeoVegas – The Mobile King
            </h2>
            <p>
              LeoVegas is often called the “King of Mobile Casinos.” Its app
              offers seamless gaming on Android and iOS devices, making it a
              favorite among Indian players who love to play on the go.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                <strong>License:</strong> UK Gambling Commission & Malta Gaming
                Authority
              </li>
              <li>
                <strong>Why Indians Love It:</strong> Tailored mobile interface,
                multiple live dealer tables
              </li>
              <li>
                <strong>Highlights:</strong> Huge welcome bonuses, cricket
                betting options, secure UPI payments
              </li>
            </ul>
          </section>

          {/* 3. 22Bet */}
          <section>
            <h2 className="text-3xl font-bold mb-2 text-[#FFF4C2]">
              3. 22Bet Casino – Sports + Casino Combo
            </h2>
            <p>
              For players who love both sports and casinos, 22Bet is a perfect
              choice. It offers a blend of casino games and sports betting,
              including cricket and kabaddi – popular choices in India.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                <strong>License:</strong> Curacao eGaming
              </li>
              <li>
                <strong>Why Indians Love It:</strong> Hindi language option,
                fast deposits with Paytm & PhonePe
              </li>
              <li>
                <strong>Highlights:</strong> 1000+ slot games, Indian card games
                like Andar Bahar & Teen Patti
              </li>
            </ul>
          </section>

          {/* 4. PureWin */}
          <section>
            <h2 className="text-3xl font-bold mb-2 text-[#FFF4C2]">
              4. PureWin Casino – Made for India
            </h2>
            <p>
              PureWin has gained trust in India for offering UPI-first deposits
              and India-specific games. It feels like it’s designed for the
              Indian market, with localized payment support and regional themes.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                <strong>License:</strong> Curacao eGaming
              </li>
              <li>
                <strong>Why Indians Love It:</strong> Supports INR, fast UPI
                withdrawals, localized bonuses
              </li>
              <li>
                <strong>Highlights:</strong> Live Teen Patti, Hindi roulette,
                cricket promotions
              </li>
            </ul>
          </section>

          {/* 5. Betway */}
          <section>
            <h2 className="text-3xl font-bold mb-2 text-[#FFF4C2]">
              5. Betway Casino – Trusted International Brand
            </h2>
            <p>
              Betway is a household name in online gaming and betting. Known for
              its reliability and strong security, it offers a mix of{" "}
              <a
                href="https://www.a2k.bet/slotgame"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                slots
              </a>
              , live casino, and{" "}
              <a
                href="https://www.a2k.bet/sportgame"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                sports betting
              </a>{" "}
              under one platform.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                <strong>License:</strong> Malta Gaming Authority & UKGC
              </li>
              <li>
                <strong>Why Indians Love It:</strong> INR deposits, easy
                withdrawals, responsible gaming policies
              </li>
              <li>
                <strong>Highlights:</strong> Live blackjack, live baccarat, 24/7
                customer care
              </li>
            </ul>
          </section>

          {/* Conclusion Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-[#FFF4C2] border-b border-gray-700 pb-2">
              Conclusion
            </h2>
            <p>
              The world of online casinos in India is booming, and with trusted
              platforms like A2K.bet, Indian players can enjoy safe, exciting,
              and rewarding gaming in 2025.
            </p>
            <p>
              Whether you prefer UPI deposits, mobile play, or live Indian card
              games, these casinos offer everything you need.
            </p>
            <p>
              Ready to explore your next favorite casino? Start your journey at{" "}
              <a
                href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                A2K.bet
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-[#FFF4C2] border-b border-gray-700 pb-2">
              FAQs
            </h2>

            <div className="space-y-4 text-gray-300">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-2">
                  {/* Question */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                  >
                    <strong>{faq.q}</strong>
                    {openIndex === index ? (
                      <ChevronUp className="text-[#FFF4C2]" size={20} />
                    ) : (
                      <ChevronDown className="text-[#FFF4C2]" size={20} />
                    )}
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <p className="mt-2 text-gray-400">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
