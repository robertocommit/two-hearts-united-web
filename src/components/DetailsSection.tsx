import { MapPin, Clock, Calendar, Utensils, Bus } from "lucide-react"

const DetailsSection = () => {
  return (
    <section id="details" className="py-20 bg-gradient-to-br from-wedding-blush to-wedding-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-6">Wedding Details</h2>
          <p className="font-serif text-xl text-gray-600">Join us for a day of love, laughter, and celebration</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ceremony Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-red-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">Ceremony</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-wedding-rose mr-3" />
                <span className="text-gray-700">09:45 AM</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-wedding-rose mr-3 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Standesamt Steglitz-Zehlendorf "Hochzeitsvilla"</p>
                  <p className="text-gray-600">Teltower Damm 10</p>
                  <p className="text-gray-600">14169 Berlin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reception Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center">
                <Utensils className="w-8 h-8 text-red-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">Reception</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-wedding-rose mr-3" />
                <span className="text-gray-700">After the Ceremony</span>
              </div>
              <div className="flex items-start">
                <Bus className="w-5 h-5 text-wedding-rose mr-3 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">An elegant restaurant will follow after the ceremony.</p>
                  <p className="text-gray-600">We will all reach the restaurant together by public bus.</p>
                  <p className="text-gray-600">Please come by public transport, as there is no need to bring a car.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6 text-center">Important Information</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Dress Code</h4>
              <p className="text-gray-600">Autumn Chic & Elegant</p>
              <p className="text-gray-600">Men should avoid wearing green.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Pictures</h4>
              <p className="text-gray-600">
                A professional photographer will be capturing special moments during our ceremony. Please relax and
                enjoy!
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Transport</h4>
              <p className="text-gray-600">We will travel together by bus to the reception. No need for cars.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsSection
