import React from 'react'

export const Featured = () => {
  return (
    <div className='flex flex-col  py-5 px-20 h-screen justify-center items-center border border-black'>
      <h1 className='text-black font-custom font-bold text-3xl'>Featured</h1>

      <div className='flex flex-col border border-black h-4/5 w-full items-center justify-evenly'>
        <div className='flex flex-row border border-black h-4/5 w-full items-center justify-evenly'>
          <div className='h-5/6 w-2/4 bg-transparent default-box justify-evenly mx-2'>
            <img className='object-cover h-full w-full rounded-3xl' src='./img/f1.jfif' />
          </div>
          <div className='h-5/6 w-2/5 bg-transparentdefault-box justify-evenly mx-2'>
            <img className='object-cover h-full w-full rounded-3xl' src='./img/f2.jfif' />  
          </div>
        </div>

        <div className='flex flex-row border border-black h-4/5 w-full items-center justify-evenly'>
          <div className='h-5/6 w-2/5 bg-transparentdefault-box justify-evenly mx-2'>
            <img className='object-cover h-full w-full rounded-3xl' src='./img/f3.jfif' />  
          </div>
          <div className='h-5/6 w-2/4 bg-transparent default-box justify-evenly mx-2'>
            <img className='object-cover h-full w-full rounded-3xl' src='./img/f4.jfif' />
          </div>
        </div>
      </div>
    </div>
  )
}
