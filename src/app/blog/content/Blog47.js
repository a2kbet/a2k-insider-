"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the difference between moneyline and spread betting?",
    a: "Moneyline is simply picking the winner. Spread betting accounts for point differences between teams.",
  },
  {
    q: "What is an underdog in sports betting?",
    a: "An underdog is the team expected to lose, often offering higher payouts for risk.",
  },
  {
    q: "How do totals (over/under) work?",
    a: "Totals bet on whether the combined score of both teams exceeds or falls below a set number.",
  },
  {
    q: "How important is bankroll management?",
    a: "It’s essential to ensure long-term enjoyment and prevent impulsive or risky bets.",
  },
  {
    q: "Can online tools help with sports betting?",
    a: "Yes. Live odds, analytics, and calculators available on trusted platforms improve strategy and confidence.",
  },
];

const Blog47 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="w-full  text-white ">
      <div className="max-w-5xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          The Sports Betting Basics: Setting the Line, Underdogs vs Favorites,
          Spread, Moneyline and Total
        </h1>

        {/* Intro */}
        <p className="text-gray-300 mb-4">
          Sports betting combines excitement, strategy, and knowledge. Whether
          you’re a beginner or looking to improve, understanding the
          basics—lines, underdogs, favorites, spread, moneyline, and totals—will
          give you a solid foundation for smart wagering.
        </p>

        <p className="text-gray-300 mb-8">
          At an{" "}
          <a
            href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            online trusted casino
          </a>
          , these betting concepts become easy to follow. This guide explains
          each element and provides tips for making informed, strategic bets.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mb-3">1. Setting the Line</h2>
        <p className="text-gray-300 mb-3">
          The line represents the odds or point spread set by sportsbooks. It
          balances betting action and indicates expected outcomes.
        </p>

        <p className="font-semibold mb-2">Key Points</p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>
            Lines are set by oddsmakers based on team performance, injuries, and
            statistics
          </li>
          <li>The goal is to attract equal betting on both sides</li>
          <li>Lines may shift as money is placed</li>
        </ul>

        <p className="text-gray-300 mb-8">
          Understanding the line is essential to identify value bets.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mb-3">
          2. Underdogs vs Favorites
        </h2>
        <p className="text-gray-300 mb-3">
          Every game has a favorite (expected to win) and an underdog (less
          likely to win).
        </p>

        <p className="font-semibold mb-2">Key Points</p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>
            Favorites often have lower payouts due to higher probability of
            winning
          </li>
          <li>Underdogs offer higher payouts but higher risk</li>
          <li>Smart betting looks for value, not just who is likely to win</li>
          <li>
            Betting on underdogs can be rewarding if your analysis identifies a
            favorable edge
          </li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mb-3">
          3. Understanding the Spread
        </h2>
        <p className="text-gray-300 mb-3">
          The spread is used to even the playing field between teams of
          differing skill levels.
        </p>

        <p className="text-gray-300 mb-3">Example</p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>Team A: -7 (favorite)</li>
          <li>Team B: +7 (underdog)</li>
        </ul>

        <p className="text-gray-300 mb-4">
          Team A must win by more than 7 points for a bet on them to win, while
          Team B can win the bet by losing within 7 points or winning outright.
        </p>

        <p className="font-semibold mb-2">Tips</p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>Analyze team performance against spreads</li>
          <li>
            Avoid betting emotionally on a favorite without checking the spread
          </li>
        </ul>

        <p className="text-gray-300 mb-8">
          The spread encourages strategic thinking and more balanced betting.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mb-3">4. Moneyline Betting</h2>
        <p className="text-gray-300 mb-3">
          Moneyline betting is straightforward: you pick the winner of the game.
        </p>

        <p className="font-semibold mb-2">Key Points</p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>No point spread is involved</li>
          <li>Odds indicate payout potential</li>
          <li>Favorites have smaller payouts; underdogs pay more</li>
          <li>
            Moneyline bets are ideal for beginners due to simplicity, but value
            assessment is key
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mb-3">
          5. Total (Over/Under) Bets
        </h2>
        <p className="text-gray-300 mb-3">
          Total bets, or over/under, involve predicting whether the combined
          score of both teams exceeds or falls below a set number.
        </p>

        <p className="text-gray-300 mb-3">Example</p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>Total line: 45 points</li>
          <li>Bet “Over” if you expect more than 45 points</li>
          <li>Bet “Under” if you expect fewer</li>
        </ul>

        <p className="text-gray-300 mb-8">
          Totals allow for betting strategies independent of which team wins.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mb-3">
          6. Combining Betting Options
        </h2>
        <p className="text-gray-300 mb-3">
          Experienced bettors often combine moneyline, spread, and totals in
          <a
            href="https://en.wikipedia.org/wiki/Parlay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            parlays
          </a>
          or multiple bets for increased potential payouts.
        </p>

        <p className="font-semibold mb-2">Tips</p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>Avoid combining too many outcomes at first</li>
          <li>Analyze value in each leg separately</li>
          <li>Maintain discipline and bankroll management</li>
        </ul>

        <p className="text-gray-300 mb-8">
          Combining options strategically can maximize entertainment and
          potential rewards.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mb-3">7. Importance of Odds</h2>
        <p className="text-gray-300 mb-3">
          <a
            href="https://a2k.fun/blog/rtp-decoded-guide-slot-machine-success/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Odds
          </a>
          determine both potential payout and implied probability.
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>
            Decimal odds: multiply your stake by the odds to calculate payout
          </li>
          <li>Fractional odds: traditional in some regions (e.g., 5/1)</li>
          <li>Moneyline odds: used in the U.S. (+200, -150)</li>
        </ul>

        <p className="text-gray-300 mb-8">
          Understanding odds allows you to make informed choices and identify
          favorable bets.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mb-3">
          8. Bankroll Management in Sports Betting
        </h2>
        <p className="text-gray-300 mb-3">
          Effective bankroll management ensures long-term success:
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>Allocate a specific betting budget</li>
          <li>Bet a small percentage per game (e.g., 1–5%)</li>
          <li>Avoid chasing losses</li>
          <li>Track wins and losses</li>
        </ul>

        <p className="text-gray-300 mb-8">
          Even small, consistent bets improve your long-term experience and
          enjoyment.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mb-3">
          9. Leverage Online Tools
        </h2>
        <p className="text-gray-300 mb-3">
          Online casinos provide resources to improve strategic betting:
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>Live stats and scores</li>
          <li>Real-time odds comparison</li>
          <li>Predictive analytics tools</li>
          <li>Parlay and system bet calculators</li>
        </ul>

        <p className="text-gray-300 mb-8">
          Playing on the{" "}
          <a
            href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Best platform to play casino games
          </a>
          in India makes these tools easily accessible for informed wagers.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mb-3">
          10. Key Takeaways for Beginners
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-1">
          <li>Study the line, spreads, and odds before betting</li>
          <li>Understand favorites, underdogs, and totals</li>
          <li>Manage bankroll effectively</li>
          <li>Avoid emotional betting and chasing losses</li>
          <li>Utilize online resources for smarter wagering</li>
        </ul>

        <p className="text-gray-300 mb-8">
          Sports betting is a combination of excitement and skill, and knowledge
          is your best ally.
        </p>

        <section className="mt-10">
          <h3 className="text-3xl font-bold text-[#FFF4C2] mb-4">FAQs</h3>
          <div className="space-y-4 mb-10">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`text-[#FFF4C2] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-3 text-gray-300">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Blog47;
