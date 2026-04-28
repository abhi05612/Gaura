import Image from "next/image";
import BookButton from "./BookButton";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center"
      style={{ backgroundColor: "#0B1220" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/75 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col max-w-[520px]">

            {/* Label — tight spacing above heading */}
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ color: "#F4C430", fontFamily: "var(--font-poppins)" }}
            >
              GUIDANCE • CLARITY • DESTINY
            </p>

            {/* Heading — dominant, generous line-height */}
            <h1
              className="font-bold text-[34px] md:text-[54px] leading-[1.12] mb-5"
              style={{ fontFamily: "var(--font-playfair)", color: "#ffffff" }}
            >
              Find Clarity, Unlock{" "}
              <span style={{ color: "#F4C430" }}>Your Best Future.</span>
            </h1>

            {/* Subtext — readable line-height, clear separation from heading */}
            <p
              className="text-[16px] md:text-[17px] leading-[1.75] mb-8"
              style={{ color: "#B8C0D9", fontFamily: "var(--font-poppins)" }}
            >
              Get accurate astrology guidance for your love, career, marriage,
              business and life decisions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="https://wa.me/917078410907?text=Hi%20I%20want%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl font-semibold text-[15px] text-black transition-transform duration-200 hover:scale-105 w-full sm:w-auto"
                style={{
                  backgroundColor: "#F4C430",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L0 24l6.335-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
                Chat on WhatsApp
              </a>

              <BookButton />
            </div>

            {/* Trust element */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0B1220] overflow-hidden bg-[#1e2a40]"
                  >
                    <Image
                      src={`https://i.pravatar.cc/32?img=${i + 10}`}
                      alt={`Happy client ${i}`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p
                className="text-[13px] leading-snug"
                style={{ color: "#B8C0D9", fontFamily: "var(--font-poppins)" }}
              >
                Trusted by{" "}
                <span className="font-bold text-white">5000+</span> happy clients
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex justify-center items-center">
            <div className="animate-fade-in-up">
              <Image
                src="/zodiac-wheel3.png"
                alt="Zodiac wheel astrology illustration"
                width={600}
                height={600}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
