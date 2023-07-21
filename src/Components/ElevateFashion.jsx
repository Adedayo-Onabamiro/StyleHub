import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AvatarContainer from './AvatarContainer'

export const ElevateFashion = () => {
  return (
    
    <div className='flex flex-row  py-5 px-20 h-auto'>
        {/* first child container */}
        <div className='w-2/4 bg-[#EDE5DA] h-auto mx-1 default-box'>
            <div className='p-5'>
                <p className='text-black font-custom font-bold'>Elevate your Fashion</p>
                <h1 className='text-black text-5xl w-3/4 font-bold font-custom'>Where creatives unleash their fashion styles</h1>
            </div>

            <div className='flex flex-row justify-between items-end w-full'>
                <button className='bg-black  text-white px-4 py-2 m-5 rounded-3xl'>Shop Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                <img class="object-contain h-60" alt='star img' src='./img/Star 4.png' />
            </div>
        </div>

        {/* second child container */}
        <div className='w-2/4 bg-transparent h-auto mx-1 default-box'>
            {/* Image box */}
            <div className='w-full h-3/4 default-box border border-red-500'> <img class="object-fill h-full w-full" alt='Models img' src='./img/Frame 181.png' /> </div>
            {/* mini content  */}
            <div className='bg-[#EDE5DA]  default-box'>
                <h3>Fashion Designers</h3>
                <p>Hundreds of Creative Fashion Designers to serve you better with lot of creative styles to serve various purposes</p>
                <AvatarContainer></AvatarContainer>
            </div>
        </div>
    </div>
  )
}
