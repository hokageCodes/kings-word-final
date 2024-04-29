import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Welcome to KingsWord Canada",
      subtitle: "Home of the Supernatural",
      image: "../../assets/1.png",
      ctaLink: "https://www.youtube.com/@kingswordcalgary8172/streams",
      ctaText: "Worship with us",
    },
    {
      title: "Welcome to KingsWord Canada",
      subtitle: "Home of the Supernatural",
      image: "../../assets/2.png",
      ctaLink: "https://www.youtube.com/@kingswordcalgary8172/streams",
      ctaText: "Worship with us",
    },
    {
      title: "Welcome to KingsWord Canada",
      subtitle: "Home of the Supernatural",
      image: "../../assets/3.png",
      ctaLink: "https://www.youtube.com/@kingswordcalgary8172/streams",
      ctaText: "Worship with us",
    },
    // Add other slides similarly
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '80vh' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-white">
              {slide.title}
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 text-white">
              {slide.subtitle}
            </h3>
            <a
              href={slide.ctaLink}
              className="mt-8 bg-[#c27803] hover:bg-blue-800 text-white font-bold py-3 px-6 text-lg sm:text-xl transition duration-300 ease-in-out"
              target="_blank" rel="noopener noreferrer"
            >
              {slide.ctaText}
            </a>
          </div>
        </div>
      ))}

      <button type="button" className="absolute top-0 left-0 z-30 h-full p-4" onClick={prevSlide}>
        {/* Add icon or text for Previous button */}
      </button>
      
      <button type="button" className="absolute top-0 right-0 z-30 h-full p-4" onClick={nextSlide}>
        {/* Add icon or text for Next button */}
      </button>
    </div>
  );
};

export default HeroSection;
