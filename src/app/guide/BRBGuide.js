// pages/brb-guide.js
import Head from "next/head";

const BRBGuide = () => {
  const games = [
    {
      name: "Baccarat",
      img: "/images/BACCARAT.webp",
      tips: [
        "Bet on Banker for best odds.",
        "Skip Tie bets – low chance.",
        "Set a budget before playing.",
        "Play short sessions, not long.",
      ],
    },
    {
      name: "Roulette",
      img: "/images/ROULETTE.webp",
      tips: [
        "Pick European Roulette for better odds.",
        "Go for Red/Black or Odd/Even bets.",
        "Don’t chase losses, stay in control.",
        "Decide your limit before spinning.",
      ],
    },
    {
      name: "Blackjack",
      img: "/images/BLACKJACK.webp",
      tips: [
        "Use basic strategy to cut house edge.",
        "Always split Aces and 8s.",
        "Skip insurance bets – not worth it.",
        "Know when to hit, stand, or double.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black py-16 px-6">
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Ace2King Casino Tips – Baccarat, Roulette & Blackjack Guide
        </title>
        <meta
          name="description"
          content="Play Baccarat, Roulette, and Blackjack at Ace2King Casino. Get quick tips and strategies to bet smarter, manage your bankroll, and enjoy safe online gaming."
        />
        <meta
          name="keywords"
          content="Ace2King, casino tips, Baccarat tips, Roulette tips, Blackjack guide, online casino games"
        />
      </Head>

      {/* Top Heading */}
      <header>
        <h1 className="text-4xl md:text-6xl font-bold text-center text-black mb-6">
          Baccarat, Roulette & Blackjack Guide
        </h1>
      </header>

      {/* Intro */}
      <section>
        <p className="text-black/70 text-lg max-w-5xl mx-auto text-center mb-12 leading-relaxed">
          At <span className="font-semibold text-black">Ace2King</span>, you can
          enjoy top{" "}
          <span className="font-semibold text-black">casino games</span> like{" "}
          <strong>Baccarat</strong>, <strong>Roulette</strong>, and{" "}
          <strong>Blackjack</strong>. This guide gives you quick and easy{" "}
          <span className="font-semibold text-black">casino tips</span> to help
          you play smarter, manage money wisely, and enjoy a fun and safe online
          gaming experience.
        </p>
      </section>

      {/* Game Cards */}
      <section className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
        {games.map((game, i) => (
          <article
            key={i}
            className="bg-white rounded-2xl border border-black/10 p-6 transition flex flex-col justify-between"
          >
            <img
              src={game.img}
              alt={`${game.name} strategy and tips at Ace2King Casino`}
              className="w-full h-60 object-cover rounded-xl mb-4 border border-black/10"
            />
            <div className="flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold text-black mb-3 text-center">
                {game.name} Tips
              </h2>
              <ul className="list-disc list-inside text-black/70 space-y-2 text-sm md:text-lg">
                {game.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BRBGuide;
