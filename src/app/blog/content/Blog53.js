"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, PlayCircle, ShieldCheck, Zap, Star } from "lucide-react";

const faqs = [
  {
    q: "Which is the best live casino platform—EVO, Sexy, or EZ Live?",
    a: "It depends on your style. EVO is the gold standard for innovation, Sexy Live is great for a fun social atmosphere, and EZ Live is perfect for those who want fast, simple betting.",
  },
  {
    q: "Do these live casino games offer real-money winnings?",
    a: "Yes, all games including Baccarat, Roulette, Teen Patti, Andar Bahar, and Dragon Tiger support real-money wagering.",
  },
  {
    q: "Are these live dealer platforms safe?",
    a: "Yes, EVO, Sexy, and EZ Live are licensed, globally trusted, and regularly audited to ensure transparent and fair play.",
  },
  {
    q: "Can Indian players join these live games?",
    a: "Absolutely! These platforms feature many games specifically popular in India, such as Teen Patti, Andar Bahar, and various Roulette variants.",
  },
  {
    q: "What do I need to start playing?",
    a: "All you need is a stable internet connection, a registered account on a trusted platform, and a secure deposit method.",
  },
];

const Blog53 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!mounted) return null;

  return (
    <article className="max-w-5xl mx-auto px-4 py-12 text-gray-200">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-[#FFF4C2] mb-6 tracking-tight">
          Live Casino Madness: EVO, Sexy & EZ Live Games
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Experience the ultimate fusion of HD streaming, real dealers, and high-volatility action with the industry's leading live studios.
        </p>
        
        <div className="relative w-full h-[300px] md:h-[500px] mt-10 rounded-3xl overflow-hidden border-4 border-[#FFF4C2]/10 shadow-2xl">
          <Image
            src="/images/blog53.png"
            alt="Live Casino Gaming Action"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </header>

      {/* Intro Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: <PlayCircle className="text-red-500" />, text: "HD Real-Time Streams" },
          { icon: <ShieldCheck className="text-green-500" />, text: "Fair Play Certified" },
          { icon: <Zap className="text-yellow-500" />, text: "Instant Interaction" },
        ].map((item, i) => (
          <div key={i} className="bg-[#111] p-6 rounded-2xl flex items-center gap-4 border border-gray-800">
            {item.icon}
            <span className="font-bold text-lg">{item.text}</span>
          </div>
        ))}
      </div>

      {/* EVO Section */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-[#FFF4C2] flex items-center gap-2">
              <Star className="fill-yellow-500 text-yellow-500" /> EVO Live: The Gold Standard
            </h2>
            <p className="text-gray-400 text-lg">
              Known for world-class production, EVO (Evolution Gaming) is the undisputed king. From Lightning multipliers to massive game shows, it blends luxury with high-speed excitement.
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-800">⚡ Lightning Baccarat</li>
              <li className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-800">🎡 Crazy Time</li>
              <li className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-800">🃏 Teen Patti Live</li>
              <li className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-800">🎰 Lightning Roulette</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-20 overflow-hidden rounded-2xl border border-gray-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FFF4C2] text-black font-bold">
              <th className="p-4">Feature</th>
              <th className="p-4">EVO Live</th>
              <th className="p-4">Sexy Live</th>
              <th className="p-4">EZ Live</th>
            </tr>
          </thead>
          <tbody className="bg-[#0a0a0a]">
            <tr className="border-b border-gray-800">
              <td className="p-4 font-bold">Game Variety</td>
              <td className="p-4 text-gray-400">Extremely High</td>
              <td className="p-4 text-gray-400">Medium</td>
              <td className="p-4 text-gray-400">Medium</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 font-bold">Vibe</td>
              <td className="p-4 text-gray-400">Premium Luxury</td>
              <td className="p-4 text-gray-400">Social & Fun</td>
              <td className="p-4 text-gray-400">Fast & Simple</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 font-bold">Best For</td>
              <td className="p-4 text-gray-400">Serious Bettors</td>
              <td className="p-4 text-gray-400">Entertainment</td>
              <td className="p-4 text-gray-400">Quick Sessions</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-red-600/20 to-black border border-red-500/30 p-10 rounded-3xl text-center mb-20">
        <h2 className="text-3xl font-bold text-white mb-4">Ready for Live Casino Madness?</h2>
        <p className="text-gray-300 mb-8">Join the tables at India's Trusted Casino and play with real dealers today.</p>
        <Link 
          href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link" 
          className="inline-block bg-[#FFF4C2] text-black px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform"
        >
          PLAY NOW
        </Link>
      </section>

      {/* FAQ */}
      <section className="bg-[#111] p-8 md:p-12 rounded-3xl border border-gray-800">
        <h3 className="text-3xl font-bold text-[#FFF4C2] mb-10 text-center">Frequently Asked Questions</h3>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#1a1a1a] transition-colors"
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown className={`text-[#FFF4C2] transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-400 border-t border-gray-800 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Blog53;