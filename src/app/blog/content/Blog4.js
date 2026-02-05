"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Blog4() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Q1. Does India issue an online casino license?",
      a: "No, India does not issue online casino licenses. Indian players can play on internationally licensed casinos like Curacao, MGA, UKGC, and PAGCOR.",
    },
    {
      q: "Q2. Is it safe to play on Curacao-licensed casinos?",
      a: "Yes, Curacao licenses are widely accepted and trusted in India. They also support local payment options like UPI and Paytm.",
    },
    {
      q: "Q3. Which is the most trusted license for Indian players?",
      a: "The MGA and UKGC licenses are considered the strictest and most reliable worldwide.",
    },
    {
      q: "Q4. Can I deposit in INR on licensed casinos?",
      a: "Yes, many licensed casinos support INR and allow deposits via UPI, NetBanking, and Paytm.",
    },
    {
      q: "Q5. How do I check if a casino is licensed?",
      a: "Look for the license details at the bottom of the casino’s homepage and verify it on the regulator’s official site.",
    },
  ];

  return (
    <>
      {/* Blog Page Content */}
      <div className=" text-white w-full min-h-screen md:px-12 py-5">
        <article className="max-w-6xl mx-auto space-y-12 text-black text-lg md:text-xl leading-relaxed">
          {/* Intro */}
          <p>
            Online casino gaming is growing fast in India, and more players are
            exploring trusted platforms to enjoy real-money games. But one
            common question is: Which licenses are valid for Indian players?
          </p>
          <p>
            The answer is simple — while India doesn’t issue a direct online
            casino license, international gaming authorities regulate and
            certify the casinos that welcome Indian players. If you know which
            licenses to look for, you can enjoy safe, fun, and reliable gaming
            without confusion. Let’s break it down step by step.
          </p>

          {/* Why Casino Licenses Matter */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-black border-b border-gray-700 pb-2">
              Why Casino Licenses Matter for Indian Players
            </h2>
            <p>
              A license is like a quality seal for an online casino. It proves
              that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>The casino follows fair gaming practices.</li>
              <li>Your money and personal data are securely protected.</li>
              <li>Games are regularly audited for fairness.</li>
              <li>Players have a place to raise complaints if needed.</li>
            </ul>
            <p>
              When you choose a casino with a recognized international license,
              you’re stepping into a safe and exciting environment where you can
              focus on what really matters — playing your favorite casino games.
            </p>
          </section>

          {/* Popular Casino Licenses */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-black border-b border-gray-700 pb-2">
              Popular Casino Licenses Valid for Indian Players
            </h2>

            {/* Curacao */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-black">
                1. Curacao eGaming License
              </h3>
              <p>
                One of the oldest and most popular licenses. Many
                Indian-friendly casinos operate under Curacao because it allows:
              </p>
              <ul className="list-disc list-inside space-y-1 text-black">
                <li>Multiple currencies, including INR.</li>
                <li>
                  Easy integration with UPI, Paytm, PhonePe, and other Indian
                  payment methods.
                </li>
                <li>
                  A wide variety of casino games and sports betting options.
                </li>
              </ul>
              <p>
                ✨ Want to start playing on Curacao-licensed platforms? Explore{" "}
                <a
                  href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  trusted casinos here.
                </a>
              </p>
            </div>

            {/* MGA */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-black">
                2. Malta Gaming Authority (MGA)
              </h3>
              <p>
                The MGA license is known for strict regulations and top-notch
                player safety. Casinos under MGA offer:
              </p>
              <ul className="list-disc list-inside space-y-1 text-black">
                <li>High-level security and responsible gaming measures.</li>
                <li>Smooth payment systems supporting INR deposits.</li>
                <li>
                  Premium slot machines, poker rooms, and live dealer games.
                </li>
              </ul>
            </div>

            {/* UKGC */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-black">
                3. UK Gambling Commission (UKGC)
              </h3>
              <p>
                The UKGC license is one of the toughest and most respected
                globally. Even though it is based in the UK, many UKGC-licensed
                casinos allow Indian players.
              </p>
              <ul className="list-disc list-inside space-y-1 text-black">
                <li>Full transparency in payouts and gaming rules.</li>
                <li>Top-tier software providers for casino games.</li>
                <li>Strong customer support systems.</li>
              </ul>
            </div>

            {/* Philippines */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-black">
                4. Philippines (PAGCOR & First Cagayan)
              </h3>
              <p>
                For Indian players, licenses from the Philippines are becoming
                more popular, especially in Asia.
              </p>
              <ul className="list-disc list-inside space-y-1 text-black">
                <li>PAGCOR ensures fair games and smooth payouts.</li>
                <li>
                  Perfect for players who love{" "}
                  <a
                    href="https://www.a2k.bet/slotgame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    slots
                  </a>
                  , roulette, baccarat, and cricket betting.
                </li>
              </ul>
            </div>
          </section>

          {/* Identify */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-black border-b border-gray-700 pb-2">
              🎯 How to Identify a Licensed Online Casino
            </h2>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>Scroll to the footer of the casino website.</li>
              <li>
                Look for the license number and regulator logo (Curacao, MGA,
                UKGC, or PAGCOR).
              </li>
              <li>
                Click the license link to verify it on the official regulator’s
                page.
              </li>
            </ul>
            <p>
              When you find this information, you can confidently enjoy casino
              games knowing you are playing in a safe and regulated environment.
            </p>
          </section>

          {/* Preference */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-black border-b border-gray-700 pb-2">
              Why Indian Players Prefer Licensed Casinos
            </h2>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>
                Secure deposits & withdrawals via UPI, Paytm, and NetBanking.
              </li>
              <li>
                A wide range of casino games like Teen Patti, Andar Bahar,
                Slots, and Live Roulette.
              </li>
              <li>Fair play guaranteed by international regulators.</li>
              <li>
                Exciting bonuses and promotions that make the game even more
                rewarding.
              </li>
            </ul>
          </section>

          {/* Ready to Play */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-black border-b border-gray-700 pb-2">
              🔗 Ready to Play?
            </h2>
            <p>
              Licensed casinos open the door to thrilling gameplay. Whether you
              love slots, live dealer games, or sports betting, choosing a
              licensed platform ensures you play with peace of mind.
            </p>
            <p>👉 Explore exciting options on</p>
            <p>
              Ready to explore your next favorite casino? Start your journey at{" "}
              <a
                href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                A2K.bet
              </a>{" "}
              and discover trusted, licensed casinos that welcome Indian
              players.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-black border-b border-gray-700 pb-2">
              FAQs
            </h2>

            <div className="space-y-4 text-black">
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
