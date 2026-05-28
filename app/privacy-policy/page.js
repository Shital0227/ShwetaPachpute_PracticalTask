"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAV_ITEMS = [
  { id: "about", label: "About Aavoride", num: "01" },
  { id: "info-collect", label: "Information We Collect", num: "02" },
  { id: "how-we-use", label: "How We Use", num: "03" },
  { id: "info-sharing", label: "Info Sharing", num: "04" },
  { id: "data-values", label: "Data Values", num: "05" },
  { id: "security", label: "Security & Rights", num: "06" },
  { id: "contact", label: "Contact Support", num: "14" },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileTabActive, setMobileTabActive] = useState("about");

  useEffect(() => {
    const observers = {};
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            setMobileTabActive(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observers[id].observe(el);
    });
    return () => Object.values(observers).forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[#FF3E1D] px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto">
          <Navbar />

          <div className="text-center px-6 py-12">
            <span className="inline-block bg-white/20 border border-white/40 text-white text-[11px] font-bold tracking-[2px] px-4 py-1.5 rounded-full mb-4">
              AAVORIDE LEGAL
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed mb-3">
              Your trust is our priority. We are committed to protecting your privacy and ensuring your
              personal information is handled with care.
            </p>
            <p className="text-white/85 text-sm font-semibold">
              Last Updated :- January 2025
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="md:hidden sticky top-0 z-10 bg-white border-b border-gray-200 overflow-x-auto flex gap-2 px-4 py-2">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex-shrink-0 ${
              mobileTabActive === id
                ? "bg-[#FF3E1D] text-white border-[#FF3E1D]"
                : "bg-white text-gray-600 border-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row gap-8 md:gap-12">

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-56 flex-shrink-0 sticky top-8 h-fit">
          <p className="text-[11px] font-bold tracking-[1.5px] text-gray-400 mb-3 uppercase">Navigation</p>
          {NAV_ITEMS.map(({ id, label, num }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-2.5 w-full text-left rounded-lg px-3 py-2.5 mb-1 text-[13px] transition-all cursor-pointer border-none ${
                activeSection === id
                  ? "bg-[#FFF0EE] text-[#FF3E1D] font-semibold"
                  : "bg-transparent text-gray-600 font-normal hover:bg-gray-50"
              }`}
            >
              <span className="text-gray-300 text-[11px] w-4">{num}</span>
              {label}
            </button>
          ))}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col gap-10 md:gap-12 min-w-0">

          {/* Section 01: About Aavoride */}
          <section id="about" className="scroll-mt-6">
            <SectionHeader num="01" title="About Aavoride" />
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Aavoride provides a modern transportation platform connecting users with reliable drivers. 
              This policy describes how we collect, use, and protect your information across our mobile 
              app and website.
            </p>
          </section>

          {/* Section 02: Information We Collect */}
          <section id="info-collect" className="scroll-mt-6">
            <SectionHeader num="02" title="Information We Collect" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <InfoCard
                title="For Customers:"
                items={[
                  "Contact details Full name, Mobile number, Email address (optional),",
                  "Pickup & drop location, Travel details you submit and Communication preferences",
                ]}
              />
              <InfoCard
                title="For Drivers:"
                items={["Identification documents, vehicle information, location data, and background check results."]}
              />
            </div>
            <InfoCard
              title="Automatically Collected:"
              items={["IP address, device type, browser information, and app usage statistics."]}
              wide
            />
          </section>

          {/* Section 03: How We Use Your Information */}
          <section id="how-we-use" className="scroll-mt-6">
            <SectionHeader num="03" title="How We Use Your Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "To provide and manage ride-hailing services.",
                "To verify identity and ensure safety standards.",
                "To process payments and issue invoices.",
                "To communicate service updates and marketing (with consent).",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <span className="text-[#FF3E1D] text-lg flex-shrink-0 mt-0.5">⊙</span>
                  <span className="text-[13px] text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 items-start mb-6">
              <span className="text-[#FF3E1D] text-lg flex-shrink-0 mt-0.5">⊙</span>
              <span className="text-[13px] text-gray-700">To improve our platform&apos;s user experience and technical stability.</span>
            </div>

            {/* Our Commitment Box */}
            <div className="bg-[#FFF5F3] border-2 border-[#FFD5CC] rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 bg-[#FF3E1D] rounded-lg flex items-center justify-center text-xl text-white flex-shrink-0 font-bold">
                  ✓
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 m-0">
                  Our Commitment: What We Do NOT Do
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { icon: "🚫", title: "No Selling Data", desc: "We do not sell your personal data to third parties for their marketing purposes." },
                  { icon: "🛡️", title: "Private Contacts", desc: "We do not share your private contact information with other users except as necessary for the service." },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-6 border border-[#FFE5DF] text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <p className="font-bold text-base text-gray-800 mb-2">{item.title}</p>
                    <p className="text-[13px] text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 04: Information Sharing */}
          <section id="info-sharing" className="scroll-mt-6">
            <SectionHeader num="04" title="Information Sharing" />
            <div className="flex flex-col gap-6">
              {[
                { icon: "👤", title: "With Other Users:", desc: "We share names and locations between customers and drivers to facilitate the ride." },
                { icon: "⚙️", title: "Service Providers:", desc: "Third-party vendors performing payment processing, data analysis, and email delivery." },
                { icon: "⚖️", title: "Legal Authorities:", desc: "When required by law or to protect the safety and rights of Aavoride and its users." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-[#FF3E1D] text-3xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm md:text-base font-bold text-gray-800 mb-1.5">{item.title}</p>
                    <p className="text-[13px] md:text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 05: Data Values */}
          <section id="data-values" className="scroll-mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="flex items-center gap-3 text-lg md:text-xl font-bold text-gray-800 mb-3">
                  <NumBadge n="6" /> Data Security
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We use industry-standard encryption and secure servers to protect your data from
                  unauthorized access or disclosure.
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-3 text-lg md:text-xl font-bold text-gray-800 mb-3">
                  <NumBadge n="7" /> Data Retention
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We retain data as long as your account is active or as needed to provide services
                  and comply with legal obligations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 06: User Rights */}
          <section id="security" className="scroll-mt-6">
            <SectionHeader num="06" title="User Rights" />
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
              You have the right to access, correct, or delete your personal information. You may also
              object to processing or request data portability through your account settings or by
              contacting us.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="flex items-center gap-2 bg-gray-900 text-white rounded-full px-6 py-2.5 text-sm font-semibold border-none cursor-pointer hover:bg-gray-800 transition-colors">
                👤 Access Info
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-700 rounded-full px-6 py-2.5 text-sm font-semibold border border-gray-300 cursor-pointer hover:border-[#FF3E1D] hover:text-[#FF3E1D] transition-colors">
                🗑 Delete Account
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-700 rounded-full px-6 py-2.5 text-sm font-semibold border border-gray-300 cursor-pointer hover:border-[#FF3E1D] hover:text-[#FF3E1D] transition-colors">
                ↩ Opt-out
              </button>
            </div>

            {/* Info Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "📍", title: "Location Data", desc: "Real-time location data is collected from your device to enable pickups and route tracking. You can disable this in device settings, but service functionality will be limited." },
                { icon: "🍪", title: "Cookies & Tracking", desc: "We use cookies to remember your preferences and analyze traffic. You can manage cookie settings through your browser." },
                { icon: "👶", title: "Children&apos;s Privacy", desc: "Our services are not intended for children under 18. We do not knowingly collect data from minors." },
                { icon: "🔗", title: "Third-Party Links", desc: "Our platform may contain links to external sites. We are not responsible for the privacy practices of those third parties." },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="flex items-center gap-2 text-sm font-bold mb-2 text-[#FF3E1D]">
                    <span>{item.icon}</span> {item.title}
                  </h4>
                  <p className="text-[13px] text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Policy Updates Box */}
            <div className="border-2 border-[#FFD5CC] rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-11 h-11 bg-[#FF3E1D] rounded-lg flex items-center justify-center text-xl flex-shrink-0 font-bold">
                🕐
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Policy Updates</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We may update this policy periodically. We will notify you of any significant changes
                  via the app or email. Continued use of the service constitutes acceptance of the
                  revised policy.
                </p>
              </div>
            </div>
          </section>

          {/* Section 14: Contact Us */}
          <section id="contact" className="scroll-mt-6">
            <div className="border-2 border-gray-300 rounded-2xl p-6 md:p-8">
              <div className="flex gap-4 items-start mb-7">
                <div className="w-12 h-12 bg-[#FF3E1D] rounded-lg flex items-center justify-center text-lg text-white flex-shrink-0 font-bold">
                  📞
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-1">Contact Us</h3>
                  <p className="text-[13px] text-gray-600">We&apos;re here to help with your privacy concerns</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "COMPANY NAME", value: "Aavoride", icon: "🏢" },
                  { label: "PHONE", value: "+91-0000000000", icon: "📞" },
                  { label: "EMAIL", value: "support@aavoride.com", icon: "✉️" },
                  { label: "ADDRESS", value: "Registered Office Address", icon: "📍" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 items-start">
                    <span className="text-[#FF3E1D] text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">{item.label}</p>
                      <p className="text-[14px] font-bold text-gray-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}

/* ── Sub-components ── */
function SectionHeader({ num, title }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-full bg-[#FF3E1D] flex items-center justify-center text-2xl text-white flex-shrink-0 font-bold shadow-sm">
        {num}
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 m-0">
        {title}
      </h2>
    </div>
  );
}

function NumBadge({ n }) {
  return (
    <span className="bg-[#FF3E1D] text-white rounded-md text-xs font-bold px-2.5 py-0.5">
      {n}
    </span>
  );
}

function InfoCard({ title, items, wide }) {
  return (
    <div className={`bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 ${wide ? "md:col-span-2" : ""}`}>
      <p className="text-[13px] font-bold text-[#FF3E1D] mb-3">• {title}</p>
      {items.map((item, i) => (
        <p key={i} className="text-[13px] text-gray-700 leading-relaxed mb-2 last:mb-0">{item}</p>
      ))}
    </div>
  );
}
