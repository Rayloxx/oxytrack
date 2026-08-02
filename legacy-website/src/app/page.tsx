import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Products from "@/components/sections/Products";
import Dashboard from "@/components/sections/Dashboard";
import Industries from "@/components/sections/Industries";
import WhyOxyTrack from "@/components/sections/WhyOxyTrack";
import Journey from "@/components/sections/Journey";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Products />
      <Dashboard />
      <Industries />
      <WhyOxyTrack />
      <Journey />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
