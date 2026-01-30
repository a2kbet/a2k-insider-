import React from "react";

const HowToDepositOnePay = () => {
  return (
    <section className="w-full h-[85vh] bg-white text-black flex items-center justify-center px-6 md:px-30">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-6xl mb-6 font-bold text-black">
            How to Deposit using 1 Pay
          </h1>

          <p className="text-lg text-black/70 mb-8 max-w-md">
            Learn how to instantly deposit funds into your Ace2King wallet using
            the secure and fast OnePay method.
          </p>

          <a
            href="https://www.a2k.bet/signUp?pid=topvip"
            className="bg-black text-white font-medium py-3 px-8 rounded-xl border border-black hover:bg-white hover:text-black transition"
          >
            Deposit Now
          </a>
        </div>

        {/* RIGHT VIDEO */}
        <div className="flex justify-center md:justify-end">
          <video
            className="h-[480px] md:h-[580px] rounded-2xl border border-black/10"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/1PAY.mp4" type="video/mp4" />
            Your browser does not support video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HowToDepositOnePay;
