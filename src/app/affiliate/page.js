"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function AffiliateProgram() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setLoading(true);

    const formData = new FormData(event.target);
    const fullName = formData.get("name");
    const email = formData.get("email");
    const telegram = formData.get("telegram");
    const reason = formData.get("message");

    try {
      const response = await fetch("https://api.a2k.fun/apply-affiliate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          telegram,
          reason,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult("✅ Thank you! Your application has been submitted successfully.");
        event.target.reset();
      } else {
        setResult(data?.message || "❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("❌ Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1b1b] text-white flex flex-col items-center overflow-x-hidden">
      {/* Banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-[100vh]">
        <Image
          src="/images/AFFILIATE.png"
          alt="Affiliate Program Banner"
          fill
          className="object-cover object-center sm:object-top opacity-100"
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#FFF4C2] to-[#DAA520] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] mt-8 sm:mt-10 text-center px-4">
        Affiliate Program
      </h1>

      <div className="w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-12 text-gray-300">
        <div className="space-y-6">
          {/* Intro */}
          <h2 className="text-2xl md:text-4xl font-semibold text-white text-center sm:text-left">
            How to Participate
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Become an official affiliate partner of{" "}
            <span className="text-white font-medium">ACE2KING</span> and earn
            monthly commissions by promoting our platform. Fill out the form
            below to apply — our affiliate team will contact you via email or
            Telegram.
          </p>

          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="mt-8 bg-[#222222] p-6 rounded-2xl shadow-lg space-y-5"
          >
            <div>
              <label className="block mb-2 text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-[#111111] border border-gray-700 text-white focus:outline-none focus:border-[#DAA520]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full p-3 rounded-lg bg-[#111111] border border-gray-700 text-white focus:outline-none focus:border-[#DAA520]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Telegram Username (optional)
              </label>
              <input
                type="text"
                name="telegram"
                placeholder="@yourusername"
                className="w-full p-3 rounded-lg bg-[#111111] border border-gray-700 text-white focus:outline-none focus:border-[#DAA520]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Why do you want to join our Affiliate Program?
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell us briefly about your experience or marketing reach..."
                className="w-full p-3 rounded-lg bg-[#111111] border border-gray-700 text-white focus:outline-none focus:border-[#DAA520]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-[#DAA520] to-[#FFF4C2] text-black font-semibold py-3 rounded-lg transition ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          {/* Result Message */}
          {result && (
            <p
              className={`text-center text-sm mt-3 ${
                result.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {result}
            </p>
          )}

          {/* Terms */}
          <h2 className="text-2xl md:text-4xl font-semibold text-white mt-12 text-center sm:text-left">
            Terms and Conditions
          </h2>
          <ol className="list-decimal text-base sm:text-lg list-inside space-y-4 text-gray-300">
            <li>
              Commissions are processed monthly and credited by the 5th of each
              month, provided all eligibility requirements are met.
            </li>
            <li>
              Negative balances, if any, are carried forward to the next cycle.
            </li>
            <li>
              A minimum of 5 active members is required to qualify for
              commissions.
            </li>
            <li>
              Commission activation depends on the affiliate’s verified level.
            </li>
            <li>
              Fraudulent or duplicate accounts using the same IP/device will be
              disqualified and forfeited. ACE2KING reserves the right to revoke
              commissions.
            </li>
          </ol>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 mb-3">
              Join our official Telegram channel for affiliate updates:
            </p>
            <a
              href="https://t.me/ace2kingbet_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DAA520] underline hover:text-[#FFF4C2] transition"
            >
              @ace2kingbet_bot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
