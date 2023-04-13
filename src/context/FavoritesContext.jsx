import { createContext, useState, useEffect } from 'react'


export const FavContext = createContext([])

const FavoritesContext = ({ children }) => {

    
    const [fav, setFav] = useState([])
    useEffect(()=>{
        localStorage.setItem("Favorites", JSON.stringify(fav))
    },[fav])


    const addMovie = (data, id, click) => {

        const itemExists = fav.find( item => item.id === id )
        
        data.click = click

        if (itemExists){
            const dataFilter = fav.filter( item => item.id !== id )
            console.log("FAV FILTER: ",dataFilter)
            
            setFav(dataFilter)
            
        } else {
            setFav([...fav, data])
        }

    }

    


    return (
        <FavContext.Provider value={{ setFav, addMovie, fav }} >
            {children}
        </FavContext.Provider>
    )
}

export default FavoritesContext