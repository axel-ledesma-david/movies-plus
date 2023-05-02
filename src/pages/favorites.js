import ListMovies from '@/components/ListMovies/ListMovies'
import React, { useEffect, useState } from 'react'

const favorites = () => {

   const [ storage, setStorage ] = useState([])

    
   useEffect(()=>{
     setStorage(JSON.parse(localStorage.getItem("Favorites")))
   },[])

  return (
    <div className='d-flex justify-content-center align-items-center p-3 flex-column' >

       <h2 className='text-white' >Tus favoritos</h2>

       <div className='row mt-3 d-flex justify-content-center align-items-center gap-3' >
         {
          storage.length > 0 ? <ListMovies data={storage} /> : <h4>No hay favoritos!!</h4>
         }
       </div>
    </div>
  )
}

export default favorites