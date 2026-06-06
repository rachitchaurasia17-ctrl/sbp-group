import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import MarqueeStrip from '../components/MarqueeStrip';
import StatsSection from '../components/StatsSection';
import PhilosophySection from '../components/PhilosophySection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import WhySection from '../components/WhySection';
import FoundersSection from '../components/FoundersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const location = useLocation();

  // When arriving from another page with a scroll target, ease to it.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
      }
    }
  }, [location.state]);

  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <StatsSection />
      <FoundersSection />
      <PhilosophySection />
      <ProjectsSection />
      <ServicesSection />
      <WhySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
