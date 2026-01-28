"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Blog1() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "1. Is online gambling legal in India in 2025?",
      a: "Yes, players in most states can legally access international licensed casino platforms.",
    },
    {
      q: "2. Which licenses are valid for Indian players?",
      a: "Curacao, Malta (MGA), UKGC, and Philippines licenses are trusted for Indian players.",
    },
    {
      q: "3. Can I use UPI for deposits?",
      a: "Yes, UPI is one of the most popular and safest methods for Indian users.",
    },
    {
      q: "4. Are winnings from online casinos taxable in India?",
      a: "Yes, as per the Income Tax Act, winnings above ₹10,000 may be subject to TDS.",
    },
    {
      q: "5. Which is the best casino site for Indian players in 2025?",
      a: (
        <>
          International platforms like{" "}
          <a
            href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            A2K.bet
          </a>{" "}
          provide secure, user-friendly, and rewarding gaming experiences.
        </>
      ),
    },
  ];
  return (
    <>
      {/* Intro */}
      <p>
        Online entertainment has become one of the fastest-growing industries in
        India. Among the many ways people enjoy their free time, online casino
        games have gained massive popularity. With simple access, user-friendly
        platforms, and secure payment methods like{" "}
        <a
          href="https://en.wikipedia.org/wiki/Unified_Payments_Interface"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          UPI
        </a>
        , players across the country are discovering a whole new world of fun
        and rewards.
      </p>

      {/* Current Situation */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-[#FFF4C2] border-b border-gray-700 pb-2">
          Current Situation in 2025
        </h2>
        <p>
          In India, there is no central law that directly bans online gambling.
          Instead, the rules depend on individual states. While a few states
          have stricter laws, most others allow players to freely enjoy online
          games on platforms that are licensed internationally.
        </p>
        <p>
          This means Indian players can legally access international casino
          websites that hold trusted licenses such as:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Curacao License</li>
          <li>Malta Gaming Authority (MGA)</li>
          <li>UK Gambling Commission (UKGC)</li>
          <li>Philippines (PAGCOR)</li>
        </ul>
        <p>
          These licenses ensure fair play, transparency, and secure payouts.
        </p>
      </section>

      {/* Why Indian Players Love Online Casinos */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-[#FFF4C2] border-b border-gray-700 pb-2">
          Why Indian Players Love Online Casinos in 2025
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>Easy Deposits with UPI & Paytm</strong> – No need for
            complex payment setups. UPI has made deposits and withdrawals smooth
            and instant.
          </li>
          <li>
            <strong>Variety of Games</strong> – From classic roulette and
            blackjack to exciting slot machines and live dealer tables, there’s
            always something new to try.
          </li>
          <li>
            <strong>Safe & Secure Platforms</strong> – Internationally licensed
            websites give players complete peace of mind.
          </li>
          <li>
            <strong>Attractive Bonuses</strong> – Players can claim welcome
            bonuses, free spins, and loyalty rewards every month.
          </li>
        </ul>
        <p>
          If you’re looking to experience this fun, platforms like{" "}
          <a
            href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            A2K.bet
          </a>{" "}
          offer a trusted space for Indian users to explore casino
          entertainment.
        </p>
      </section>

      {/* Is it Safe */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-[#FFF4C2] border-b border-gray-700 pb-2">
          Is It Safe for Indian Players?
        </h2>
        <p>Yes, absolutely. When you choose a licensed platform, you enjoy:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Encrypted transactions (especially via UPI)</li>
          <li>Verified payouts</li>
          <li>Responsible gaming features</li>
          <li>24/7 customer support</li>
        </ul>
        <p>
          As long as players select internationally regulated sites, online
          gambling in India is both safe and enjoyable in 2025.
        </p>
      </section>

      {/* Future of Online Gambling */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-[#FFF4C2] border-b border-gray-700 pb-2">
          The Future of Online Gambling in India
        </h2>
        <p>
          With the growing popularity of casino games, India is moving closer to
          recognizing the industry’s economic potential. Experts believe that by
          the coming years, we may see more structured guidelines to support
          digital entertainment platforms.
        </p>
        <p>
          Until then, Indian players can continue enjoying internationally
          licensed casino sites safely, making online gambling not just legal
          but also exciting in 2025.
        </p>
        <p>
          Ready to experience the thrill of casino gaming? 🎲 Explore trusted
          and user-friendly platforms like{" "}
          <a
            href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            A2K.bet
          </a>{" "}
          where Indian players can enjoy top games, smooth deposits, and
          rewarding bonuses.
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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
    </>
  );
}
