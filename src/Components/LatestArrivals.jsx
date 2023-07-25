import React, { useState, useEffect, useRef } from 'react';
import { ArrivalSlider } from './ArrivalSlider';

export const LatestArrivals = () => {

  const Categories = [
    "Shirts",
    "Shorts",
    "Jackets",
    "Hoodies",
    "Trousers",
    "Shoes",
    "Caps",
]

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
    <div className='flex flex-col items-center justify-evenly h-3/4 w-full'>
        <div className=' h-1/5 w-full flex flex-col items-center justify-evenly'>
            <h1 className='text-black font-custom font-bold text-3xl'>Latest Arrivals by Category</h1>
            <div className=' flex items-center justify-center w-full h-1/3'>
                {Categories.map((category, index)=>(
                    <button className='bg-transparent px-5 py-2 font-semibold text-black rounded-3xl m-8 hover:text-white hover:bg-black' key={index}> {category} </button>
                ))}
            </div>
        </div>
        {/* <ImageSlider images={CatDetails} /> */}
        <div className='w-5/6 h-3/5 bg-transparent flex flex-row items-center justify-center px-12 py-3 cursor-grab hover:cursor-grabbing'>
          <ArrivalSlider></ArrivalSlider>
        </div>
        </div>
  )
}
