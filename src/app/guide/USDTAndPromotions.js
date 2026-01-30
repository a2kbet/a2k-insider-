"use client";

import React from "react";

const USDTAndPromotions = () => {
  return (
    <div className="bg-white text-black font-poppins">
      {/* Page Heading */}
      <header className="text-center px-4 py-8">
        <h1 className="text-3xl md:text-6xl font-bold text-black">
          USDT Deposit & Promotions Guide
        </h1>
        <p className="text-black/70 text-lg mt-4 max-w-7xl mx-auto">
          Quick guide to{" "}
          <span className="font-semibold text-black">depositing with USDT</span>{" "}
          and{" "}
          <span className="font-semibold text-black">claiming promotions</span>{" "}
          on <span className="font-semibold text-black">Ace2King Casino</span>.
          Securely fund your wallet and enjoy bonuses with ease.
        </p>
      </header>

      {/* Two Column Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 pb-12">
        {/* USDT Deposit Section */}
        <section
          className="p-6 rounded-xl border border-black/10 bg-white"
          aria-labelledby="usdt-title"
        >
          <h2
            id="usdt-title"
            className="text-3xl text-center font-semibold mb-6 text-black"
          >
            How to Deposit with USDT
          </h2>
          <ol className="space-y-4 list-decimal list-inside text-black/70 text-lg leading-relaxed">
            <li>
              Log in to your{" "}
              <span className="font-semibold text-black">Ace2King</span>{" "}
              account.
            </li>
            <li>
              Go to the{" "}
              <span className="font-semibold text-black">Deposit</span> section
              in your account.
            </li>
            <li>
              Select{" "}
              <span className="font-semibold text-black">Crypto (USDT)</span> as
              your payment option.
            </li>
            <li>
              Copy the{" "}
              <span className="font-semibold text-black">wallet address</span>{" "}
              shown on screen.
            </li>
            <li>
              Open your crypto wallet (e.g., Binance, TrustWallet, MetaMask).
            </li>
            <li>
              Transfer the desired amount of{" "}
              <span className="font-semibold text-black">USDT</span> to the
              copied address.
            </li>
            <li>
              Confirm the transfer — funds will appear in your{" "}
              <span className="font-semibold text-black">Ace2King wallet</span>.
            </li>
          </ol>
        </section>

        {/* Promotions Section */}
        <section
          className="p-6 rounded-xl border border-black/10 bg-white"
          aria-labelledby="promo-title"
        >
          <h2
            id="promo-title"
            className="text-3xl text-center font-semibold mb-6 text-black"
          >
            How to Use Promotions
          </h2>
          <ol className="space-y-4 list-decimal list-inside text-black/70 text-lg leading-relaxed">
            <li>
              Log in to your{" "}
              <span className="font-semibold text-black">Ace2King</span>{" "}
              account.
            </li>
            <li>
              Navigate to the{" "}
              <span className="font-semibold text-black">Promotions</span> page.
            </li>
            <li>
              Choose your bonus (e.g.,{" "}
              <span className="font-semibold text-black">
                100% Welcome Bonus
              </span>
              ).
            </li>
            <li>
              Enter a{" "}
              <span className="font-semibold text-black">promo code</span> if
              required.
            </li>
            <li>
              Complete your deposit — the bonus will be applied{" "}
              <span className="font-semibold text-black">automatically</span>.
            </li>
            <li>Enjoy extra funds and start playing instantly!</li>
            <li>
              Check{" "}
              <span className="font-semibold text-black">
                bonus terms & wagering requirements
              </span>{" "}
              to maximize your rewards.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
};

export default USDTAndPromotions;
