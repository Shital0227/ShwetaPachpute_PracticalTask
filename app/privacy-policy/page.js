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
      <div style={{ background: "linear-gradient(135deg, #FF3E1D 0%, #EC7F6C 100%)" }}>
        <Navbar />

        <div className="text-center px-6 pt-12 pb-16 max-w-[700px] mx-auto">
          <span className="inline-block bg-white/20 border border-white/40 text-white text-[11px] font-bold tracking-[2px] px-4 py-1.5 rounded-full mb-5">
            AAVORIDE LEGAL
          </span>
          <h1 className="text-white text-5xl md:text-[56px] font-extrabold mb-5 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-white/90 text-[15px] font-semibold leading-relaxed mb-4">
            Your trust is our priority. We are committed to protecting your privacy and ensuring your
            personal information is handled with care.
          </p>
          <p className="text-white/80 text-sm font-semibold">
            Last Updated :- January 2025
          </p>
        </div>
      </div>

      <div className="md:hidden sticky top-0 z-10 bg-white border-b border-gray-100 overflow-x-auto flex gap-1 px-4 py-2 scrollbar-hide">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex-shrink-0 ${
              mobileTabActive === id
                ? "bg-[#FF3E1D] text-white border-[#FF3E1D]"
                : "bg-white text-gray-500 border-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>


      <div className="max-w-[1120px] mx-auto px-6 py-12 flex gap-12 items-start">

        <aside className="hidden md:block w-[220px] flex-shrink-0 sticky top-6">
          <p className="text-[11px] font-bold tracking-[1.5px] text-gray-400 mb-4">NAVIGATION</p>
          {NAV_ITEMS.map(({ id, label, num }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-2.5 w-full text-left rounded-lg px-3 py-2 mb-0.5 text-[13px] transition-all cursor-pointer border-none ${
                activeSection === id
                  ? "bg-[#FFF0EE] text-[#FF3E1D] font-semibold"
                  : "bg-transparent text-gray-500 font-normal hover:bg-gray-50"
              }`}
            >
              <span className="text-gray-300 text-[11px] w-5">{num}</span>
              {label}
            </button>
          ))}
        </aside>

        <main className="flex-1 flex flex-col gap-14 min-w-0">

          <section id="about" className="scroll-mt-6">
            <SectionHeader num="01" emoji="ℹ️" title="About Aavoride" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Aavoride provides a modern transportation platform connecting users with reliable drivers.
              This policy describes how we collect, use, and protect your information across our mobile
              app and website.
            </p>
          </section>

          <section id="info-collect" className="scroll-mt-6">
            <SectionHeader num="02" emoji="📋" title="Information We Collect" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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

          <section id="how-we-use" className="scroll-mt-6">
            <SectionHeader num="03" emoji="⚙️" title="How We Use Your Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              {[
                "To provide and manage ride-hailing services.",
                "To verify identity and ensure safety standards.",
                "To process payments and issue invoices.",
                "To communicate service updates and marketing (with consent).",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                  <span className="text-[#FF3E1D] text-lg mt-0.5 flex-shrink-0">⊙</span>
                  <span className="text-[13px] text-gray-600 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 items-start px-1 py-3">
              <span className="text-[#FF3E1D] text-lg flex-shrink-0">⊙</span>
              <span className="text-[13px] text-gray-600">To improve our platform&apos;s user experience and technical stability.</span>
            </div>

            <div className="bg-[#FFF5F3] border border-[#FFD5CC] rounded-2xl p-6 mt-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-[#FF3E1D] rounded-xl flex items-center justify-center text-lg flex-shrink-0">🛡️</div>
                <h3 className="text-lg md:text-xl font-bold m-0">Our Commitment: What We Do NOT Do</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { emoji: "🚫", title: "No Selling Data", desc: "We do not sell your personal data to third parties for their marketing purposes." },
                  { emoji: "🛡️", title: "Private Contacts", desc: "We do not share your private contact information with other users except as necessary for the service." },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-5 text-center border border-[#FFE5DF]">
                    <div className="text-3xl mb-3">{item.emoji}</div>
                    <p className="font-bold text-sm mb-2">{item.title}</p>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="info-sharing" className="scroll-mt-6">
            <SectionHeader num="04" emoji="↗️" title="Information Sharing" />
            <div className="flex flex-col gap-4">
              {[
                { emoji: "👤", title: "With Other Users:", desc: "We share names and locations between customers and drivers to facilitate the ride." },
                { emoji: "⚙️", title: "Service Providers:", desc: "Third-party vendors performing payment processing, data analysis, and email delivery." },
                { emoji: "⚖️", title: "Legal Authorities:", desc: "When required by law or to protect the safety and rights of Aavoride and its users." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-[#FF3E1D] text-xl mt-0.5 flex-shrink-0">{item.emoji}</span>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    <span className="font-bold text-gray-800">{item.title}</span>{" "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="data-values" className="scroll-mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="flex items-center gap-2.5 text-lg font-bold mb-3">
                  <NumBadge n="6" /> Data Security
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We use industry-standard encryption and secure servers to protect your data from
                  unauthorized access or disclosure.
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-2.5 text-lg font-bold mb-3">
                  <NumBadge n="7" /> Data Retention
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We retain data as long as your account is active or as needed to provide services
                  and comply with legal obligations.
                </p>
              </div>
            </div>
          </section>

          <section id="security" className="scroll-mt-6">
            <SectionHeader num="08" emoji="🔒" title="User Rights" />
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              You have the right to access, correct, or delete your personal information. You may also
              object to processing or request data portability through your account settings or by
              contacting us.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="flex items-center gap-2 bg-gray-900 text-white rounded-full px-5 py-2.5 text-sm font-semibold border-none cursor-pointer hover:bg-gray-700 transition-colors">
                👤 Access Info
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-700 rounded-full px-5 py-2.5 text-sm font-semibold border border-gray-200 cursor-pointer hover:border-[#FF3E1D] transition-colors">
                🗑 Delete Account
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-700 rounded-full px-5 py-2.5 text-sm font-semibold border border-gray-200 cursor-pointer hover:border-[#FF3E1D] transition-colors">
                ↩ Opt-out
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { emoji: "📍", title: "Location Data", desc: "Real-time location data is collected from your device to enable pickups and route tracking. You can disable this in device settings, but service functionality will be limited." },
                { emoji: "🍪", title: "Cookies & Tracking", desc: "We use cookies to remember your preferences and analyze traffic. You can manage cookie settings through your browser." },
                { emoji: "👶", title: "Children's Privacy", desc: "Our services are not intended for children under 18. We do not knowingly collect data from minors." },
                { emoji: "🔗", title: "Third-Party Links", desc: "Our platform may contain links to external sites. We are not responsible for the privacy practices of those third parties." },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="flex items-center gap-2 text-sm font-bold mb-2 text-[#FF3E1D]">
                    <span>{item.emoji}</span> {item.title}
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border border-[#FFD5CC] rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-11 h-11 bg-[#FF3E1D] rounded-xl flex items-center justify-center text-xl flex-shrink-0">🕐</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Policy Updates</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We may update this policy periodically. We will notify you of any significant changes
                  via the app or email. Continued use of the service constitutes acceptance of the
                  revised policy.
                </p>
              </div>
            </div>
          </section>

         
          <section id="contact" className="scroll-mt-6">
            <div className="border border-gray-200 rounded-2xl p-6 md:p-8">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-11 h-11 bg-[#FF3E1D] rounded-xl flex items-center justify-center text-xl flex-shrink-0">📞</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Contact Us</h3>
                  <p className="text-[13px] text-gray-400">We&apos;re here to help with your privacy concerns</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "COMPANY NAME", value: "Aavoride", emoji: "🏢" },
                  { label: "PHONE", value: "+91-0000000000", emoji: "📞" },
                  { label: "EMAIL", value: "support@aavoride.com", emoji: "✉️" },
                  { label: "ADDRESS", value: "Registered Office Address", emoji: "📍" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 items-start">
                    <span className="text-[#FF3E1D] text-lg mt-1 flex-shrink-0">{item.emoji}</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">{item.label}</p>
                      <p className="text-[14px] font-bold">{item.value}</p>
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
function SectionHeader({ num, emoji, title }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="w-11 h-11 rounded-full bg-[#FF3E1D] flex items-center justify-center text-lg text-white flex-shrink-0">
        {emoji}
      </div>
      <h2 className="text-2xl md:text-[26px] font-bold flex items-center gap-2.5 m-0">
        <span className="text-[13px] font-bold text-[#FF3E1D]">{num}</span>
        {title}
      </h2>
    </div>
  );
}

function NumBadge({ n }) {
  return (
    <span className="bg-[#FF3E1D] text-white rounded-md text-xs font-bold px-2 py-0.5">
      {n}
    </span>
  );
}

function InfoCard({ title, items, wide }) {
  return (
    <div className={`bg-gray-50 rounded-xl p-4 border border-gray-100 ${wide ? "md:col-span-2" : ""}`}>
      <p className="text-[13px] font-bold text-[#FF3E1D] mb-2">• {title}</p>
      {items.map((item, i) => (
        <p key={i} className="text-[13px] text-gray-500 leading-relaxed mb-1">{item}</p>
      ))}
    </div>
  );
}
