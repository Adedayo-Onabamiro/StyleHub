import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AvatarContainer from './AvatarContainer'

export const ElevateFashion = () => {
  return (
    
    <div className='flex flex-row  py-5 px-20 h-5/6 justify-between'>
        {/* first child container */}
        <div className='w-2/4 bg-[#EDE5DA] h-auto default-box justify-evenly mx-5'>
            <div className='p-5'>
                <p className='text-black font-custom font-bold'>Elevate your Fashion</p>
                <h1 className='text-black text-6xl w-5/6 font-bold font-custom'>Where creatives unleash their fashion styles</h1>
            </div>

            <div className='flex flex-row justify-between items-end w-full'>
                <button className='bg-black  text-white px-4 py-2 m-5 rounded-3xl'>Shop Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                <img className="object-contain h-80" alt='star img' src='./img/Star 4.png' />
            </div>
        </div>

        {/* second child container */}
        <div className='w-2/4 bg-transparent h-auto default-box justify-between mx-5'>
            {/* Image box */}
            <div className='w-full h-3/4 default-box'> <img className="object-fill h-full w-full" alt='Models img' src='./img/Frame 181.png' /> </div>
            {/* mini content  */}
            <div className='flex flex-row items-center justify-between my-5'>
                <div className='bg-[#E2D2C2]  default-box w-1/2 h-full mx-2 my-0 p-5 justify-between'>
                    <h3 className='text-xl font-bold font-custom'>Fashion Designers</h3>
                    <p>Hundreds of Creative Fashion Designers to serve you better with lot of creative styles to serve various purposes</p>
                    <AvatarContainer></AvatarContainer>
                </div>

                <div className='bg-[#E2D2C2]  default-box w-1/2 h-full mx-2  my-5 p-5 justify-between'>
                    <div className='w-full flex flex-row items-center justify-between'> <h3 className='text-xl font-bold font-custom'>Designs</h3> <FontAwesomeIcon className='text-xl font-bold font-custom' icon={faArrowRight} /> </div>
                    <p>Hundreds of Creative Fashion Designers to serve you better with lot of creative styles to serve various purposes</p>
                </div>
            </div>
        </div>
    </div>
  )
}
