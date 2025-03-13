"use client";
import { FiMenu, FiX } from "react-icons/fi";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width to toggle mobile mode
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1190);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-[#9DCAFF] shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center py-4 relative">
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              className="text-white text-2xl absolute left-6"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          )}

          {/* Desktop Navbar */}
          {!isMobile && (
            <ul className="flex gap-6 text-center items-center">
              {["GALLERY", "MARKET PLACE", "PINATAS", "RARITY", "LITEPAPER"].map(
                (item, index) => (
                  <li key={index} className="relative">
                    <a
                      href="#"
                      className="block text-black text-lg px-8 py-4 bg-white relative transition-all duration-300 hover:bg-pink-400 
                      border-l-4 border-b-4 border-pink-500 shadow-[6px_6px_0px_0px_black]"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}

              {/* CONNECT WALLET BUTTON WITH SOCIAL ICONS */}
              <li className="relative flex items-center">
                {/* Social Icons */}
                <div className="flex flex-col gap-2">
                  <a href="https://discord.gg/ygKmQQnc" className="bg-blue-600 p-2 rounded shadow-lg">
                    <FaDiscord className="text-white text-lg" />
                  </a>
                  <a href="#" className="bg-blue-400 p-2 rounded shadow-lg">
                    <FaTelegramPlane className="text-white text-lg" />
                  </a>
                  <a href="https://x.com/RPS_battle_" className="bg-sky-500 p-2 rounded shadow-lg">
                    <FaTwitter className="text-white text-lg" />
                  </a>
                </div>

                {/* Wallet Button (Same Height as 3 Icons + Gaps) */}
                <a
                  href="#"
                  className="block text-black text-lg font-bold italic bg-white relative transition-all duration-300 hover:bg-pink-400 
                  border-t-4 border-r-4 border-pink-500 shadow-[6px_6px_0px_0px_black] ml-2"
                  style={{
                    width: "15rem", // Adjust based on icon + gap height
                    height: "calc(3 * 36px + 2 * 8px)", // 3 icons (each 36px) + 2 gaps (8px each)
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  CONNECT <br /> WALLET
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobile && isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#9DCAFF] flex flex-col items-center justify-center z-50">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col items-center gap-6 mt-6">
              {["GALLERY", "MARKET PLACE", "PINATAS", "RARITY", "LITEPAPER"].map(
                (item, index) => (
                  <li key={index} className="w-full text-center">
                    <a
                      href="#"
                      className="block w-64 text-black font-shrikhand text-lg px-10 py-4 bg-white relative transition-all duration-300 hover:bg-pink-400 
                      border-l-4 border-b-4 border-pink-500 shadow-[6px_6px_0px_0px_black]"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}

              {/* CONNECT WALLET BUTTON WITH SOCIAL ICONS (MOBILE) */}
              <li className="flex flex-col items-center gap-3">
                {/* Social Icons (Mobile) */}
                <div className="flex gap-3">
                  <a href="https://discord.gg/ygKmQQnc" className="bg-blue-600 p-2 rounded shadow-lg">
                    <FaDiscord className="text-white text-lg" />
                  </a>
                  <a href="#" className="bg-blue-400 p-2 rounded shadow-lg">
                    <FaTelegramPlane className="text-white text-lg" />
                  </a>
                  <a href="https://x.com/RPS_battle_" className="bg-sky-500 p-2 rounded shadow-lg">
                    <FaTwitter className="text-white text-lg" />
                  </a>
                </div>

                {/* Wallet Button (Mobile) */}
                <a
                  href="#"
                  className="block text-black text-lg font-bold italic px-6 py-2 bg-white relative transition-all duration-300 hover:bg-pink-400 
                  border-t-4 border-r-4 border-pink-500 shadow-[6px_6px_0px_0px_black]"
                >
                  CONNECT WALLET
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
