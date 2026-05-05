import React from 'react'
import Card_Showcase from '../Card_Showcase'

const TechsPage = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <h1 className='mb-10 text-2xl text-center'>Techs Used</h1>
      <Card_Showcase />
    </div>
  )
}

export default TechsPage