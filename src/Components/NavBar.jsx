import React from 'react'
import Image from 'next/image'
import logo from '../Assets/Logo.svg'

function NavBar() {
  return (
    
    <div className='bg-stone-900 flex  px-4 justify-between '>
      <Image src={logo} alt="Logo" height={80} className='h-[60px] sm:h-[80px]'/>
      <ul className='hidden md:flex justify-end h-20 items-center gap-x-3 py-2 '>
              <li className=' text-gray-300 text-lg tracking-wide font-semibold hover:text-red-500 cursor-pointer'>Home</li>
              <li className=' text-gray-300 text-lg tracking-wide font-semibold hover:text-red-500 cursor-pointer'>Distribution</li>
              <li className=' text-gray-300 text-lg tracking-wide font-semibold hover:text-red-500 cursor-pointer'>Production</li>
              <li className=' text-gray-300 text-lg tracking-wide font-semibold hover:text-red-500 cursor-pointer'>About Us</li>
      </ul>
      <ul className='flex gap-x-3 items-center'>
        <li className='nav'>Log in</li>
        <li className=' nav hidden sm:block'>Sign up</li>
        </ul>
        </div>

   
  )
}

export default NavBar