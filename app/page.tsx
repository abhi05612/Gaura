import HeroSection from "./components/HeroSection";
import Problems from "./components/Problems";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Problems />
      <Services />
      <WhyUs />
      <Testimonials />
      <About />
      <CTA />
    </main>
  );
}
