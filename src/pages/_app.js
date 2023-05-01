
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Navbar/Navbar.css'
import '../components/Footer/Footer.css'
import '../styles/stylesIndex.css'
import '../pages/detail/detail.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import FavoritesContext from '@/context/FavoritesContext'

export default function App({ Component, pageProps }) {



  return (
    <FavoritesContext>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </FavoritesContext>
  )
}
