import { container } from "@/lib/constants";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
      </svg>
    ),
    title: "Marriage Consultation",
    desc: "Get insights into marriage timing, compatibility, and obstacles affecting your relationship.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20H7a2 2 0 01-2-2v-1a5 5 0 015-5h4a5 5 0 015 5v1a2 2 0 01-2 2z" />
        <circle cx="9" cy="7" r="3" strokeLinecap="round" />
        <circle cx="15" cy="7" r="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Relationship Analysis",
    desc: "Understand emotional compatibility, conflicts, and future possibilities with your partner.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3l-4 4-4-4M8 12h8M8 15h5" />
      </svg>
    ),
    title: "Career Guidance",
    desc: "Get clarity on job changes, growth opportunities, and the right career path.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-8 4 4 3-5 4 9M3 21h18" />
      </svg>
    ),
    title: "Business Astrology",
    desc: "Make better business decisions, identify growth opportunities, and reduce financial risks.",
  },
];

export default function Services() {
  return (
    <>
      {/* Separator */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      <section id="services" className="py-16 md:py-24" style={{ backgroundColor: "#0E1628" }}>
        <div className={container}>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#F4C430", fontFamily: "var(--font-poppins)" }}>
              OUR SERVICES
            </p>
            <h2 className="font-bold text-[26px] md:text-[40px] leading-[1.2] text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              How We Can Help You
            </h2>
          </div>

          {/* 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group flex flex-col p-6 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#F4C430]/20"
                style={{ backgroundColor: "#121A2B" }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ backgroundColor: "rgba(244,196,48,0.1)", color: "#F4C430" }}>
                  {icon}
                </div>
                <h3 className="text-white font-semibold text-[17px] mb-2 leading-snug" style={{ fontFamily: "var(--font-poppins)" }}>
                  {title}
                </h3>
                <p className="text-[13px] leading-[1.7] mb-5 flex-1" style={{ color: "#B8C0D9", fontFamily: "var(--font-poppins)" }}>
                  {desc}
                </p>
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold transition-colors duration-200 hover:gap-2"
                  style={{ color: "#F4C430", fontFamily: "var(--font-poppins)" }}
                >
                  Know More <span>→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
