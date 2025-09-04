import { useCallback } from 'react';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('story');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Wedding hero section"
    >
      {/* Background - Same as love story cards */}
      <div className="absolute inset-0 bg-wedding-cream" aria-hidden="true" />

      {/* Soft vignette for text contrast */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.04)_100%)]"
        aria-hidden="true"
      />

      {/* Background Pattern (decorative) */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-20 h-20 border border-wedding-gold rounded-full motion-safe:animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-wedding-rose rounded-full motion-safe:animate-pulse motion-safe:delay-300" />
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-wedding-sage rounded-full motion-safe:animate-pulse motion-safe:delay-700" />
        <div className="absolute bottom-40 right-10 w-24 h-24 border border-wedding-gold rounded-full motion-safe:animate-pulse motion-safe:delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center motion-safe:animate-fade-in">
        {/* Updated font to match h2 and names */}
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-stone-700 tracking-tight mb-2">
          Trang <span className="inline-flex items-center align-middle mx-2 md:mx-4">
            <Heart aria-hidden="true" className="h-7 w-7 md:h-9 md:w-9 text-wedding-rose motion-safe:animate-pulse" />
            <span className="sr-only">loves</span>
          </span>
          Roberto
        </h1>

        <div className="space-y-1 md:space-y-2 mb-8">
          <p className="font-serif text-lg md:text-2xl text-gray-700">
            are getting married
          </p>
          <p className="font-serif text-base md:text-xl text-gray-600">
            The 7th of November 2025
          </p>
          <p className="font-serif text-base md:text-xl text-gray-600">
            Berlin, Germany
          </p>
        </div>

        <div className="motion-safe:animate-fade-in-up motion-safe:delay-300 inline-flex">
          <a
            href="#story"
            onClick={handleScroll}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium transition-transform duration-300 hover:scale-105 hover:opacity-90 shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            Our Love Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator (optional) */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-primary/80 rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 motion-safe:animate-pulse" />
        </div>
      </div> */}

      {/* ... Continue with the rest of the content ... */}
    </section>
  );
};

export default HeroSection;