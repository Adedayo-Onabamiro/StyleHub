import React from 'react'
import { ChildContainer } from './ChildContainer'

//this refers to a housing container to contain boxes
// and other things, best for a left and right setting

export const HousingContainer = () => {
  return (
    <>
      <div className='flex flex-row border-2 border-red-500 px-20'>
        <ChildContainer></ChildContainer>
        <ChildContainer></ChildContainer>
      </div>
    </>
  )
}
