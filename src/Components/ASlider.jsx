import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const CatCard = ({ cat, item, price, img }) => (
        <div className="card flex-shrink-0 w-80 bg-white border border-gray-400 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300" >
            {/* Top of the card with the pill div */}
            <div className="relative">
                <div className="bg-white opacity-75 text-sm text-black font-bold rounded-full px-4 py-2 absolute top-4 right-4"> {cat} </div>
                <img src={img} alt="Person" className="w-full h-72 object-cover" />
            </div>

            {/* Bottom of the card */}
            <div className="px-4 py-3 flex flex-row">
            <div className="w-1/2">
                <div className="text-lg font-bold text-gray-800 mb-auto"> {item} </div>
                <div className="text-lg font-bold text-gray-800 mb-auto"> ${price} </div>
            </div>

            {/* Black button with Font Awesome arrow */}
            <div className="w-1/2 flex items-end justify-end">
                <button className="bg-black text-white px-5 py-3 rounded-3xl flex items-center">
                    <FontAwesomeIcon className="font-custom text-xl" icon={faArrowRight} />
                </button>
            </div>
            </div>
        </div>
);

const CardContainer = ({ data }) => (
  <div className="cards-containermy-6 flex rounded-lg bg-transparent px-4 py-1 space-x-4 relative overflow-x-auto no-scrollbar">
    {data.map((item, index) => (
      <CatCard
        key={index}
        cat={item.cat}
        item={item.item}
        price={item.price}
        img={item.img}
      />
    ))}
  </div>
);

export const ASlider = () => {
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
  ];

  return (
      <CardContainer data={CatDetails} />
  );
};
