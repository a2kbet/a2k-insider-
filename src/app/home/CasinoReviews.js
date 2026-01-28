"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  { name: "Rohit Sharma", text: "Ace2King gave me the best casino experience online. Smooth gameplay and great bonuses! The interface is clean and easy to use, making it enjoyable every time I log in." },
  { name: "Sophia Williams", text: "I love how easy it is to deposit and withdraw. The platform feels very secure, and the whole process is quick, which makes playing even more fun." },
  { name: "Arjun Mehta", text: "The live games feel so real. Dealers are professional and the interface is top-notch. It truly gives the vibe of a premium casino experience." },
  { name: "Isabella Garcia", text: "Super fun and addictive! The slots are my favorite, and the rewards are amazing. Every spin feels exciting and worth playing." },
  { name: "Kabir Singh", text: "Excellent app for casual players. I enjoy playing during my free time, and there’s always something new to try out every week." },
  { name: "Liam Johnson", text: "Ace2King is way better than most casinos I’ve tried. The UI is very user-friendly and works smoothly on both desktop and mobile." },
  { name: "Priya Desai", text: "Customer support is very responsive. They helped me solve my issue in minutes, which really boosted my trust in the platform." },
  { name: "Ethan Brown", text: "Withdrawals are quick and hassle-free. Trustworthy casino for sure, and one of the most reliable platforms I’ve played on." },
  { name: "Ananya Gupta", text: "I joined for fun but ended up staying because of the amazing offers and games. The platform keeps things exciting and fresh." },
];

const CasinoReviews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-[#1a1b1b] text-white flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] mb-12 text-center">
        Casino Reviews
      </h2>

      {/* Reviews Slider */}
      <div className="w-full max-w-7xl relative">
        {/* Custom Arrows */}
        <button
          ref={prevRef}
          className="absolute left-2 sm:-left-8 lg:-left-14 top-1/2 -translate-y-1/2 z-10 bg-[#2e2e30] p-3 rounded-full shadow-lg hover:bg-gradient-to-t hover:from-[#FFF4C2] hover:to-[#DAA520] transition"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 sm:-right-8 lg:-right-14 top-1/2 -translate-y-1/2 z-10 bg-[#2e2e30] p-3 rounded-full shadow-lg hover:bg-gradient-to-t hover:from-[#FFF4C2] hover:to-[#DAA520] transition"
        >
          <FaChevronRight className="text-white text-xl" />
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex justify-center px-2">
              <div className="w-full h-56 flex flex-col justify-between bg-gradient-to-br from-[#1c1c1e] to-[#2e2e30] border border-yellow-500/30 rounded-xl p-6 shadow-lg text-center">
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520]">“</span>
                  {review.text}
                  <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520]">”</span>
                </p>
                <h4 className="text-base sm:text-lg font-semibold text-yellow-400 mt-3">
                  - {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CasinoReviews;
