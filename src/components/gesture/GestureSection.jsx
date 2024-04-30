import React from 'react';

const GestureSection = () => {
  const actions = [
    {
      label: 'VOLUNTEER',
      imageUrl: '/assets/connect1.png',
      alt: 'Volunteer'
    },
    {
      label: 'GIVE',
      imageUrl: '/assets/connect2.png',
      alt: 'Give'
    },
    {
      label: 'CONNECT',
      imageUrl: '/assets/other1.jpg',
      alt: 'Connect'
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Want to be a part of this movement?
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-stretch gap-4">
          {actions.map((action, index) => (
            <div key={index} className="flex-1 min-w-[24rem] max-w-xs relative h-96"> {/* Adjusted for responsive sizing and full coverage */}
              <img
                src={action.imageUrl}
                alt={action.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-lg" // Ensure the image covers the area properly
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-lg">
                <h3 className="text-white text-3xl lg:text-5xl font-bold text-center">{action.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GestureSection;
