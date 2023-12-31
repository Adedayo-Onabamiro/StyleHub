import React from 'react'
import { CustomSlider } from './Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const LatestCollections = () => {
  return (
    <div className='hidden md:flex flex-col items-center justify-evenly h-auto py-10 w-full'>
    <div className='flex flex-col items-center justify-evenly'>
        <h1 className='text-black font-custom font-bold text-2xl lg:text-3xl'>Explore Our Latest Collections</h1>
        <p className='text-center'>Explore Latest Design Collections by our Super Creative Fashion Designers for various and diverse groups of people</p>
    </div>

    <div className='flex flex-row h-auto w-11/12 lg:w-4/5 py-10'>
        <div className='w-1/2 m-5 h-auto bg-transparent flex items-center justify-center'>
        <CustomSlider></CustomSlider>
        </div>
        <div className='w-1/2 m-5 h-auto bg-transparent flex flex-col rounded-xl justify-center items-center'>
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
            <img className="object-cover h-auto w-auto" alt='African Model' src='./img/newspaperpic.jfif' />
            <button className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white rounded-full flex items-center px-4 py-2 cursor-pointer  hover:bg-opacity-100"> <span className="mr-2">Shop Now</span> <FontAwesomeIcon icon={faArrowRight} /> </button>
        </div>
        </div>
    </div>
    </div>
  )
}
