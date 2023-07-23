import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from 'react';


const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
  
    const handleSliderDrag = (e) => {
      const sliderElement = sliderRef.current;
      const sliderWidth = sliderElement.offsetWidth;
      const sliderScrollLeft = sliderElement.scrollLeft;
      const scrollX = e.nativeEvent.clientX;
  
      if (scrollX < sliderScrollLeft + sliderWidth / 2) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };
  
    return (
      <div
        ref={sliderRef}
        className='w-full h-4/5 bg-transparent flex flex-row items-center justify-center overflow-x-scroll snap-x px-12 py-3 scroll-snap-type-mandatory no-scrollbar'
        onDragEnd={handleSliderDrag}
        onTouchEnd={handleSliderDrag}
      >
        {images.map((item, index) => (
          <div
            key={index}
            className={'max-w-xs m-5 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300'}
            style={{ scrollSnapAlign: 'center' }}
          >
            {/* Top of the card with the pill div */}
            <div className="relative">
              <div className="bg-white opacity-75 text-sm text-black font-bold rounded-full px-4 py-2 absolute top-4 right-4">
                {item.cat}
              </div>
              <img src={item.img} alt="Person" className="w-80 h-80 object-cover" />
            </div>
  
            {/* Bottom of the card */}
            <div className="px-4 py-3 flex flex-row">
              <div className='w-1/2'>
                <div className="text-lg  font-bold text-gray-800 mb-auto">{item.item}</div>
                <div className="text-lg font-bold text-gray-800 mb-auto">${item.price}</div>
              </div>
  
              {/* Black button with Font Awesome arrow */}
              <div className="w-1/2 flex items-end justify-end">
                <button className="bg-black text-white px-6 py-3 rounded-3xl flex items-center">
                  <FontAwesomeIcon className='font-custom text-2xl' icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const Categories = [
    "Shirts",
    "Shorts",
    "Jackets",
    "Hoodies",
    "Trousers",
    "Shoes",
    "Caps",
]

export const LatestArrivals = () => {

    const CatDetails = [
        {
            cat: "Men's T-shirt",
            item: "Nike Dri-FIT",
            price: "30",
            img: "./img/cat1.jfif",
        },
        {
            cat: "Men's Sneakers",
            item: "Nike Boot",
            price: "130",
            img: "./img/cat2.jfif",
        },
        {
            cat: "Men's Sneakers",
            item: "Nike Max Air",
            price: "260",
            img: "./img/cat3.jfif",
        },
        {
            cat: "Men's T-shirt",
            item: "Nike Tees",
            price: "27",
            img: "./img/cat4.jfif",
        },
        {
            cat: "Men's T-shirt",
            item: "Nike Tees",
            price: "34",
            img: "./img/cat5.jfif",
        },
    ]
    
  return (
    <div className='flex flex-col items-center justify-evenly h-screen w-full'>
        <div className=' h-1/5 w-full flex flex-col items-center justify-evenly'>
            <h1 className='text-black font-custom font-bold text-3xl'>Latest Arrivals by Category</h1>
            <div className=' flex items-center justify-center w-full h-1/3'>
                {Categories.map((category, index)=>(
                    <button className='bg-transparent px-5 py-2 font-semibold text-black rounded-3xl m-8 hover:text-white hover:bg-black' key={index}> {category} </button>
                ))}
            </div>
        </div>
        <ImageSlider images={CatDetails} />
        </div>
  )
}
