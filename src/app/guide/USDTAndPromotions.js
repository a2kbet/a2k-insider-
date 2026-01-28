"use client";

import React from "react";

const USDTAndPromotions = () => {
    return (
        <div className="bg-[#1a1b1b] text-white font-poppins">
            {/* Page Heading */}
            <header className="text-center px-4 py-8">
                <h1 className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
                    USDT Deposit & Promotions Guide
                </h1>
                <p className="text-gray-400 text-lg mt-4 max-w-7xl mx-auto">
                    Quick guide to{" "}
                    <span className="text-yellow-300 font-semibold">depositing with USDT</span> and{" "}
                    <span className="text-yellow-300 font   semibold">claiming promotions</span> on{" "}
                    <span className="text-yellow-300 font-semibold">Ace2King Casino</span>.
                    Securely fund your wallet and enjoy bonuses with ease.
                </p>

            </header>

            {/* Two Column Layout */}
            <main className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 pb-12">

                {/* USDT Deposit Section */}
                <section
                    className="p-6 rounded-xl border border-yellow-500 bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] shadow-md"
                    aria-labelledby="usdt-title"
                >
                    <h2
                        id="usdt-title"
                        className="text-3xl text-center font-semibold mb-6 bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
                    >
                        How to Deposit with USDT
                    </h2>
                    <ol className="space-y-4 list-decimal list-inside text-gray-300 text-lg leading-relaxed">
                        <li>Log in to your <span className="text-yellow-300 font-semibold">Ace2King</span> account.</li>
                        <li>Go to the <span className="text-yellow-300 font-semibold">Deposit</span> section in your account.</li>
                        <li>Select <span className="text-yellow-300 font-semibold">Crypto (USDT)</span> as your payment option.</li>
                        <li>Copy the <span className="text-yellow-300 font-semibold">wallet address</span> shown on screen.</li>
                        <li>Open your crypto wallet (e.g., Binance, TrustWallet, MetaMask).</li>
                        <li>Transfer the desired amount of <span className="text-yellow-300 font-semibold">USDT</span> to the copied address.</li>
                        <li>Confirm the transfer — funds will appear in your <span className="text-yellow-300 font-semibold">Ace2King wallet</span>.</li>
                    </ol>
                </section>

                {/* Promotions Section */}
                <section
                    className="p-6 rounded-xl border border-yellow-500 bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] shadow-md"
                    aria-labelledby="promo-title"
                >
                    <h2
                        id="promo-title"
                        className="text-3xl text-center font-semibold mb-6 bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
                    >
                        How to Use Promotions 
                    </h2>
                    <ol className="space-y-4 list-decimal list-inside text-gray-300 text-lg leading-relaxed">
                        <li>Log in to your <span className="text-yellow-300 font-semibold">Ace2King</span> account.</li>
                        <li>Navigate to the <span className="text-yellow-300 font-semibold">Promotions</span> page.</li>
                        <li>Choose your bonus (e.g., <span className="text-yellow-300 font-semibold">100% Welcome Bonus</span>).</li>
                        <li>Enter a <span className="text-yellow-300 font-semibold">promo code</span> if required.</li>
                        <li>Complete your deposit — the bonus will be applied <span className="text-yellow-300 font-semibold">automatically</span>.</li>
                        <li>Enjoy extra funds and start playing instantly!</li>
                        <li>Check <span className="text-yellow-300 font-semibold">bonus terms & wagering requirements</span> to maximize your rewards.</li>
                    </ol>
                </section>
            </main>

        </div>
    );
};

export default USDTAndPromotions;
