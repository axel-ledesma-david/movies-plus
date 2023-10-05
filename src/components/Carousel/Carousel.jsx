import Image from "next/image"

const Carousel = ({ pops }) => {



    const popsFilter = pops.filter((item, index) => index <= 4)


    const URLimg = 'https://image.tmdb.org/t/p/original'

    return (
        <div id="carouselExample" className="carousel slide" style={{ width: '100%' }}>
            <div className="carousel-inner">


                {
                    popsFilter.map(pop => (
                        <div className="carousel-item active" key={pop.id} >
                            <Image src={`${URLimg + pop.backdrop_path} `} className="d-block w-100" alt={pop.title} width={2000} height={470} quality={100} />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="display-2 fw-bold" >{pop.title}</h1>
                                <p className="fw-semibold" >{pop.overview}</p>
                            </div>
                        </div>
                    ))
                }


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel