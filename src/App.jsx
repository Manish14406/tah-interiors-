import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service/:serviceId" element={<ServicePage />} />
            {/* 404 */}
            <Route path="*" element={
              <div className="pt-40 pb-20 text-center min-h-screen bg-[#FAF7F2]">
                <div className="font-serif font-bold text-7xl text-[#B88A2A] mb-4">404</div>
                <h1 className="font-serif font-bold text-3xl text-[#1F1F1F] mb-4">Page Not Found</h1>
                <p className="text-[#5C5C5C] mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-gold">Go Back Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
