"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Tournaments = () => {
  return (
    <div className="bg-white text-black py-16 px-6">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-black">
        Popular Tournaments
      </h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch max-w-[1400px] mx-auto">
        {/* Cricket Card */}
        <div className="bg-white p-6 rounded-xl w-full md:w-[48%] border border-black/10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src="/images/WC.webp"
                alt="World Cup"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/IPL.avif"
                alt="IPL"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
          <p className="text-center text-lg text-black/70 mt-10 leading-relaxed">
            Enjoy thrilling cricket action with{" "}
            <span className="font-semibold text-black">Ace2King</span>. From the
            Cricket World Cup to IPL, place your bets, enjoy live action, and
            win big rewards while cheering for your favorite teams.
          </p>
        </div>

        {/* Football Card */}
        <div className="bg-white p-6 rounded-xl w-full md:w-[48%] border border-black/10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src="/images/FIFA.webp"
                alt="FIFA"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/CL.jpg"
                alt="Champions League"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
          <p className="text-center text-lg text-black/70 mt-10 leading-relaxed">
            Bet on top football tournaments like FIFA and Champions League with{" "}
            <span className="font-semibold text-black">Ace2King</span>.
            Experience the thrill, follow live scores, and turn your predictions
            into big cash prizes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
