'use client'
import { MovieContext } from '@/Context/MovieContext'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import star from '../Assets/AllStarsBig.jpg'
import imbd from '../Assets/imbd.svg'
import Link from 'next/link'


function View() {
    const { Obj } = useContext(MovieContext)
   
    
    return (

        <div className='backdrop-blur-md w-full md:w-[70vw] lg:h-[85vh]  md:mx-4 rounded-md flex flex-col md:flex-row items-center relative'>
            {
                Obj && 
                <>
                    <div className='px-4 my-4'>
                        { Obj.show.name === 'All Stars'? <Image src={star} alt='star' height={400} />:<img src={Obj.show.image.original} alt="" className=' h-[400px] lg:h-[85vh] ' />}
                    </div>
                    <div className='space-y-3 py-4 px-4 '>
                        <h3 className='text-4xl tracking-wide font-bold text-white'>{Obj.show.name}</h3>
                        <div className='text-white flex flex-col md:flex-row items-start gap-x-2 gap-y-3'>
                            <p>{Obj.show.averageRuntime}-min</p>
                            <span className='flex items-center gap-x-2'>
                            <Image src={imbd} alt='imbd' height={20} />:
                                <p>{Obj.show.rating.average}</p>
                                </span>
                            <p>{Obj.show.premiered}</p>
                            <p>Show type: {Obj.show.type}</p>
                            <p> {Obj.show.language}</p>
                        </div>
                        <p className='text-red-500 text-lg tracking-wide font-semibold'>{Obj.show.genres[0]} {Obj.show.genres[1]} {Obj.show.genres[2]}</p>
                        <div className='w-auto md:w-[38vw] text-white overflow-auto h-auto lg:h-52'>
                            { Obj.show.summary.slice(3, (Obj.show.summary.length - 4))}
                        </div>
                        <button className='nav'><Link href='/Form'>Buy Ticket</Link></button>

                    </div>
                    </> 
            }
            
        </div>
      
  )
}

export default View