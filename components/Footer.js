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
    <footer className="bg-[#FFF5F3] mt-16 md:mt-20">
      <div className="max-w-[1120px] mx-auto px-6 pt-12 md:pt-16 pb-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <p className="font-extrabold text-[24px] text-[#FF3E1D] mb-2">AAVORide</p>
          <p className="text-xs text-gray-500 mb-5">Powered by AAVORide Premium Mobility.</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            Book affordable cabs with transparent pricing, verified drivers, and smooth rides across India.
            From quick city trips to long-distance journeys, AAVORide makes every ride stress-free and budget-friendly.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-8 h-8 rounded-full border-2 border-[#FFD5CC] bg-white flex items-center justify-center text-sm cursor-pointer hover:border-[#FF3E1D] hover:bg-[#FFF0EE] transition-colors"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <p className="font-bold text-base text-gray-800 mb-5">Quick Links</p>
          {["Home", "Our Services", "Become a Partner", "Blog", "FAQ"].map((link) => (
            <Link
              key={link}
              href="#"
              className="block text-gray-700 text-sm mb-4 no-underline hover:text-[#FF3E1D] transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Contact Us Section */}
        <div>
          <p className="font-bold text-base text-gray-800 mb-5">Contact Us</p>
          <div className="bg-white rounded-xl p-4 mb-4 flex gap-3 items-start border border-gray-200">
            <span className="bg-[#FF3E1D] rounded-lg p-2 text-white text-base flex-shrink-0 flex items-center justify-center w-8 h-8">
              ✉
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">EMAIL SUPPORT</p>
              <p className="text-sm font-bold text-gray-800">support@aavoride.in</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex gap-3 items-start border border-gray-200">
            <span className="bg-[#FF3E1D] rounded-lg p-2 text-white text-base flex-shrink-0 flex items-center justify-center w-8 h-8">
              📍
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">HEADQUARTER</p>
              <p className="text-sm font-bold text-gray-800">Ahmedabad, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1120px] mx-auto px-6 py-6 border-t border-[#FFD5CC] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <p className="text-xs text-gray-600">
            © 2026 AAVORide Premium Mobility. All rights reserved. Driven by Excellence.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#FF3E1D] flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">●</span>
            </div>
            <span className="text-xs font-bold text-gray-800">AAVORide</span>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-center">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
            <Link
              key={l}
              href="#"
              className="text-xs text-gray-600 no-underline hover:text-[#FF3E1D] transition-colors"
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
