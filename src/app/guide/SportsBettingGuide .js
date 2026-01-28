// pages/sports-betting-guide.js
import Head from "next/head";

const SportsBettingGuide = () => {
  return (
    <div className="min-h-screen bg-[#1a1b1b] text-white px-6 py-10">
      <Head>
        <title>How to Bet on Sports Events Online – Ace2King Casino</title>
        <meta
          name="description"
          content="Learn how to bet on sports events online at Ace2King Casino. Step-by-step guide to enter the sports lobby, deposit funds, pick sports, place bets, and enjoy live matches."
        />
        <meta
          name="keywords"
          content="Ace2King, sports betting, online betting guide, football, cricket, basketball, online casino, betting tips"
        />
      </Head>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
        How to Bet on Sports Events Online
      </h1>

      {/* Intro */}
      <p className="text-gray-300 text-lg md:text-xl max-w-5xl mx-auto text-center mb-10 leading-relaxed">
        Betting on{" "}
        <span className="text-yellow-300 font-semibold">sports events</span> at{" "}
        <span className="text-yellow-300 font-semibold">Ace2King Casino</span>{" "}
        is simple, exciting, and rewarding. Follow these easy steps to sign up,
        transfer funds, choose your sport, and start betting on your favorite
        teams today!
      </p>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 gap-5 max-w-7xl mx-auto">
        {[
          {
            img: "/images/SS1.png",
            title: "Step 1: Enter the Sports Lobby",
            desc: "Sign up or log in to your Ace2King account. Access the sports betting lobby to explore upcoming matches and platforms."
          },
          {
            img: "/images/SS2.png",
            title: "Step 2: Deposit & Transfer",
            desc: "Add funds to your main wallet and transfer balance to the sports betting section to start placing wagers instantly."
          },
          {
            img: "/images/SG3.png",
            title: "Step 3: Pick Your Sport",
            desc: "Choose from football, basketball, tennis, cricket, or baseball. All available events are updated live for your convenience."
          },
          {
            img: "/images/SG4.png",
            title: "Step 4: Choose Your Bet Type",
            desc: "Bet on the winning team, predict scores, or wager on special results like total goals or match outcomes."
          },
          {
            img: "/images/SG5.png",
            title: "Step 5: Set Your Wager",
            desc: "Decide the amount you want to invest. Choose your betting chips or enter a custom wager. Play smart and manage your bankroll wisely."
          },
          {
            img: "/images/SG6.png",
            title: "Step 6: Watch & Enjoy",
            desc: "Sit back and watch the live stream of your chosen game. Cheer for your team and enjoy the thrill of winning when your predictions come true!"
          }
        ].map((step, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-72 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold text-yellow-300 mb-3 text-center">
              {step.title}
            </h2>
            <p className="text-gray-400 text-base text-center">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsBettingGuide;
