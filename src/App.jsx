import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ReputationSection from "./sections/ReputationSection";
import AboutSection from "./sections/AboutSection";

export default function App() {
  return (
    <div className=" bg-white">
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ReputationSection />
        <AboutSection />
      </main>
    </div>
  );
}
