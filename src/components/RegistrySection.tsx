import { Gift } from 'lucide-react';

const RegistrySection = () => {
  return (
    <section id="registry" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="text-center bg-wedding-cream p-12 rounded-lg animate-fade-in max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Gift className="w-12 h-12 text-primary mr-3" />
            <h3 className="font-serif text-3xl font-semibold text-gray-800">
              Our Dream Honeymoon
            </h3>
          </div>
          <p className="text-gray-600 mb-8 text-lg">
            Your presence is the greatest gift of all, but if you'd like to contribute to our travels and memories, we'd be so grateful for your generosity.<br/>
            We're planning an amazing honeymoon adventure—destination to be revealed!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrySection;
