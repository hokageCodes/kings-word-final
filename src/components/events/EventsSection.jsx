import React, { useState, useEffect } from 'react';

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
  const slidesToShow = 4; // For desktop

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex(prevIndex =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex(prevIndex =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-yellow-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center text-left mb-8">
          <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 sm:mb-0">
            Catch up on our past <br />monthly and annual events
          </h2>
          <a href="https://youtube.com/kingswordcalgary8172?si=AqiMNKeBUnIy-DtJ"
            className="bg-black text-white py-4 px-6 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            View all events
          </a>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${activeIndex * (100 / (window.innerWidth < 768 ? 1 : slidesToShow))}%)` }}>
            {events.map((event, index) => (
              <div key={index} className="flex-none w-full sm:w-1/4">
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
          {events.length > 1 && (
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
