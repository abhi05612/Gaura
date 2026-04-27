import Image from "next/image";
import { container, btnPrimary } from "@/lib/constants";

const highlights = [
  "Years of experience in Vedic astrology",
  "Personalized consultation for every client",
  "Practical guidance and remedies",
  "Trusted by hundreds of clients",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24" style={{ backgroundColor: "#0B1220" }}>
      <div className={container}>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          {/* Image */}
          <div className="w-full flex justify-center md:justify-start md:flex-1">
            <div className="relative w-[280px] md:w-full md:max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(244,196,48,0.1)]">
              <Image
                src="/shweta.jpg"
                alt="Astrologer"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: "#F4C430" }}>
              ABOUT THE ASTROLOGER
            </p>

            <h2 className="font-bold text-[26px] md:text-[40px] leading-[1.2] text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              Guiding You Towards Clarity and Better Decisions
            </h2>

            <div className="flex flex-col gap-3">
              <p className="text-[15px] leading-[1.7]" style={{ color: "#B8C0D9" }}>
                With over a decade of experience in Vedic astrology, I have helped hundreds of individuals navigate life's most challenging decisions — from marriage and relationships to career and business.
              </p>
              <p className="text-[15px] leading-[1.7]" style={{ color: "#B8C0D9" }}>
                My approach is personal and practical. I don't believe in generic predictions — every consultation is based on your unique birth chart, your specific situation, and what you truly need to move forward with confidence.
              </p>
            </div>

            {/* Highlights */}
            <ul className="flex flex-col gap-3 mt-1">
              {highlights.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: "rgba(244,196,48,0.15)", color: "#F4C430" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-[14px]" style={{ color: "#B8C0D9" }}>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <a
                href="https://wa.me/919457545344?text=Hi%20I%20want%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Talk to Expert Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
