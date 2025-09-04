
import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-wedding-rose mr-2" />
            <span className="font-script text-3xl text-wedding-blush">Trang & Roberto</span>
            <Heart className="w-6 h-6 text-wedding-rose ml-2" />
          </div>
          <p className="font-serif text-lg text-gray-300 mb-6">
            The 7th of November 2025 • Berlin, Germany
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Contact Trang</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>da.trang91@yahoo.de</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(+49) 152 59022076</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Contact Roberto</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>robimalco@gmail.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(+49) 176 21567199</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            Made with <Heart className="w-4 h-4 inline text-wedding-rose" /> for our special day
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
