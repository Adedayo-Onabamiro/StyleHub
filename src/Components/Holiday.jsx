import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Holiday = () => {
  return (
    <div className='flex flex-col items-center justify-evenly h-screen w-full'>

        <div className='flex flex-row h-4/6 w-5/6 rounded-xl bg-[#B1D7DA]'>
            <div className='w-1/2 p-5 h-auto flex flex-col items-start justify-center'>
                <h1 className='text-black font-custom font-bold text-3xl'>Save 50% this Holiday Season</h1>
                <p>It’s time to revamp your fashion game without breaking the bank! Dive into our exclusive 50% off sale and discover unbeatable deals on the most coveted styles</p>
                <button className=" text-white bg-black rounded-full px-6 py-3 my-6 flex items-center"> Shop Now <FontAwesomeIcon className=' px-1 font-custom' icon={faArrowRight} /> </button>
            </div>
            <div className='w-1/2 bg-red-500 flex flex-col rounded-xl justify-center items-center'>
                <div className="relative w-full h-full rounded-xl ">
                    <img className="object-cover h-full w-full rounded-xl" alt='Save 50%' src='./img/s1.jfif' />
                </div>
            </div>
          
        </div>

        <div className="w-4/5 mx-auto rounded-lg p-4">
            <div className="flex items-center justify-between">
                {/* Left side */}
                <div className="w-1/2">
                <h1 className="text-3xl font-bold font-custom my-4">Join Our Newsletter</h1>
                <p className="text-sm ">Receive updates on our new arrivals and fashion trends</p>
                </div>

                {/* Right side */}
                <div className="w-1/2 flex items-center justify-end">
                <div className="bg-white border-2 border-black rounded-3xl flex items-center justify-between p-2">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className=" outline-none"
                    />
                    <button className="bg-black text-white px-4 py-2 rounded-3xl"> Subscribe </button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
