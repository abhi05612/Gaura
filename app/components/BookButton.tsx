"use client";

export default function BookButton() {
  return (
    <button
      className="flex items-center justify-center h-[52px] px-7 rounded-xl font-semibold text-[15px] transition-all duration-200 border w-full sm:w-auto"
      style={{
        borderColor: "#F4C430",
        color: "#F4C430",
        fontFamily: "var(--font-poppins)",
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#F4C430";
        e.currentTarget.style.color = "#000";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#F4C430";
      }}
    >
      Book Consultation
    </button>
  );
}
