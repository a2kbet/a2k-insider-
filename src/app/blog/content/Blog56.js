"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { 
  ChevronDown, 
  Trophy, 
  TrendingUp, 
  MapPin, 
  Clock, 
  AlertCircle,
  Zap
} from "lucide-react";

const Blog56 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "Is NPL betting safe?", a: "Yes, as long as you choose licensed and secure betting platforms with verified user reviews and transparent policies." },
    { q: "How do I predict the winner in an NPL match?", a: "Check team form, pitch reports, head-to-head stats, and player performances. Combine data with expert insights for accuracy." },
    { q: "Which is the best type of bet for beginners?", a: "Match-winner bets and over/under bets are the easiest and safest for new bettors." },
    { q: "Can I bet live during the match?", a: "Yes, NPL live betting offers great opportunities to capitalize on match momentum and changing odds." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Bet on NPL Matches: Expert Breakdown & Today’s Picks",
    "description": "Learn expert strategies and today’s top predictions to bet on NPL matches with confidence.",
    "author": { "@type": "Person", "name": "Admin" },
    "publisher": { "@type": "Organization", "name": "Trusted Betting Guide" },
    "mainEntityOfPage": "https://www.example.com/how-to-bet-on-npl-matches-expert-tips-todays-picks"
  };

  if (!mounted) return null;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-gray-200 bg-[#0a0a0a]">
      <Script id="npl-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Header Section */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Zap size={14} /> Live Predictions 2026
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          How to Bet on <span className="text-blue-500">NPL Matches</span>: Expert Breakdown & Today’s Picks
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Upgrade your cricket betting game with smarter predictions and strategic insights for the National Premier League.
        </p>

        <div className="relative w-full h-[250px] md:h-[450px] mt-10 rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
          <Image
            src="/images/npl-betting-banner.png"
            alt="NPL Cricket Betting Tips"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </header>

      {/* Intro Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { label: "Markets", val: "Wide Variety" },
          { label: "Winning Potential", val: "High Odds" },
          { label: "Strategy", val: "Data-Driven" },
          { label: "Format", val: "Fast-Paced" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#111] p-4 rounded-xl border border-gray-800 text-center">
            <p className="text-[10px] text-gray-500 uppercase font-bold">{stat.label}</p>
            <p className="text-white font-bold">{stat.val}</p>
          </div>
        ))}
      </section>

      {/* Betting Types */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Trophy className="text-blue-500" /> Essential NPL Bet Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { t: "Match Winner", d: "Select the outright winner. Perfect for beginners using head-to-head stats." },
            { t: "Top Batsman", d: "Predict who scores most. Analyze player strike rates and venue history." },
            { t: "Over/Under", d: "Bet on total runs based on pitch conditions and weather forecasts." },
            { t: "Live In-Play", d: "Capitalize on momentum shifts. Odds fluctuate rapidly for bigger wins." },
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#111] to-black p-6 rounded-2xl border border-gray-800">
              <h3 className="text-blue-400 font-bold mb-2">{item.t}</h3>
              <p className="text-sm text-gray-400">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Predictor Card Section */}
      <section className="bg-blue-600 rounded-3xl p-8 mb-20 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-4 uppercase">Today&apos;s Match Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20">
              <p className="font-bold text-sm mb-2 opacity-80">Match 1: Team A vs Team B</p>
              <p className="text-lg font-black">Winner: Team A</p>
              <p className="text-xs bg-black/20 inline-block px-2 py-1 rounded mt-2">Best Bet: Over 170.5 Runs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20">
              <p className="font-bold text-sm mb-2 opacity-80">Match 2: Team C vs Team D</p>
              <p className="text-lg font-black">Winner: Team D</p>
              <p className="text-xs bg-black/20 inline-block px-2 py-1 rounded mt-2">Best Bet: Top Batsman (Player X)</p>
            </div>
          </div>
          <Link href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link" className="mt-8 inline-block bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors">
            Bet Now Live
          </Link>
        </div>
        <TrendingUp className="absolute right-[-20px] bottom-[-20px] text-white/10" size={200} />
      </section>

      {/* Expert Strategy Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-10 text-center">Expert Winning Strategies</h2>
        <div className="space-y-6">
          <div className="flex gap-6 items-start">
            <div className="bg-blue-500 text-black w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black">1</div>
            <div>
              <h4 className="font-bold text-lg mb-1">Analyze Pitch & Venue</h4>
              <p className="text-gray-400">Stadiums behave differently; some favor spinners while others are batting paradises.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="bg-blue-500 text-black w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black">2</div>
            <div>
              <h4 className="font-bold text-lg mb-1">Multi-Bet Division</h4>
              <p className="text-gray-400">Divide your bankroll across Match Winner, Over/Under, and Player Performance to minimize risk.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="bg-blue-500 text-black w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black">3</div>
            <div>
              <h4 className="font-bold text-lg mb-1">The Toss Impact</h4>
              <p className="text-gray-400">In NPL, chasing teams often have the advantage at specific venues. Watch the toss closely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="bg-[#111] p-10 rounded-3xl border border-gray-800 text-center mb-20">
        <AlertCircle className="mx-auto text-blue-500 mb-4" size={40} />
        <h3 className="text-2xl font-bold mb-4">Responsible & Secure Betting</h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          This guide helps users play casino games responsibly on **India’s Trusted Casino** network. Ensure you use a **Trusted Casino online** for secure payments.
        </p>
        <div className="flex justify-center gap-4 text-xs font-bold text-gray-500 uppercase">
          <span className="flex items-center gap-1"><MapPin size={12}/> Secure Platform</span>
          <span className="flex items-center gap-1"><Clock size={12}/> 24/7 Support</span>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">NPL Betting FAQ</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0f0f0f] border border-gray-800 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-900"
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown className={`text-blue-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="p-5 text-gray-400 border-t border-gray-800 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 py-10 border-t border-gray-900 text-center">
        <p className="text-xs text-gray-600 uppercase">
          Master the NPL on India&apos;s leading **online gambling platform**.
        </p>
      </footer>
    </article>
  );
};

export default Blog56;