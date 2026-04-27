import Image from "next/image";
import { container, btnPrimary } from "@/lib/constants";

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "https://i.pravatar.cc/40?img=47",
    text: "I was facing constant delays in my marriage. After consulting, I finally got clarity and things started improving within months. Highly recommended.",
  },
  {
    name: "Rahul Verma",
    avatar: "https://i.pravatar.cc/40?img=12",
    text: "I was very confused about my career. The guidance I received helped me take the right decision at the right time. Life-changing experience.",
  },
  {
    name: "Anjali Mehta",
    avatar: "https://i.pravatar.cc/40?img=32",
    text: "My relationship was going through a rough phase. The insights were surprisingly accurate and really helped me handle things better.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 star rating">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#F4C430" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24" style={{ backgroundColor: "#0B1220" }}>
      <div className={container}>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#F4C430" }}>
            TESTIMONIALS
          </p>
          <h2 className="font-bold text-[26px] md:text-[40px] leading-[1.2] text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Real Stories. Real Results.
          </h2>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible scrollbar-hide mb-12">
          {testimonials.map(({ name, avatar, text }) => (
            <div
              key={name}
              className="snap-start shrink-0 w-[280px] md:w-auto flex flex-col gap-4 p-6 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-[5px] hover:border-[#F4C430]/25 hover:shadow-[0_8px_32px_rgba(244,196,48,0.1)]"
              style={{ backgroundColor: "#121A2B", minHeight: 220 }}
            >
              {/* Quote icon */}
              <svg className="w-7 h-7 opacity-40" viewBox="0 0 24 24" fill="#F4C430" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Text */}
              <p className="text-[14px] leading-[1.7] flex-1" style={{ color: "#B8C0D9" }}>
                "{text}"
              </p>

              {/* Stars */}
              <Stars />

              {/* User */}
              <div className="flex items-center gap-3 pt-1 border-t border-white/5">
                <Image
                  src={avatar}
                  alt={name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold text-[14px] leading-none mb-0.5">{name}</p>
                  <p className="text-[12px]" style={{ color: "#B8C0D9" }}>Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-[16px] font-semibold text-white">
            Join <span style={{ color: "#F4C430" }}>5000+</span> Happy Clients
          </p>
          <a
            href="https://wa.me/919457545344?text=Hi%20I%20want%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            Start Your Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
