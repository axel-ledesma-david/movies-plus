import ListMovies from '@/components/ListMovies/ListMovies'
import Spinner from '@/components/Spinner/Spinner'
import React from 'react'

const ListGenre = ({ movies }) => {


    return (
        <div className='container'>
            <div className='row mt-3 d-flex justify-content-center align-items-center gap-3'>
                {
                    movies != [] ? <ListMovies data={movies} /> : <Spinner/>
                }
            </div>
        </div>
    )
}

export default ListGenre

export const getServerSideProps = async ({query: { genre }}) => {
    const api = `${process.env.DISCOVER_URL}&with_genres=${genre.toString()}`
    const res = await fetch(api)
    const movies = await res.json()

    return {
        props: {
            movies: movies.results
        }
    }

}