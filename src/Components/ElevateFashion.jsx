import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AvatarContainer from './AvatarContainer'

export const ElevateFashion = () => {
  return (
    
    <div className='flex lg:flex-row flex-col py-5 px-10 h-5/6 justify-between bg-transparent'>
        {/* first child container */}
        <div className='lg:w-1/2 w-full bg-[#EDE5DA] h-auto default-box justify-evenly lg:mx-5'>
            <div className='p-5 h-1/2'>
                <p className='text-black font-custom font-bold'>Elevate your Fashion</p>
                <h1 className='text-black text-4xl lg:text-6xl w-full lg:w-5/6 font-bold font-custom mt-10'>Where creatives unleash their fashion styles</h1>
            </div>

            <div className='h-1/2 flex flex-row justify-between items-end w-full'>
                <button className='bg-black  text-white px-4 py-2 m-5 rounded-3xl'>Shop Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                <img className="object-contain h-40 lg:h-64" alt='star img' src='./img/Star 4.png' />
            </div>
        </div>

        {/* second child container */}
        <div className='lg:w-1/2  w-full bg-transparent h-auto default-box justify-between mt-8 lg:mx-5'>
            {/* Image box */}
            <div className='w-full h-3/4 default-box'> <img className="object-fill h-full w-full" alt='Models img' src='./img/Frame 181.png' /> </div>
            {/* mini content  */}
            <div className='flex flex-col md:flex-row items-center justify-between my-5'>
                <div className='bg-[#E2D2C2]  default-box w-full md:w-1/2 h-52 mx-2 my-0 p-5 justify-between'>
                    <h3 className='text-xl font-bold font-custom'>Fashion Designers</h3>
                    <p>Hundreds of Creative Fashion Designers to serve you better with lot of creative styles to serve various purposes</p>
                    <AvatarContainer></AvatarContainer>
                </div>

                <div className='bg-[#E2D2C2]  default-box w-full md:w-1/2 h-52 mx-2 my-5 p-5 justify-between'>
                    <div className='w-full flex flex-row items-center justify-between'> <h3 className='text-xl font-bold font-custom'>Designs</h3> <FontAwesomeIcon className='text-xl font-bold font-custom' icon={faArrowRight} /> </div>
                    <p>Hundreds of Creative Fashion Designers to serve you better with lot of creative styles to serve various purposes</p>
                </div>
            </div>
        </div>
    </div>
  )
}
