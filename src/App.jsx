import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ReputationSection from "./sections/ReputationSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";

export default function App() {
  return (
    <div className=" bg-white">
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ReputationSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </div>
  );
}
