import React, { useState } from 'react';

const Carousel = ({
    items,
  }: {
    items: string[];
  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex space-x-4 transition-transform duration-300 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {/* Your carousel item content */}
            <img src={item} alt={`slide-${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>

      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-l-md" onClick={prevSlide}>
        Previous
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-r-md" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
