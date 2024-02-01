'use client'
import { MovieContext } from '@/Context/MovieContext'
import React, { useContext } from 'react'
import stars from '../Assets/AllStars.jpg'
import Image from 'next/image'
import Link from 'next/link'

function MovieList() {
    const { MovieLis, setId } = useContext(MovieContext)
    

    return (
      <div className='bg-BG p-3 md:p-6 gap-4 space-y-8'>
            <h3 className='text-white text-3xl font-bold tracking-wide'>Series
            <span className='text-red-600'> List</span></h3>
      <div className=' grid grid-cols-2  xs:grid-cols-3 lg:grid-cols-4 gap-y-12 place-items-center'>
          {
                    MovieLis && MovieLis.map((item) => {
                 
                  let src
                        if (item.show.image) {
                       src = item.show.image.medium
                        }
                  return (
                    <div key={item.show.id} className='space-y-2'>
                      {
                        item.show.name === 'All Stars' ? <Image src={stars} alt='movie image' className='rounded-md h-[10em] w-[7em] md:h-[17.5em] md:w-[12em]' /> :
                          <img src={src} className='rounded-md h-[10em] md:h-auto w-auto'  />
                      }
                          
                          <h3 className='text-white text-base sm:text-lg tracking-wide font-semibold'>{item.show.name}</h3>
                      <p className='text-gray-200 text-sm sm:text-base'>{item.show.averageRuntime} min - <span className='text-red-500 space-x-1'>{item.show.genres[0]} </span> </p>
                      
                        <div className='space-x-4'>
                          <button onClick={()=>setId(item.show.id)}
                              className='text-white tracking-wide border w-12 text-center hover:border-red-500 hover:text-red-500'><Link href='/View'>View</Link></button>
                          <button onClick={()=>setId(item.show.id)}
                          className='text-white tracking-wide border w-12 text-center hover:border-red-500 hover:text-red-500'><Link href='/Form'>Ticket</Link></button>
                        </div>

                      </div>
                         

                  )
              })
          }
            </div>
            </div>
  )
}

export default MovieList