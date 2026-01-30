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
        setResult(
          "✅ Thank you! Your application has been submitted successfully.",
        );
        event.target.reset();
      } else {
        setResult(
          data?.message || "❌ Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult(
        "❌ Network error. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center overflow-x-hidden font-poppins">
      {/* Banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-[100vh]">
        <Image
          src="/images/AFFILIATE.png"
          alt="Affiliate Program Banner"
          fill
          className="object-cover object-center sm:object-top"
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-8 sm:mt-10 text-center px-4 text-black">
        Affiliate Program
      </h1>

      <div className="w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-12 text-black/70">
        <div className="space-y-6">
          {/* Intro */}
          <h2 className="text-2xl md:text-4xl font-semibold text-black text-center sm:text-left">
            How to Participate
          </h2>
          <p className="text-base sm:text-lg">
            Become an official affiliate partner of{" "}
            <span className="font-medium text-black">ACE2KING</span> and earn
            monthly commissions by promoting our platform. Fill out the form
            below to apply — our affiliate team will contact you via email or
            Telegram.
          </p>

          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="mt-8 bg-white p-6 rounded-2xl border border-black/10 space-y-5"
          >
            <div>
              <label className="block mb-2 text-sm text-black/70">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-white border border-black/20 text-black focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-black/70">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full p-3 rounded-lg bg-white border border-black/20 text-black focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-black/70">
                Telegram Username (optional)
              </label>
              <input
                type="text"
                name="telegram"
                placeholder="@yourusername"
                className="w-full p-3 rounded-lg bg-white border border-black/20 text-black focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-black/70">
                Why do you want to join our Affiliate Program?
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell us briefly about your experience or marketing reach..."
                className="w-full p-3 rounded-lg bg-white border border-black/20 text-black focus:outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-black text-white font-medium py-3 rounded-lg transition ${
                loading
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-white hover:text-black border border-black"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          {/* Result Message */}
          {result && (
            <p
              className={`text-center text-sm mt-3 ${
                result.startsWith("✅") ? "text-black" : "text-black"
              }`}
            >
              {result}
            </p>
          )}

          {/* Terms */}
          <h2 className="text-2xl md:text-4xl font-semibold text-black mt-12 text-center sm:text-left">
            Terms and Conditions
          </h2>
          <ol className="list-decimal text-base sm:text-lg list-inside space-y-4 text-black/70">
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
            <p className="text-lg text-black/70 mb-3">
              Join our official Telegram channel for affiliate updates:
            </p>
            <a
              href="https://t.me/ace2kingbet_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:opacity-70 transition"
            >
              @ace2kingbet_bot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
