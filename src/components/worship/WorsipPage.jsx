import React, { useState } from 'react';

const WorshipPage = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', city: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center items-center">

        {/* Slanted Image Gallery */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-4">
          {['/assets/other.jpg', '/assets/worship1.png', '/assets/worship2.png', '/assets/worship3.png'].map((src, index) => (
            <div key={index} className="col-span-1 relative h-40 md:h-56 lg:h-64">
              <img
                src={src} // Ensure the path is correct
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                style={{ transform: `translateY(${index % 2 === 0 ? '5px' : '-5px'})` }} // Consider removing if it causes layout issues
              />
            </div>
          ))}
        </div>
    
        {/* Form Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Worship with us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-gray-700 text-sm font-bold mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded shadow-sm"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded shadow-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded bg-white shadow-sm"
                  required
                >
                  <option value="">Select city</option>
                  <option value="city_one">Calgary</option>
                  <option value="city_two">Toronto</option>
                  <option value="city_three">Vancouver</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Worship with us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorshipPage;
