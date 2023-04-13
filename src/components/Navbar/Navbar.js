import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {

    const [genres, setGenres] = useState([])


    const api = 'https://api.themoviedb.org/3/genre/movie/list?api_key=6bf591cad6e4cf5174a3c96637ab3530&language=es-ES'
   
    useEffect(() => {
       
        axios.get(api)
            .then((res) => res.data)
            .then(data => { setGenres(data.genres) })
    }, [])


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold text-light" href='/'>MoviesPlus</Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-style px-5">
                        <li className="nav-item">
                            <Link className="nav-link active fw-semibold text-light" aria-current="page" href='/'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-semibold text-light" href='/favorites' >Favoritos</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Generos
                            </a>
                            <ul className="dropdown-menu bg-secondary">
                                {
                                    genres.map(genre => (
                                        <li key={genre.id} ><Link className="dropdown-item text-light" href={`/movies/${genre.id}`} >{genre.name}</Link></li>
                                    ))
                                }
                               
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

