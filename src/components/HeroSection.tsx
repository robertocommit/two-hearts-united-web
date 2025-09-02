import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background - Same as love story cards */}
      <div className="absolute inset-0 bg-wedding-cream" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border border-wedding-gold rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-wedding-rose rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-wedding-sage rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-40 right-10 w-24 h-24 border border-wedding-gold rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        {/* Removed logo above names */}
        
        {/* Updated font to match h2 and names */}
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-stone-600 mb-0">
          Trang & Roberto
        </h1>
        <div className="space-y-2 mb-6">
          <p className="font-serif text-xl md:text-2xl text-gray-700">
            are getting married
          </p>
          <p className="font-serif text-lg md:text-xl text-gray-600">
            April 2026
          </p>
          <p className="font-serif text-lg md:text-xl text-gray-600">
            Berlin, Germany
          </p>
        </div>

        <div className="animate-fade-in-up delay-300">
          <button 
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Our Love Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
