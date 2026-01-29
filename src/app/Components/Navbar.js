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
    { name: "Affiliate Program", path: "/affiliate" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-black/10 w-full flex justify-center items-center py-3 md:hidden z-50">
        <Link href="/">
          <Image
            src="/images/LOGO.png"
            alt="Logo"
            width={150}
            height={42}
            className="object-contain"
          />
        </Link>
      </div>

      <div className="fixed top-[56px] left-0 right-0 bg-white border-b border-black/10 w-full flex justify-between items-center px-4 py-3 md:hidden z-50">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-black text-3xl"
        >
          <FiMenu />
        </button>

        <a href="https://www.a2k.bet/?pid=topvip">
          <button className="px-4 py-1.5 rounded-md border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition">
            Play Now
          </button>
        </a>
      </div>

      <div className="fixed top-0 left-0 right-0 bg-white border-b border-black/10 w-full hidden md:flex justify-between items-center px-8 py-4 z-50">
        <Link href="/">
          <Image
            src="/images/LOGO.png"
            alt="Logo"
            width={190}
            height={56}
            className="object-contain"
          />
        </Link>

        <div className="flex gap-3">
          {["Sign Up", "Log In"].map((btn, i) => (
            <a
              key={i}
              href="https://www.a2k.bet/signUp?pid=topvip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-5 py-2 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition">
                {btn}
              </button>
            </a>
          ))}
        </div>
      </div>

      <div className="fixed top-[72px] left-0 right-0 hidden md:flex bg-white border-b border-black/10 w-full px-10 py-3 justify-between items-center z-50">
        <div className="flex gap-6 text-[15px] font-medium text-black">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="relative hover:opacity-60 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <a href="https://www.a2k.bet/?pid=topvip">
          <button className="px-6 py-2 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition">
            Play Now
          </button>
        </a>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-72 max-w-[80%] bg-white text-black p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl"
          >
            <FiX />
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-10 text-lg font-medium">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="hover:opacity-60 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-8">
          {["Sign Up", "Log In"].map((btn, i) => (
            <a
              key={i}
              href="https://www.a2k.bet/signUp?pid=topvip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full px-4 py-2 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition">
                {btn}
              </button>
            </a>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </>
  );
};

export default Navbar;
