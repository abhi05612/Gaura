import { container, btnPrimary, btnSecondary } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1220 0%, #0E1628 100%)" }}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(244,196,48,0.06) 0%, transparent 70%)" }} />

      <div className={`${container} relative z-10 flex flex-col items-center text-center`}>

        <h2
          className="font-bold text-[28px] md:text-[46px] leading-[1.2] text-white mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Still Confused About Your Future?
        </h2>

        <p className="text-[16px] md:text-[17px] leading-[1.7] max-w-[600px] mb-8" style={{ color: "#B8C0D9" }}>
          Get clear answers and personalized guidance for your life, career, relationships, and business.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-5">
          <a
            href="https://wa.me/919457545344?text=Hi%20I%20want%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L0 24l6.335-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z" />
            </svg>
            Chat on WhatsApp Now
          </a>
          <a
            href="https://wa.me/919457545344?text=Hi%20I%20want%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className={btnSecondary}
          >
            Book Consultation
          </a>
        </div>

        <p className="text-[14px]" style={{ color: "#B8C0D9" }}>
          Trusted by <span className="font-semibold text-white">5000+</span> clients across India
        </p>

      </div>
    </section>
  );
}
