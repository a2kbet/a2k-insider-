"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaGlobe,
  FaMobileAlt,
  FaGamepad,
  FaInfoCircle,
  FaQuestionCircle,
  FaLifeRing,
} from "react-icons/fa";

// Logos for Game Brand Slider
const logos = [
  {
    alt: "W9",
    src: "https://download.ocms.cloud/v2/a2k/Platform.72.3?version=0",
  },
  {
    alt: "SPB",
    src: "https://download.ocms.cloud/v2/a2k/Platform.125.3?version=0",
  },
  {
    alt: "EVO",
    src: "https://download.ocms.cloud/v2/common/Platform.40.3?version=0",
  },
  {
    alt: "JILIV2",
    src: "https://download.ocms.cloud/v2/a2k/Platform.110.3.png?version=0",
  },
  {
    alt: "EVOPLAY",
    src: "https://download.ocms.cloud/v2/a2k/Platform.81.3?version=0",
  },
  {
    alt: "SA",
    src: "https://download.ocms.cloud/v2/common/Platform.11.3?version=1533620968",
  },
  {
    alt: "HBN",
    src: "https://download.ocms.cloud/v2/a2k/Platform.15.3?version=1533620938",
  },
  {
    alt: "SEXY",
    src: "https://download.ocms.cloud/v2/a2k/Platform.22.3?version=1533620918",
  },
  {
    alt: "SV388",
    src: "https://download.ocms.cloud/v2/a2k/Platform.33.3?version=1533620900",
  },
  {
    alt: "T1",
    src: "https://download.ocms.cloud/v2/a2k/Platform.68.3?version=0",
  },
  {
    alt: "R88",
    src: "https://download.ocms.cloud/v2/a2k/Platform.29.3?version=1533620894",
  },
  {
    alt: "PS",
    src: "https://download.ocms.cloud/v2/a2k/Platform.42.3?version=1533620975",
  },
  {
    alt: "R88C",
    src: "https://download.ocms.cloud/v2/a2k/Platform.29.3?version=1533620894",
  },
  {
    alt: "SV3882",
    src: "https://download.ocms.cloud/v2/a2k/Platform.33.3?version=1533620900",
  },
  {
    alt: "SEXY2",
    src: "https://download.ocms.cloud/v2/a2k/Platform.22.3?version=1533620918",
  },
  {
    alt: "HBN2",
    src: "https://download.ocms.cloud/v2/a2k/Platform.15.3?version=1533620938",
  },
  {
    alt: "SA2",
    src: "https://download.ocms.cloud/v2/common/Platform.11.3?version=1533620968",
  },
  {
    alt: "EVOPLAY2",
    src: "https://download.ocms.cloud/v2/a2k/Platform.81.3?version=0",
  },
  {
    alt: "JILIV22",
    src: "https://download.ocms.cloud/v2/a2k/Platform.110.3.png?version=0",
  },
  {
    alt: "EVO2",
    src: "https://download.ocms.cloud/v2/common/Platform.40.3?version=0",
  },
  {
    alt: "SPB2",
    src: "https://download.ocms.cloud/v2/a2k/Platform.125.3?version=0",
  },
  {
    alt: "W92",
    src: "https://download.ocms.cloud/v2/a2k/Platform.72.3?version=0",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-6 gap-8 border-b border-yellow-500/30">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start md:col-span-2">
          <img
            src="/images/ACE2KING.webp"
            alt="ACE2KING Logo"
            className="h-20 object-contain w-auto mb-4"
          />

          <p className="text-white/85 text-center text-base md:text-lg leading-relaxed max-w-xl">
            Experience premium gaming with fairness, safety, and excitement.
          </p>
        </div>

        {/* App Download */}
        <div className="w-full md:w-[80%]">
          <h3 className="text-xl font-bold text-yellow-300 mb-3">
            App Download
          </h3>
          <ul className="space-y-2 text-base text-white/90">
            <a href="https://www.a2k.bet/download">
              <li className="flex items-center gap-3 mb-2 hover:text-yellow-400 transition">
                <FaMobileAlt size={18} /> iOS App
              </li>
            </a>
            <a href="https://www.a2k.bet/download">
              <li className="flex items-center gap-3 hover:text-yellow-400 transition">
                <FaMobileAlt size={18} /> Android App
              </li>
            </a>
          </ul>
        </div>

        {/* Information */}
        <div className="w-full md:w-[80%]">
          <h3 className="text-xl font-bold text-yellow-300 mb-3">
            Information
          </h3>
          <ul className="space-y-2 text-base text-white/90">
            <a href="https://www.a2k.bet/footerpage/aboutUs">
              <li className="flex items-center gap-3 hover:text-yellow-400 transition">
                <FaInfoCircle size={18} /> About Us
              </li>
            </a>
            <a href="https://www.a2k.bet/footerpage/commonQuestion">
              <li className="flex items-center gap-3 hover:text-yellow-400 transition">
                <FaQuestionCircle size={18} /> FAQ
              </li>
            </a>
            <a href="https://www.a2k.bet/footerpage/gamingRule">
              <li className="flex items-center gap-3 hover:text-yellow-400 transition">
                <FaGamepad size={18} /> General Rules
              </li>
            </a>
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <FaLifeRing size={18} /> Support
            </li>
          </ul>
        </div>

        {/* Games */}
        <div className="w-full md:w-[80%]">
          <h3 className="text-xl font-bold text-yellow-300 mb-3">Games</h3>
          <ul className="space-y-2 text-base text-white/90">
            <a href="https://www.a2k.bet/livegame">
              <li className="hover:text-yellow-400 transition">Live Game</li>
            </a>
            <a href="https://www.a2k.bet/slotgame">
              <li className="hover:text-yellow-400 transition">Slot Game</li>
            </a>
            <a href="https://www.a2k.bet/sportgame">
              <li className="hover:text-yellow-400 transition">Sport Game</li>
            </a>
            <a href="https://www.a2k.bet/fishergame">
              <li className="hover:text-yellow-400 transition">Fishing Game</li>
            </a>
            <a href="https://www.a2k.bet/cockfightinggame">
              <li className="hover:text-yellow-400 transition">
                Cock Fighting
              </li>
            </a>
            <a href="https://www.a2k.bet/othergame">
              <li className="hover:text-yellow-400 transition">Other Games</li>
            </a>
          </ul>
        </div>

        <div className="w-full md:w-[80%]">
          <h3 className="text-xl font-bold text-yellow-300 mb-3">Follow Us</h3>
          <ul className=" text-base text-white/90">
            <a href="https://www.instagram.com/a2k.bet?igsh=ZGR3cHlka2JhMzRt">
              <li className="flex mb-2 items-center gap-3 hover:text-yellow-400 transition">
                <FaInstagram className="text-pink-500" size={18} /> Instagram
              </li>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100091618486203">
              <li className="flex mb-2 items-center gap-3 hover:text-yellow-400 transition">
                <FaFacebookF className="text-blue-500" size={18} /> Facebook
              </li>
            </a>
            <a href="https://t.me/a2kbetcsk">
              <li className="flex mb-2 items-center gap-3 hover:text-yellow-400 transition">
                <FaTelegramPlane className="text-sky-400" size={18} /> Telegram
              </li>
            </a>
            <a href="https://www.a2k.bet/">
              <li className="flex mb-2 items-center gap-3 hover:text-yellow-400 transition">
                <FaGlobe size={18} /> Website
              </li>
            </a>
          </ul>
        </div>
      </div>

      {/* Licence & Responsible Gaming */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-6 border-b border-yellow-500/30">
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-3">
            Gaming Licence
          </h3>
          <div className="flex gap-4">
            <img
              src="/images/LICENCE1.svg"
              alt="Gaming Licence 1"
              className="h-16 p-2 object-contain rounded"
            />
            <img
              src="/images/LICENCE2.svg"
              alt="Gaming Licence 2"
              className="h-16 p-2 object-contain rounded"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-3">
            Responsible Gaming
          </h3>
          <div className="flex gap-4">
            <img
              src="/images/RESPONSIBLE1.svg"
              alt="Responsible Gaming 1"
              className="h-16 p-2 object-contain rounded"
            />
            <img
              src="/images/RESPONSIBLE3.svg"
              alt="Responsible Gaming 3"
              className="h-16 p-2 object-contain rounded"
            />
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-white/90 text-base md:text-lg leading-relaxed border-b border-yellow-500/30">
        Headquartered in the business district of downtown Manila, OCMS
        Entertainment City is incorporated in the Philippines and holds a legal
        license for local government licenses. All games we launch must undergo
        rigorous review and monitoring by the Philippine Gaming Council, as well
        as through Macau and The GLI laboratory verification by the three-party
        impartial verification unit must provide customers with a credit
        guarantee and a fair and safe game environment as well as a refreshing
        visual sensory experience.
      </div>

      {/* Game Brand Slider (inside Footer) */}
      <div className="bg-black p-4 max-w-7xl mx-auto border-b border-yellow-500/30 flex justify-center">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000} // smooth continuous scroll
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          className="w-full max-w-6xl"
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-14 w-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center py-3 text-sm md:text-base">
        Copyright © ACE2KING. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
