// pages/slots-guide.js
import Head from "next/head";

const SlotsGuide = () => {
  return (
    <div className="min-h-screen bg-[#1a1b1b] text-white px-6 py-10">
      <Head>
        <title>How to Play Online Slots – Ace2King Casino Guide</title>
        <meta
          name="description"
          content="Learn how to play online slots at Ace2King Casino. Step-by-step guide on entering the lobby, depositing funds, choosing your game, and spinning to win big!"
        />
        <meta
          name="keywords"
          content="Ace2King, online slots, casino guide, slot games, how to play slots, deposit, jackpots"
        />
      </Head>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
        How to Play Online Slots
      </h1>

      {/* Intro */}
      <p className="text-gray-300 text-lg md:text-xl max-w-5xl mx-auto text-center mb-10 leading-relaxed">
        Playing{" "}
        <span className="text-yellow-300 font-semibold">online slots</span> at{" "}
        <span className="text-yellow-300 font-semibold">Ace2King Casino</span>{" "}
        is simple, fun, and rewarding. Follow this quick start guide to learn
        how to join, deposit, choose your favorite slot, and start spinning for
        exciting wins.
      </p>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 gap-5 max-w-7xl mx-auto">
        {/* Step 1 */}
        <div className="bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img
            src="/images/SS1.png"
            alt="Enter the Lobby"
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold text-yellow-300 mb-3 text-center">
            Step 1: Enter the Lobby
          </h2>
          <p className="text-gray-400 text-base text-center">
            Sign up or log in to your{" "}
            <span className="text-yellow-300 font-semibold">Ace2King</span>{" "}
            account. Once inside, head to the slots section and explore the wide
            range of exciting video slot games available.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img
            src="/images/SS2.png"
            alt="Deposit Funds"
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold text-yellow-300 mb-3 text-center">
            Step 2: Deposit & Transfer
          </h2>
          <p className="text-gray-400 text-base text-center">
            Add funds to your wallet using{" "}
            <span className="text-yellow-300 font-semibold">
              secure deposit options
            </span>
            . Transfer your balance to the slot game section to start playing
            instantly.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img
            src="/images/SS3.png"
            alt="Choose Slot Game"
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold text-yellow-300 mb-3 text-center">
            Step 3: Choose Your Game
          </h2>
          <p className="text-gray-400 text-base text-center">
            Pick from{" "}
            <span className="text-yellow-300 font-semibold">hundreds of slots</span>{" "}
            – from classic reels to modern video slots. Enjoy unique themes,
            free spins, and bonus features that enhance your gameplay.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img
            src="/images/SS4.png"
            alt="Start Playing"
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold text-yellow-300 mb-3 text-center">
            Step 4: Spin & Win
          </h2>
          <p className="text-gray-400 text-base text-center">
            Enter your selected slot, place your bets, and hit spin! Experience
            the thrill of{" "}
            <span className="text-yellow-300 font-semibold">
              jackpots, rewards, and non-stop excitement
            </span>{" "}
            at Ace2King Casino.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlotsGuide;
