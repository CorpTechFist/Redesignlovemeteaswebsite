import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { TrustBadges } from './components/TrustBadges';
import { Mission } from './components/Mission';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { PlantHistory } from './components/PlantHistory';
import { AboutMission } from './components/AboutMission';
import { Gallery } from './components/Gallery';
import { FollowUs } from './components/FollowUs';
import { Store } from './components/Store';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { Chatbot } from './components/Chatbot';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroCarousel />
          <TrustBadges />
          <Mission />
          <HowItWorks />
          <Stats />
          <PlantHistory />
          <AboutMission />
          <Gallery />
          <Store />
          <FollowUs />
          <Testimonials />
          <Newsletter />
          <ContactForm />
        </main>
        <Footer />
        <FloatingCTA />
        <Chatbot />
      </div>
    </CartProvider>
  );
}