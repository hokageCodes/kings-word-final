import React, { useState } from 'react';

const EventsSection = () => {
  const events = [
    { title: 'Supernatural Canada', subtitle: 'Annual Worship Meeting', imageUrl: '/assets/Supernatural.png' },
    { title: 'Limitless', subtitle: 'Worship Meeting', imageUrl: '/assets/Limitless.png' },
    { title: 'Easter Sunday', subtitle: 'Easter Service', imageUrl: '/assets/Easter-Sunday-Service.png' },
    { title: 'Mr. & Mrs', subtitle: 'Love Series', imageUrl: '/assets/mr-mrs.png' },
    { title: 'His & Hers', subtitle: 'Love Series', imageUrl: '/assets/his-hers.png' },
    { title: 'Carol Service', subtitle: 'Christmas Carol Service', imageUrl: '/assets/Carol-Service.png' },
    { title: 'Cross Over Service', subtitle: 'New Years Eve', imageUrl: '/assets/Cross-Over-service.png' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const slidesToShow = 4;

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? events.length - slidesToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === events.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-yellow-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">
            Catch up on our past monthly and annual events
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${activeIndex * (100 / slidesToShow)}%)` }}>
            {events.map((event, index) => (
              <div key={index} className="flex-none w-1/4 min-w-full sm:min-w-0 sm:w-1/4">
                <div className="rounded overflow-hidden shadow-lg bg-white m-2">
                  <img
                    src={event.imageUrl}
                    alt={`Event ${event.title}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <div className="font-bold text-xl mb-2">{event.title}</div>
                    <p className="text-gray-700 text-base">{event.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {events.length > slidesToShow && (
            <>
              <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-r">
                &#9664;
              </button>
              <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-l">
                &#9654;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
