'use client'
import { MovieContext } from '@/Context/MovieContext'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import star from '../../Assets/AllStarsBig.jpg'




function page() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [phone, setPhone] = useState()
    const [UserData, setUserData] = useState({
        name: '',
        email: '',
        date: '',
        phone: '',
        time:'',
    })
    const { Obj } = useContext(MovieContext)
    
    const handleCLick = () => {
        setUserData({
            ...UserData,
            name: name,
            email: email,
            date: date,
            phone:phone,
            time: time,
        })
        setDate('')
        setEmail('')
        setName('')
        setPhone('')
        setTime('')
    }
    useEffect(() => {
        localStorage.setItem(`User`,JSON.stringify(UserData))
    },[UserData])

  return (
      <div className=' bg-hero flex justify-center items-center h-auto lg:h-[90vh]'>
          {Obj &&
              <form onSubmit={(e) => e.preventDefault()} className='  backdrop-blur-md gap-y-4 w-full lg:w-[70%] mx-3  p-4 flex flex-col md:flex-row my-4 appearance-auto'>
                  <div className='px-4 my-4 self-center md:self-start'>
                      {Obj.show.name === 'All Stars' ? <Image src={star} alt='star' height={400} /> : <img src={Obj.show.image.original} alt="" className=' h-[400px] lg:h-[75vh] ' />}
                  </div>
                  <div className='flex flex-col gap-y-4 w-auto md:w-[35vw]'>
                      <h3 className='text-center text-white font-semibold '>Ticket Booking for <span className='text-red-500'>{ Obj.show.name}</span></h3>
                      <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} value={name} className='min-w-full px-3 py-1 border  outline-none' required/>
                      <input type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} className='min-w-full px-3 py-1 border  outline-none' required/>
                      <input type="tel" placeholder='Enter phone number' onChange={(e) => setPhone(e.target.value)} value={phone} className='min-w-full px-3 py-1 border  outline-none' required/>
                      <input type="date"  onChange={(e) => setDate(e.target.value)} value={date} className='min-w-full px-3 py-1 border  outline-none' required/>
                      <input type="time" onChange={(e) => setTime(e.target.value)} value={time} className='min-w-full px-3 py-1 border  outline-none' required/>
                     <button className='nav' onClick={handleCLick}>Submit</button>
                  </div>
              </form>}
          </div>

  )
}

export default page