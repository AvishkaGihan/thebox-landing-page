import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ReputationSection from "./sections/ReputationSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import AchievementsSection from "./sections/AchievementsSection";
import ConsultationBanner from "./sections/ConsultationBanner";
import ProjectsGallery from "./sections/ProjectsGallery";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className=" bg-white">
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ReputationSection />
        <AboutSection />
        <ServicesSection />
        <AchievementsSection />
        <ConsultationBanner />
        <ProjectsGallery />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
