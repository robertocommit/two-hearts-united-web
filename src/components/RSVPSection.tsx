import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RSVPSection = () => {
  const { toast } = useToast();

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-wedding-cream to-wedding-blush">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-6">
            RSVP
          </h2>
          <p className="font-serif text-xl text-gray-600">
            Please confirm your attendance by September 20th, 2025.<br/>
            When sending your RSVP via WhatsApp, please include:
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl animate-fade-in text-center">
          <ol className="text-lg text-gray-700 font-serif mb-8 text-left max-w-lg mx-auto list-decimal list-inside">
            <li>Number of guests attending</li>
            <li>Names of all guests</li>
            <li>Any dietary requests (vegan, vegetarian, allergies, etc.)</li>
          </ol>
          <a
            href="https://wa.me/?text=I%20would%20like%20to%20RSVP%20for%20Trang%20and%20Roberto%27s%20wedding!%20Guests%3A%20%3Cnames%3E%2C%20Number%3A%20%3Cnumber%3E%2C%20Diet%3A%20%3Cdiet%20requests%3E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white py-4 px-8 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg text-xl"
          >
            RSVP via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
