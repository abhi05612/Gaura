import { container, btnSecondary } from "@/lib/constants";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Accurate Predictions",
    desc: "Get precise astrology insights based on deep analysis and experience.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Personalized Guidance",
    desc: "Every consultation is tailored to your unique birth chart and situation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Experienced Astrologer",
    desc: "Years of experience helping individuals solve real-life problems.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Confidential & Private",
    desc: "Your personal information and consultation remain completely secure.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Practical Solutions",
    desc: "Not just predictions, but actionable remedies and guidance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Trusted by Clients",
    desc: "Hundreds of satisfied clients with real results and positive feedback.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0E1628" }}>
      <div className={container}>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#F4C430" }}>
            WHY CHOOSE US
          </p>
          <h2 className="font-bold text-[26px] md:text-[40px] leading-[1.2] text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Trusted Guidance You Can Rely On
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#F4C430]/25 hover:shadow-[0_8px_28px_rgba(244,196,48,0.08)]"
              style={{ backgroundColor: "#121A2B" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: "rgba(244,196,48,0.1)", color: "#F4C430" }}>
                {icon}
              </div>
              <h3 className="text-white font-semibold text-[18px] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                {title}
              </h3>
              <p className="text-[14px] leading-[1.65]" style={{ color: "#B8C0D9" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust line + CTA */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-[15px] text-white/80 text-center">
            Helping thousands find <span style={{ color: "#F4C430" }}>clarity and direction</span> in life
          </p>
          <a
            href="https://wa.me/917078410907?text=Hi%20I%20want%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className={btnSecondary}
          >
            Talk to Expert Now
          </a>
        </div>

      </div>
    </section>
  );
}
