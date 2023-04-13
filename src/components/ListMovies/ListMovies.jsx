import React from 'react'
import Link from 'next/link'

const ListMovies = ({ data }) => {


  const URLimg = 'https://image.tmdb.org/t/p/w500'
 



  return (
    <>
      {
        data.map(item => (
          <div key={item.id} className="card card-overlay p-0 border-0 rounded-0" style={{ width: '18rem', height: '25rem' }}>
            <img src={`${URLimg + item.poster_path}`} className="card-img-top img-overlay" style={{ height: '100%', width: '100%' }} alt={item.title} />
            <div className="card-body capa">
              <h5 className="card-title text-light">{item.title}</h5>
              <p className="card-text card-description text-light">{item.overview}</p>
              <div className='d-flex gap-3' >
                <Link href={`/detail/${item.id}`} className="btn btn-primary rounded-0 color-btn">More info</Link>
               
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ListMovies