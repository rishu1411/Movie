'use client'
import React, { createContext, useEffect, useState } from 'react'

export const MovieContext = createContext()
    

function MovieProvider({ children }) {
    const [MovieLis, setMovieLis] = useState()
    const [Obj,setObj] = useState()
    const [id,setId] = useState()
    

    useEffect(() => {
        const url = 'https://api.tvmaze.com/search/shows?q=all'
        const fetchMovies = async () => {
            
            try {
                const response = await fetch(url)
                const data = await (response.json())
                setMovieLis(data)
                localStorage.setItem('newLis',JSON.stringify(data))
            }
            catch (err) {
                console.error(err)
            }
        }
        fetchMovies()
        setMovieLis(JSON.parse(localStorage.getItem('newLis')))
        
    }, [])

    
    useEffect(() => {
        MovieLis&&MovieLis.filter((item) =>{
            if (item.show.id === id) {
                setObj(item)
                localStorage.setItem('obj',JSON.stringify(item))
            }
        })
    }, [id])
    
    useEffect(() => {
        setMovieLis(JSON.parse(localStorage.getItem('newLis')))
        setObj(JSON.parse(localStorage.getItem('obj')))
    },[])
    
    

  return (
      <MovieContext.Provider value={{MovieLis,id,setId,Obj}}>{ children}</MovieContext.Provider>
  )
}

export default MovieProvider