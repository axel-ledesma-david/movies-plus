
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Navbar/Navbar.css'
import '../components/Footer/Footer.css'
import '../styles/stylesIndex.css'
import '../pages/detail/detail.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import FavoritesContext/* , {FavContext}  */from '@/context/favoritesContext'
/* import { useContext, useEffect } from 'react' */

export default function App({ Component, pageProps }) {

 /*  const { fav } = useContext(FavContext)

  useEffect(()=>{
    localStorage.setItem("Favorites", JSON.stringify(fav))
  },[fav]) */

  return (
    <FavoritesContext>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </FavoritesContext>
  )
}
