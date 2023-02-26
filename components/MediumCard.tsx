import Image from 'next/image'
import React from 'react'

export default function MediumCard(props: any) {
    const {img, title} = props
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative h-80 w-80' ><Image className='rounded-lg' src={img} alt='No image' fill/></div>
      <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}
