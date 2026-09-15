import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Routes from '@/pages/Routes';
import TouristPlaces from '@/pages/TouristPlaces';
import Fleet from '@/pages/Fleet';
import Gallery from '@/pages/Gallery';
import Reviews from '@/pages/Reviews';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const navigate = (p: string) => {
    window.history.pushState({}, '', p);
    setPath(p);
  };

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const renderPage = () => {
    switch (path) {
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/routes':
        return <Routes />;
      case '/tourist-places':
        return <TouristPlaces />;
      case '/fleet':
        return <Fleet />;
      case '/gallery':
        return <Gallery />;
      case '/reviews':
        return <Reviews />;
      case '/faq':
        return <FAQ />;
      case '/contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPath={path} onNavigate={navigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
