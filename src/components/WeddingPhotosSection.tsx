import { Image as ImageIcon } from 'lucide-react';

const WeddingPhotosSection = () => {
  return (
    <section id="wedding-photos" className="py-20 bg-wedding-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
            Wedding Photos
          </h2>
          <div className="flex items-center justify-center gap-2 text-wedding-gold">
            <ImageIcon className="h-6 w-6" />
          </div>
        </div>

        <p className="font-serif text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          After the wedding, we’ll select our favorite photos and publish them here
          in a dedicated gallery. We’ll update this page as soon as they’re ready,
          so you can relive the most beautiful moments with us.
        </p>

        <p className="font-serif text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
          If you have shots you’d like to share, feel free to send them to us —
          we’ll be happy to take a look and include a few in the final selection.
        </p>
      </div>
    </section>
  );
};

export default WeddingPhotosSection;


