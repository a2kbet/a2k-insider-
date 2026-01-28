// pages/texas-holdem-guide.js
import Head from "next/head";

const TexasHoldemGuide = () => {
  return (
    <div className="min-h-screen bg-[#1a1b1b] text-white font-poppins flex flex-col">
      <Head>
        <title>Texas Hold’em Poker Guide – Ace2King Casino Tips</title>
        <meta
          name="description"
          content="Learn Texas Hold’em Poker rules, gameplay flow, and winning strategies for Ace2King players. Master poker and improve your chances at online casino games."
        />
        <meta
          name="keywords"
          content="Texas Hold'em, Poker guide, Ace2King, Poker strategies, online casino, Texas Hold'em rules"
        />
      </Head>

      {/* ================= Heading ================= */}
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          Texas Hold’em Poker Guide
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-6xl mx-auto leading-relaxed">
          Welcome to the ultimate{" "}
          <span className="text-yellow-300 font-semibold">Texas Hold’em Poker</span>{" "}
          guide for <span className="text-yellow-300 font-semibold">Ace2King</span> players.
          Learn the rules, understand gameplay flow, and discover winning strategies to master poker
          and increase your chances of success.
        </p>
      </header>

      {/* ================= First Half ================= */}
      <section className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-6 items-stretch">
        {/* Left - Image */}
        <div className="flex">
          <img
            src="/images/TexasHoldemIntro.webp"
            alt="Texas Hold'em Poker Introduction Ace2King"
            className="rounded-xl shadow-lg w-full object-cover border border-yellow-500"
          />
        </div>

        {/* Right - Basic Rules */}
        <article className="p-8 rounded-xl border border-yellow-500 bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] shadow-md flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">
            🎯 Basic Texas Hold’em Rules
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg md:text-xl leading-relaxed">
            <li>Each player is dealt 2 private cards (hole cards).</li>
            <li>5 community cards are revealed in 3 rounds: Flop, Turn, River.</li>
            <li>Players must form the best 5-card combination to win.</li>
            <li>Betting rounds occur before and after each reveal.</li>
            <li>Game uses blinds (small & big) instead of antes.</li>
            <li>Dealer position rotates clockwise each hand.</li>
            <li>Bet limits depend on the table type.</li>
            <li>Players may fold, call, raise, or check during their turn.</li>
          </ul>
        </article>
      </section>

      {/* ================= Second Half ================= */}
      <section className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 py-10 items-start">
        {/* Left (40%) - Screenshot */}
        <div className="lg:col-span-5 flex">
          <img
            src="/images/TexasHoldemSS.jpg"
            alt="Ace2King Texas Hold'em Poker Gameplay"
            className="rounded-xl shadow-lg w-full object-top object-cover max-h-[790px]"
          />
        </div>

        {/* Right (60%) - Gameplay Flow + Strategies */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Gameplay Flow */}
          <article className="p-8 rounded-xl border border-yellow-500 bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] shadow-md">
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">
              🃏 Texas Hold’em Gameplay Flow
            </h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 text-lg md:text-xl leading-relaxed">
              <li><strong>Blinds:</strong> Small blind & big blind are posted.</li>
              <li><strong>Hole Cards:</strong> Each player receives 2 cards.</li>
              <li><strong>Flop:</strong> 3 community cards are revealed.</li>
              <li><strong>Turn:</strong> 1 more card is revealed.</li>
              <li><strong>River:</strong> Final community card is revealed.</li>
              <li><strong>Showdown:</strong> Best 5-card hand wins the pot.</li>
            </ol>
          </article>

          {/* Strategies */}
          <article className="p-8 rounded-xl border border-yellow-500 bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] shadow-md">
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">
              🧠 Winning Poker Strategies for Ace2King Players
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg md:text-xl leading-relaxed">
              <li>Play strong starting hands (pairs, high cards, suited connectors).</li>
              <li>Pay attention to opponents’ betting patterns.</li>
              <li>Don’t bluff too often — bluff smartly.</li>
              <li>Use position wisely; late positions have more advantage.</li>
              <li>Adjust strategy based on stack size and blind levels.</li>
              <li>Manage your bankroll — never risk too much in one game.</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default TexasHoldemGuide;
