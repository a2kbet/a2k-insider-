"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown, Trophy, Zap, Globe, ShieldCheck } from "lucide-react";

const Blog54 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "What is the most popular live casino game in India?", a: "Teen Patti and Andar Bahar are the most loved, followed by Dragon Tiger and Baccarat." },
    { q: "Are live dealer games safe to play?", a: "Yes, as long as you choose a licensed and verified casino platform using secure technology and fair play systems." },
    { q: "Is Live Teen Patti different from traditional Teen Patti?", a: "The rules remain the same, but the live version includes HD streaming, real dealers, and interactive gameplay." },
    { q: "Can beginners play Andar Bahar live?", a: "Absolutely. It’s one of the simplest and fastest games suitable for all skill levels." },
    { q: "Do live casinos offer bonuses?", a: "Yes, many platforms provide welcome bonuses, cashback, and rewards for live dealer game players." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "From Desi Classics to Live Dealers: Teen Patti, Andar Bahar & More",
    "description": "Explore Teen Patti, Andar Bahar, Dragon Tiger and the latest live dealer casino experiences on India's trusted platforms.",
    "author": { "@type": "Person", "name": "Admin" },
    "publisher": {
      "@type": "Organization",
      "name": "Your Casino Brand",
      "logo": { "@type": "ImageObject", "url": "https://yourwebsite.com/logo.png" }
    },
    "mainEntityOfPage": "https://yourwebsite.com/desi-classics-to-live-dealers-teen-patti-andar-bahar-guide",
    "datePublished": "2025-12-11"
  };

  if (!mounted) return null;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-gray-100 bg-[#050505]">
      {/* Schema Markup */}
      <Script id="schema-markup" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Hero Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#FFF4C2] mb-6 leading-tight">
          From Desi Classics to Live Dealers: Teen Patti, Andar Bahar & More
        </h1>
        <div className="relative w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,244,194,0.1)]">
          <Image
            src="/images/desi-classics-live.png" // Placeholder for your image
            alt="Teen Patti and Andar Bahar Live Dealer"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </header>

      {/* Intro Text */}
      <section className="prose prose-invert prose-yellow max-w-none mb-16">
        <p className="text-lg text-gray-300">
          India’s love for card games runs deep. From festive gatherings to late-night hangouts, classics like <strong>Teen Patti</strong>, <strong>Andar Bahar</strong>, and <strong>Dragon Tiger</strong> have always been part of our culture. Today, these traditional favourites have transformed into high-energy live dealer experiences.
        </p>
      </section>

      {/* Game Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Teen Patti Card */}
        <div className="bg-[#111] p-6 rounded-xl border border-yellow-900/30 hover:border-yellow-500/50 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="text-yellow-500" />
            <h2 className="text-xl font-bold text-[#FFF4C2]">Teen Patti Live</h2>
          </div>
          <p className="text-sm text-gray-400 mb-4">The pride of Indian Poker with HD streaming, live chat, and multiple table limits.</p>
          <Link href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link" className="text-yellow-500 font-bold hover:underline flex items-center gap-2">
            Play Now <Zap size={16} />
          </Link>
        </div>

        {/* Andar Bahar Card */}
        <div className="bg-[#111] p-6 rounded-xl border border-yellow-900/30 hover:border-yellow-500/50 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-yellow-500" />
            <h2 className="text-xl font-bold text-[#FFF4C2]">Andar Bahar</h2>
          </div>
          <p className="text-sm text-gray-400 mb-4">Simple, fast-paced, and perfect for every player. Predict the side and win in seconds.</p>
          <Link href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link." className="text-yellow-500 font-bold hover:underline flex items-center gap-2">
            Start Winning <Zap size={16} />
          </Link>
        </div>
      </div>

      {/* Platform Comparison / Providers */}
      <section className="bg-[#1a1a1a] p-8 rounded-2xl mb-16 border border-gray-800">
        <h2 className="text-2xl font-bold text-center mb-8">World Class Providers</h2>
        <div className="flex flex-wrap justify-center gap-6 opacity-70">
          <span className="px-6 py-2 bg-black rounded-full border border-gray-700">EVO Live</span>
          <span className="px-6 py-2 bg-black rounded-full border border-gray-700">Sexy Live</span>
          <span className="px-6 py-2 bg-black rounded-full border border-gray-700">EZ Live</span>
        </div>
        <p className="mt-8 text-center text-gray-400">
          These brands ensure players enjoy <strong>India’s Trusted Casino</strong> experience with cutting-edge technology.
        </p>
      </section>

      {/* Trusted CTA Section */}
      <section className="text-center bg-gradient-to-b from-yellow-600/10 to-transparent p-12 rounded-3xl border border-yellow-600/20 mb-16">
        <ShieldCheck className="mx-auto text-yellow-500 mb-4" size={48} />
        <h3 className="text-3xl font-bold mb-4">Safe & Secure Gaming</h3>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Choose a <strong>Trusted Casino online</strong> that offers smooth payments, 24/7 support, and fair play-certified live dealer tables.
        </p>
        <button className="bg-[#FFF4C2] text-black px-10 py-3 rounded-full font-black hover:scale-105 transition-transform uppercase tracking-wider">
          <Link href="https://www.a2k.bet/?pid=topvip&utm_source=a2kfun&utm_medium=blog&utm_campaign=internal_link." className="text-yellow-500 font-bold hover:underline flex items-center gap-2">
          Explore India&apos;s Trusted Casino
          </Link>
        </button>
      </section>

      {/* FAQ Accordion */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-[#FFF4C2] mb-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-[#111] hover:bg-[#1a1a1a] transition-colors"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown className={`text-yellow-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="p-5 bg-black text-gray-400 border-t border-gray-800 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Keywords */}
      <footer className="pt-8 border-t border-gray-800 text-xs text-gray-600 text-center">
        <p>Your gateway to an <strong>online gambling platform</strong> where you can <strong>play casino games</strong> safely.</p>
      </footer>
    </article>
  );
};

export default Blog54;