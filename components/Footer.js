import Link from "next/link";

const socialIcons = [
  { icon: "📷", label: "Instagram" },
  { icon: "✕", label: "Twitter" },
  { icon: "in", label: "LinkedIn" },
  { icon: "🎵", label: "TikTok" },
  { icon: "▶", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFF5F3] mt-12">
      <div className="max-w-[1120px] mx-auto px-6 pt-12 pb-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      
        <div>
          <p className="font-extrabold text-[22px] text-[#FF3E1D] mb-1">AAVORide</p>
          <p className="text-xs text-gray-400 mb-4">Powered by AAVORide Premium Mobility.</p>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Book affordable cabs with transparent pricing, verified drivers, and smooth rides across India.
            From quick city trips to long-distance journeys, AAVORide makes every ride stress-free and budget-friendly.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(({ icon, label }) => (
              <button key={label} aria-label={label} className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-sm cursor-pointer hover:border-[#FF3E1D] transition-colors">
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold text-sm mb-4">Quick Links</p>
          {["Home", "Our Services", "Become a Partner", "Blog", "FAQ"].map((link) => (
            <Link key={link} href="#" className="block text-gray-500 text-sm mb-3 no-underline hover:text-[#FF3E1D] transition-colors">
              {link}
            </Link>
          ))}
        </div>

  
        <div>
          <p className="font-bold text-sm mb-4">Contact Us</p>
          <div className="bg-white rounded-xl p-4 mb-3 flex gap-3 items-center">
            <span className="bg-[#FF3E1D] rounded-lg p-[6px] text-white text-base">✉</span>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-0.5">EMAIL SUPPORT</p>
              <p className="text-sm font-bold">support@aavoride.in</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex gap-3 items-center">
            <span className="bg-[#FF3E1D] rounded-lg p-[6px] text-white text-base">📍</span>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-0.5">HEADQUARTER</p>
              <p className="text-sm font-bold">Ahmedabad, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 py-5 border-t border-[#FFD5CC] flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-gray-400 flex items-center gap-2 flex-wrap">
          © 2026 AAVORide Premium Mobility. All rights reserved. Driven by Excellence.
          <span className="bg-[#FF3E1D] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">● AAVORide</span>
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
            <Link key={l} href="#" className="text-xs text-gray-400 no-underline hover:text-[#FF3E1D] transition-colors">
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
