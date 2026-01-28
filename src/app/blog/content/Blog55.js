"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { 
  ChevronDown, 
  BarChart4, 
  Target, 
  Trophy, 
  ShieldCheck, 
  TrendingUp, 
  Info 
} from "lucide-react";

const Blog55 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "Is cricket betting legal in India?", a: "It depends on your state. Most online platforms operate legally from offshore jurisdictions." },
    { q: "What is the best league for beginners to bet on?", a: "WBBL and NPL are ideal due to consistent playing patterns and predictable stats." },
    { q: "Are Knockout matches riskier to bet on?", a: "Yes, but they also offer the highest value odds for strategic bettors who understand pressure dynamics." },
    { q: "Can I combine cricket betting with casino games?", a: "Yes. Many platforms offer a hybrid experience, allowing you to enjoy casino games during match breaks or the off-season." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Cricket Betting Blueprint: WBBL, Knockout & NPL Predictions",
    "description": "A complete guide to cricket betting with expert insights on WBBL, Knockout and NPL predictions.",
    "author": { "@type": "Person", "name": "Admin" },
    "mainEntityOfPage": "https://example.com/complete-cricket-betting-blueprint-wbbl-knockout-npl-predictions",
  };

  if (!mounted) return null;

  return (
    <article className="max-w-5xl mx-auto px-4 py-12 text-gray-200 bg-black">
      <Script id="cricket-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Hero Header */}
      <header className="mb-16">
        <div className="flex items-center gap-2 mb-4 text-yellow-500 font-bold tracking-widest uppercase text-sm">
          <BarChart4 size={18} /> Strategy Blueprint 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          Complete Cricket Betting Blueprint: <span className="text-yellow-500">WBBL, Knockout & NPL</span>
        </h1>
        
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
          <Image
            src="/images/cricket-blueprint-2026.png"
            alt="Cricket Betting Analysis WBBL NPL"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </header>

      {/* Intro Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-6 text-lg text-gray-400">
          <p>
            Cricket betting continues to grow rapidly, and leagues like the **WBBL**, high-pressure **Knockout matches**, and the thrilling **NPL** have become hotspots for bettors.
          </p>
          <p>
            This blueprint breaks down expert insights, prediction strategies, and match analysis designed to help you make informed decisions while enjoying the excitement of cricket betting.
          </p>
        </div>
        <div className="bg-[#111] p-6 rounded-2xl border border-yellow-500/20">
          <h3 className="text-yellow-500 font-bold mb-4 flex items-center gap-2">
            <Info size={18} /> Quick Checklist
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">✔ Opening partnerships</li>
            <li className="flex gap-2">✔ Spin vs. pace performance</li>
            <li className="flex gap-2">✔ Toss impact trends</li>
            <li className="flex gap-2">✔ Venue history</li>
          </ul>
        </div>
      </section>

      {/* Betting Formats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { 
            title: "WBBL Analysis", 
            desc: "Focus on higher variability and early season team patterns for maximum value.",
            icon: <TrendingUp className="text-blue-400" />
          },
          { 
            title: "Knockout Strategy", 
            desc: "Experience under pressure wins games. Ideal for live and session betting.",
            icon: <Target className="text-red-400" />
          },
          { 
            title: "NPL Predictions", 
            desc: "Evaluate team depth and domestic form over star power for consistent wins.",
            icon: <Trophy className="text-yellow-400" />
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 rounded-3xl p-10 text-black flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black mb-2 uppercase">Boost Your Chances Instantly!</h2>
          <p className="font-medium opacity-80">Access real-time predictions and premium markets on our platform.</p>
        </div>
        <Link 
          href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link" 
          className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
        >
          GET PREDICTIONS
        </Link>
      </section>

      {/* Expert Tips & Platforms */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-l-4 border-yellow-500 pl-4">Expert Strategy Tips</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-[#111] rounded-xl">
              <span className="text-yellow-500 font-bold">01</span>
              <p className="text-gray-300">Track Venue History: Certain grounds favor chasing teams, while others support spinners.</p>
            </div>
            <div className="flex gap-4 p-4 bg-[#111] rounded-xl">
              <span className="text-yellow-500 font-bold">02</span>
              <p className="text-gray-300">Avoid Emotional Betting: Never bet based on your favorite team; follow the data.</p>
            </div>
            <div className="flex gap-4 p-4 bg-[#111] rounded-xl">
              <span className="text-yellow-500 font-bold">03</span>
              <p className="text-gray-300">Use Stats-Based Models: Combine strike rates, economy, and head-to-head matchups.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-gray-800 flex flex-col justify-center items-center text-center">
          <ShieldCheck size={60} className="text-yellow-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">India&apos;s Trusted Casino</h3>
          <p className="text-gray-400 mb-6">
            Bettors prefer choosing an <strong>online gambling platform</strong> that offers sports and casino together for double the entertainment.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-4 py-1 bg-gray-900 rounded-full text-xs border border-gray-700">Fast Payouts</span>
            <span className="px-4 py-1 bg-gray-900 rounded-full text-xs border border-gray-700">24/7 Support</span>
            <span className="px-4 py-1 bg-gray-900 rounded-full text-xs border border-gray-700">Secure UPI</span>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto mb-20">
        <h3 className="text-3xl font-bold text-center mb-10">Common Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-bold">{faq.q}</span>
                <ChevronDown className={`text-yellow-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="pb-6 text-gray-400 animate-slideDown">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 border-t border-gray-900">
        <p className="text-xs text-gray-600 uppercase tracking-tighter">
          Master your game on the best <strong>online gambling platform</strong>. Play responsibly.
        </p>
      </footer>
    </article>
  );
};

export default Blog55;