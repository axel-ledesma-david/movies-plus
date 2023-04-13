import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className='footer d-flex flex-column align-items-center justify-content-center' >
        <hr />
        <h4 className='text-light' >MoviesPlus</h4>
        <p className='text-center text-white' >Página de películas hecha con la api themoviedb</p>
        <p className='text-light' ><b>Desarrollador: </b>Axel Ledesma</p>
        <div className='d-flex gap-3' >
            <a href="https://www.linkedin.com/in/axel-ledesma-b7350b1b7/" target='blank' >
                <AiFillLinkedin size={'3em'} color='white' />
            </a>
            <a href="https://github.com/axel-ledesma-david/movies-plus">
              <AiFillGithub size={'3em'} color='white' />
            </a>
        </div>
    </footer>
  )
}

export default Footer