"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Guide", path: "/guide" },
    { name: "Latest News / Blog", path: "/blog" },
    { name: "App", path: "/downloadapp" },
    { name: "Affilate Program", path: "/affiliate" },
    // { name: "About Us", path: "/about" },
    // { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Mobile Logo */}
      <div className="fixed top-0 left-0 right-0 bg-[#161617] w-full flex justify-center items-center py-3 md:hidden z-50">
        <Link href="/">
          <Image
            src="/images/ACE2KING.webp"
            alt="Logo"
            width={160}
            height={48}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Mobile Menu Icon + Play Now */}
      <div className="fixed top-[56px] left-0 right-0 bg-[#1a1a1a] w-full flex justify-between items-center px-4 py-3 md:hidden z-50">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-[#e4c169] text-3xl"
        >
          <FiMenu />
        </button>
        <a href="https://www.a2k.bet/?pid=topvip">
          <button
            className="px-3 py-1 rounded text-black font-semibold text-sm"
            style={{
              background:
                "linear-gradient(to right, #f7e183, #e4c169, #caa74d)",
              boxShadow: "0 0 8px #caa74d",
            }}
          >
            Play Now
          </button>
        </a>
      </div>

      {/* Desktop Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-[#161617] w-full hidden md:flex justify-between items-center px-6 py-3 z-50">
        <Link href="/">
          <Image
            src="/images/ACE2KING.webp"
            alt="Logo"
            width={200}
            height={64}
            className="object-contain"
          />
        </Link>

        <div className="flex gap-4">
          {["Sign Up", "Log In"].map((btn, i) => (
            <a
              key={i}
              href="https://www.a2k.bet/signUp?pid=topvip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-4 py-2 rounded text-black font-semibold cursor-pointer"
                style={{
                  background:
                    "linear-gradient(to bottom, #f7e183, #e4c169, #caa74d)",
                }}
              >
                {btn}
              </button>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Second Bar */}
      <div className="fixed top-[64px] left-0 right-0 hidden md:flex bg-[#1a1a1a] w-full px-8 py-3 justify-between items-center z-50">
        <div className="flex gap-5 text-lg text-[#e4c169]">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.path} className="hover:text-white transition">
              {link.name}
            </Link>
          ))}
        </div>

        <a href="https://www.a2k.bet/?pid=topvip">
          <button
            className="px-5 py-2 rounded text-black font-semibold transition cursor-pointer hover:scale-105"
            style={{
              background:
                "linear-gradient(to right, #f7e183, #e4c169, #caa74d)",
              boxShadow: "0 0 10px #caa74d",
            }}
          >
            Play Now
          </button>
        </a>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 max-w-[80%] bg-[#1a1a1a] text-[#e4c169] p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} className="text-3xl">
            <FiX />
          </button>
        </div>
        <div className="flex flex-col gap-6 mt-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white transition text-left"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-6">
          {["Sign Up", "Log In"].map((btn, i) => (
            <a
              key={i}
              href="https://www.a2k.bet/signUp?pid=topvip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-4 py-2 rounded text-black font-semibold w-full cursor-pointer"
                style={{
                  background:
                    "linear-gradient(to bottom, #f7e183, #e4c169, #caa74d)",
                }}
              >
                {btn}
              </button>
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  );
};

export default Navbar;
