const StorySection = () => {
  const timeline = [
    {
      year: "2020",
      title: "First Meeting",
      description: "We met online playing chess in 2020. Our first conversation started over a close match, and soon we were chatting between moves. Next time we played, he suggested we make it interesting with a friendly bet—the winner would get to choose a wish."
    },
    {
      year: "2021",
      title: "First Date",
      description: "Roberto won the match and he used his wish to ask Trang out. On our first date in 2021, Roberto made risotto with truffles from the Piedmont region. Perhaps, in the quiet glow of that dinner, he had already started to win her heart."
    },
    {
      year: "2022",
      title: "Moving In Together",
      description: "In 2022, we moved in together. We were lucky enough to find a fantastic apartment in Steglitz, and soon we also fell in love with Steglitz itself—it became our Berlin, a neighborhood that felt like home and where our shared life truly started to blossom."
    },
    {
      year: "2023",
      title: "Year of Change",
      description: "2023 was a year of big professional changes for both of us. Amidst the transitions, our relationship only grew stronger, proving that we were not just partners in love, but also in life’s challenges."
    },
    {
      year: "2024",
      title: "The Proposal",
      description: "Roberto proposed during a ping pong match at our favourite spot in 2024. In the middle of a playful rally, he paused, pulled out a ring, and dropped to one knee beside the table. Trang, caught off guard and overjoyed, said yes!"
    },
    {
      year: "2025",
      title: "Our Wedding Day",
      description: "And now, we're ready to celebrate our love with all of our favorite people at the charming Standesamt in Steglitz."
    }
  ];

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-6">
            How we met
          </h2>
          <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto">
            Every love story is beautiful, and ours is just getting started. Here’s how our journey began and where it’s taking us.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-wedding-rose to-wedding-gold hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-wedding-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="font-script text-2xl text-primary mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="md:w-2/12 flex justify-center my-4 md:my-0">
                  <div className="w-4 h-4 bg-wedding-gold rounded-full border-4 border-white shadow-lg z-10" />
                </div>

                {/* Spacer */}
                <div className="md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
