import React from 'react'
import Image from 'next/image'
import img1 from '../Assets/img 1.png'

function Hero() {
  return (
    <div className='bg-hero h-[100vh] bg-center bg-cover bg-fixed flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-y-4'>
      <div className='w-auto md:w-[50%] flex justify-center items-start h-full flex-col gap-y-4'>
        <h3 className='text-4xl tracking-wide font-bold text-white'>Movie <span className='text-red-600'>Mania</span></h3>
        <p className='text-white tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, officiis officia! Tempora, fugiat est, numquam eos explicabo iste corporis animi fuga libero, aut molestiae deserunt! Tempora voluptatem asperiores delectus fugit.</p>
      </div>

      <Image src={img1} alt='image' height={350}/>
      </div>
      
  )
}

export default Hero