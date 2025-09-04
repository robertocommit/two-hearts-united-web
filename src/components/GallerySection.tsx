import { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use all images from the public/special_moments folder
  const photos = [
  
    '/special_moments/first_pic.jpg',
    '/special_moments/aquila.jpg',
    '/special_moments/relocation.jpg',
    '/special_moments/temphelof.jpg',
    '/special_moments/2_first_pizza.jpeg',
    '/special_moments/bus_berlin.jpg',
    '/special_moments/tici.jpg', 
    '/special_moments/christmas_2024.jpg', 
    '/special_moments/berlin_berlinale.jpg',
    '/special_moments/vietnam.jpg',
    '/special_moments/lago_maggiore.jpg',
    '/special_moments/isola_madre.jpg'
    
      
    // Add more images here as needed
  
    // Add more if you add more images to public/
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-6">
            Our Moments
          </h2>
          <p className="font-serif text-xl text-gray-600">
            A collection of our favourite memories together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">View Photo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Enlarged photo"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Add TwoRings SVG icon inline with solid gold color
const TwoRings = () => (
  <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
    <g>
      <circle cx="12" cy="18" r="8" stroke="#D4AF37" strokeWidth="2.5" fill="#D4AF37" />
      <circle cx="24" cy="18" r="8" stroke="#D4AF37" strokeWidth="2.5" fill="#D4AF37" />
      <ellipse cx="18" cy="18" rx="2.5" ry="2.5" fill="#D4AF37" />
    </g>
  </svg>
);

export default GallerySection;
