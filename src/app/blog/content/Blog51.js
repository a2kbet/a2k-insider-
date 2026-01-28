"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is WBBL betting legal?",
    a: "It depends on your jurisdiction. Always check local laws and ensure you are using a licensed platform before betting.",
  },
  {
    q: "How do I find the best odds?",
    a: "The best way is to compare multiple betting platforms 3–4 hours before the match begins to catch the most stable and high-value lines.",
  },
  {
    q: "Which market is best for beginners?",
    a: "Match Winner, Top Batter, and Over/Under Runs markets are the most straightforward for those new to cricket betting.",
  },
  {
    q: "When is the best time to place live bets?",
    a: "The middle overs (10–15) often offer the highest-value odds as the game momentum starts to shift significantly.",
  },
  {
    q: "Do predictions guarantee wins?",
    a: "No prediction is 100% accurate, but using data-based insights and expert analysis significantly increases your long-term success rate.",
  },
];

const Blog51 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 text-gray-200">
      {/* Introduction */}
      <p>
        The Women’s Big Bash League (WBBL) has grown into one of the world’s most thrilling T20 leagues, attracting cricket lovers and bettors globally. With fast-paced matches and explosive batting, the WBBL offers exceptional value for bettors who know where to find the best odds.
      </p>

      <p>
        To maximize your wins this season, understanding team dynamics and data-backed predictions is key. Always choose a{" "}
        <a
          href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link"
          className="text-blue-500 hover:underline"
        >
          Trusted Casino online
        </a>{" "}
        to ensure your betting experience is secure and your returns are maximized.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl text-[#FFF4C2] font-semibold">
        Why WBBL Betting Is Becoming Popular
      </h2>
      <p>
        The rise of WBBL betting is driven by the league's high level of competition and market variety:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Competitive Teams:</strong> Every franchise features world-class international stars.</li>
        <li><strong>Unpredictability:</strong> Rapid momentum shifts provide high-value underdog odds.</li>
        <li><strong>Diverse Markets:</strong> From "Total Sixes" to "Powerplay Runs," the options are endless.</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-2xl text-[#FFF4C2] font-semibold">
        How to Find the Best WBBL Betting Odds
      </h2>
      <p>
        Finding value requires more than just picking a winner. Use these three professional steps:
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl text-[#FFF4C2] font-medium">1. Compare Odds Early</h3>
          <p>Even a slight difference in odds (e.g., 1.80 vs 1.92) can drastically impact your seasonal profit.</p>
        </div>
        <div>
          <h3 className="text-xl text-[#FFF4C2] font-medium">2. Master Live Betting</h3>
          <p>Watch for bowler-friendly conditions or key player injuries in real-time to catch the bookmakers off guard.</p>
        </div>
      </div>

      {/* Section 3 */}
      <h2 className="text-2xl text-[#FFF4C2] font-semibold">
        Top Predictions for the 2026 Season
      </h2>
      <p>Based on historical data, keep an eye on these consistent trends:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>All-Rounder Impact:</strong> Teams with players like Ellyse Perry and Ashleigh Gardner consistently over-perform.</li>
        <li><strong>The Toss Factor:</strong> Chasing teams generally have a higher win rate in evening matches due to dew and pitch conditions.</li>
        <li><strong>Venue Scores:</strong> Grounds like Hobart and Adelaide are historically high-scoring (145+ runs).</li>
      </ul>

      {/* Call to Action Section */}
      <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#FFF4C2]/20 text-center">
        <h2 className="text-2xl text-[#FFF4C2] font-bold mb-3">🔥 Ready for Big Wins?</h2>
        <p className="mb-4">Check today’s live WBBL odds and place your bets on India's most trusted platforms.</p>
        <a 
          href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link" 
          className="bg-[#FFF4C2] text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
        >
          Bet on WBBL Now
        </a>
      </div>

      {/* Strategy Section */}
      <h2 className="text-2xl text-[#FFF4C2] font-semibold">
        Smart Betting Strategies
      </h2>
      <p>
        Seasoned bettors avoid emotional attachment. Instead, they focus on the <strong>"Bowler Impact"</strong> prediction and target the <strong>Middle Overs (10-15)</strong> where the most significant betting value is found.
      </p>

      {/* FAQ Section */}
      <section className="mt-10">
        <h3 className="text-3xl font-bold text-[#FFF4C2] mb-4">WBBL FAQs</h3>
        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center bg-[#1a1a1a] hover:bg-[#252525] transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`text-[#FFF4C2] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-400 bg-[#121212]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog51;