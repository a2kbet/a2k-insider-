import React from "react";

const HowToRegister = () => {
  return (
    <section className="w-full h-[85vh] bg-white text-black flex items-center justify-center px-6 md:px-30">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-6xl mb-6 font-bold text-black">
            How to Register on Ace2King
          </h1>

          <p className="text-lg text-black/70 mb-8 max-w-md">
            Create your account in seconds and start playing your favourite
            casino games anytime, anywhere.
          </p>

          <a
            href="https://www.a2k.bet/signUp?pid=topvip"
            className="bg-black text-white font-medium py-3 px-8 rounded-xl border border-black hover:bg-white hover:text-black transition"
          >
            Register Now
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <video
            className="h-[480px] md:h-[580px] rounded-2xl border border-black/10"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/HOWTOREGISTER.mp4" type="video/mp4" />
            Your browser does not support video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HowToRegister;
