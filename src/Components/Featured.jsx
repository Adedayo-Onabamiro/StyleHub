import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Featured = () => {
  return (
    <div className='flex flex-col py-5 px-20 h-fit justify-center items-center'>
      <div className='w-full h-auto m-8 text-center'> <h1 className='text-black font-custom font-bold text-3xl '>Featured</h1> </div>

      <div className='flex flex-col h-4/5 w-full items-center justify-evenly'>
        <div className="grid grid-cols-12 gap-4 h-3/5 w-full">
          {/* First item with width of 60% */}
          <div className="col-span-7 h-full relative">
            <img className='object-cover h-96 w-full rounded-3xl' src='./img/f1.jfif' alt="Image 1" />
            <div className="absolute bottom-16 left-4 text-white text-2xl font-bold font-custom my-10 "> Afro Wear Collection Exclusive Series </div>
            <button className="absolute bottom-2 left-2 text-black bg-white bg-opacity-70 rounded-full px-4 py-2 my-6 flex items-center"> Shop Now <FontAwesomeIcon className=' px-1 font-custom' icon={faArrowRight} /> </button>
          </div>

          {/* Second item with width of 40% (right) */}
          <div className="col-span-5 h-full relative">
            <img className='object-cover h-96 w-full rounded-3xl' src='./img/f2.jfif' alt="Image 2" />
            <div className="absolute bottom-16 left-4 text-white text-2xl font-bold font-custom my-10"> Bottega Veneta Women Exclusive Series </div>
            <button className="absolute bottom-2 left-2 text-black bg-white bg-opacity-70 rounded-full px-4 py-2 flex items-center my-6"> Shop Now <FontAwesomeIcon className=' px-1 font-custom' icon={faArrowRight} />  </button>
          </div>

          {/* Third item with width of 40% (left) */}
          <div className="col-span-5 col-start-1h-full relative">
            <img className='object-cover h-96 w-full rounded-3xl' src='./img/f3.jfif' alt="Image 3" />
            <div className="absolute bottom-16 left-4 text-white text-2xl font-bold font-custom my-10"> Street Wear  Style Trend Collection </div>
            <button className="absolute bottom-2 left-2 text-black bg-white bg-opacity-70 rounded-full px-4 py-2 flex items-center my-6"> Shop Now <FontAwesomeIcon className=' px-1 font-custom' icon={faArrowRight} />  </button>
          </div>

          {/* Fourth item with width of 60% */}
          <div className="col-span-7 col-start-6 h-full relative">
            <img className='object-cover h-96 w-full rounded-3xl' src='./img/f4.jfif' alt="Image 4" />
            <div className="absolute bottom-16 left-4 text-white text-2xl font-bold font-custom my-10"> Alte’ Collection Style Trend </div>
            <button className="absolute bottom-2 left-2 text-black bg-white bg-opacity-70 rounded-full px-4 py-2 flex items-center my-6"> Shop Now <FontAwesomeIcon className=' px-1 font-custom' icon={faArrowRight} />  </button>
          </div>
        </div>
      </div>
    </div>
  )
}
