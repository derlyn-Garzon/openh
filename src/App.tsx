import { Catalog } from './components/Catalog.tsx';
import { Community, Donate } from './components/Community.tsx';
import { Footer } from './components/Footer.tsx';
import { Hero } from './components/Hero.tsx';
import { Navbar } from './components/Navbar.tsx';
import { SlideCarousel } from './components/SlideCarousel.tsx';
import { Team } from './components/Team.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink antialiased">
      <a
        href="#carrusel"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-pill focus:bg-grape-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Saltar al contenido
      </a>

      <Navbar />
      <main>
        <Hero />
        <SlideCarousel />
        <Team />
        <Catalog />
        <Community />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}
