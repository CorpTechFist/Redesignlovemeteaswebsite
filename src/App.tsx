import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { Chatbot } from './components/Chatbot';
import { CartProvider } from './context/CartContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { StorePage } from './pages/StorePage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'history' && <HistoryPage />}
        {currentPage === 'store' && <StorePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'reviews' && <ReviewsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
      <FloatingCTA />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </CartProvider>
  );
}