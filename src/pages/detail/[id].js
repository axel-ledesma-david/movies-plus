import { useContext, useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FavContext } from '@/context/FavoritesContext';
const detailPage = ({ detail }) => {
  const [click, setClick] = useState(false)
  const [favStorage, setFavStorage] = useState([])
  const { addMovie, fav, setFav } = useContext(FavContext)


  useEffect(() => {
    setFavStorage(JSON.parse(localStorage.getItem("Favorites")))

  }, [fav])

  const URLimg = 'https://image.tmdb.org/t/p/w500'

  const {genres} = detail

  const arrGenre = genres.map(item => item.name)

  const languages = detail.spoken_languages

  const arrLang = languages.map(lang => lang.name)


  const handleClickFav = () => {
    setClick(!click)
    addMovie(detail, detail.id, click)
    console.log("fav dentro de la funcion: ", fav)
  }



  if (typeof window !== 'undefined') {
    localStorage.setItem("Favorites", JSON.stringify(fav))
  }


  const existInStorage = favStorage.find(item => item.id === detail.id)


  console.log("fav fuera de la funcion: ", fav)

  console.log("CLICK? ", click)


  return (
    <div className={styles.containerDetail} >
      <div className='card mb-3 containerCardDetail p-3 border-0'>
        <div className='g-0 row d-flex' >
          <div className="col-md-4">
            <img src={`${URLimg + detail.poster_path}`} className="img-fluid rounded-start img-detail" alt={detail.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body p-5">
              <h5 className="card-title text-light">{detail.title}</h5>
              <p className="card-text text-light">{detail.overview}</p>
              <p className="card-text text-light"><b>Generos: </b>{arrGenre.join(", ")}</p>
              <p className="card-text text-light"><b>Idiomas:</b> {arrLang.join(", ")}</p>
              <h5 className="card-title text-light">{detail.release_date}</h5>
              <div className="alert alert-dark" role="alert">
                 <b>Puntos: </b> { detail.vote_average }
              </div>
              <p className='card-text text-light' ><b>Popularidad: </b>{Math.round(detail.popularity)}</p>
              <button className='btn outline-0' onClick={handleClickFav}>
                {
                  existInStorage ? <MdOutlineFavorite size={'2em'} color='red' /> : < MdOutlineFavoriteBorder size={'2em'} color='red' />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ query: { id } }) => {



  const api = `${process.env.URL_MOVIE + id}?${process.env.API_KEY}&language=es-ES`

  const response = await fetch(api)
  const detail = await response.json()

  return {
    props: {
      detail: detail
    }
  }

}

export default detailPage