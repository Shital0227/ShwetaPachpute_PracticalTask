"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white rounded-full px-8 py-3 flex items-center justify-between max-w-[1120px] mx-auto mb-8">
        <Link href="/" className="text-[#FF3E1D] font-extrabold text-2xl tracking-[-0.48px] leading-8 no-underline">
          AAVORide
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {["Home", "Services", "About Us"].map((link) => (
            <Link key={link} href="#" className="font-medium text-[15px] text-gray-700 no-underline hover:text-[#FF3E1D] transition-colors">
              {link}
            </Link>
          ))}
        </div>

        <button className="hidden md:block bg-[#FF3E1D] text-white rounded-full px-7 py-2 font-semibold text-sm cursor-pointer border-none hover:opacity-90 transition-opacity">
          Join as a AAVORide Partner
        </button>
        <button
          className="md:hidden text-[#FF3E1D] text-2xl border-none bg-transparent cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white rounded-2xl mx-2 mb-4 p-6 shadow-lg flex flex-col gap-4">
          {["Home", "Services", "About Us"].map((link) => (
            <Link key={link} href="#" className="font-medium text-gray-800 no-underline text-base">
              {link}
            </Link>
          ))}
          <button className="bg-[#FF3E1D] text-white rounded-full px-6 py-3 font-semibold text-sm cursor-pointer border-none w-full">
            Join as a AAVORide Partner
          </button>
        </div>
      )}
    </div>
  );
}
