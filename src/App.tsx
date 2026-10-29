import { CallToAction } from './components/CallToAction.tsx';
import { Contact } from './components/Contact.tsx';
import { Features } from './components/Features.tsx';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Method } from './components/Method.tsx';

export default function App() {
  return (
    <div className="bg-paper font-sans text-ink antialiased selection:bg-lime selection:text-ink">
      <Header />
      <main>
        <Hero />
        <Features />
        <Method />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
