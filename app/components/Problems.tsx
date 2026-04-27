import { container, btnPrimary } from "@/lib/constants";

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 0-3 .6-4.2 1.8A6 6 0 006 9c0 2 .8 3.8 2.1 5.1L12 18l3.9-3.9A7.2 7.2 0 0018 9a6 6 0 00-1.8-4.2A5.9 5.9 0 0012 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6M12 18v3" />
      </svg>
    ),
    title: "Marriage Delays",
    desc: "Facing delays or obstacles in getting married?",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20H7a2 2 0 01-2-2v-1a5 5 0 015-5h4a5 5 0 015 5v1a2 2 0 01-2 2z" />
        <circle cx="9" cy="7" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="7" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Relationship Issues",
    desc: "Conflicts, misunderstandings or breakups in your relationship?",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3l-4 4-4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 15h5" />
      </svg>
    ),
    title: "Career Confusion",
    desc: "Unsure about your career path or facing job instability?",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-8 4 4 3-5 4 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
      </svg>
    ),
    title: "Business Problems",
    desc: "Facing financial losses or lack of growth in business?",
  },
];

export default function Problems() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0B1220" }}>
      <div className={container}>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#F4C430" }}>
            ARE YOU FACING THESE PROBLEMS?
          </p>
          <h2 className="font-bold text-[26px] md:text-[40px] leading-[1.2] text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            We Provide Solutions For
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_32px_rgba(244,196,48,0.12)] hover:border-[#F4C430]/30 border border-transparent"
              style={{ backgroundColor: "#121A2B" }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: "rgba(244,196,48,0.1)", color: "#F4C430" }}>
                {icon}
              </div>
              <h3 className="text-white font-semibold text-[18px] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                {title}
              </h3>
              <p className="text-[14px] leading-[1.6]" style={{ color: "#B8C0D9" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20consultation" target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            Get Your Solution Now
          </a>
        </div>

      </div>
    </section>
  );
}
