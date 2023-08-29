import { Podcast, Youtube } from "../../frames"


export const Social = () => {

    return (
        <>
            <h1>Último video en Youtube</h1>
            <div className="posts-youtube" data-aos="fade-left">
                < Youtube 
                    urlVideo={'https://www.youtube.com/watch?v=2XpAS3Ne78Q'}
                    urlImage={'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675715963/miniaturas/ldpuyxahpjcqoua2ppkz.jpg'} 
                    description='LIBRERÍA vs. FRAMEWORK | DEFINICIÓN - DIFERENCIAS 👨‍💻'
                />
            </div>
            <h1>Podcast recomendados</h1>
            <div className="posts-podcast" data-aos="fade-left">
                < Podcast episode={'3oosd3Y7oM3DAsXusY7rai'} />
                < Podcast episode={'5fd78Wp41IhaoKWVKBoS3C'} />
            </div>
        </>
    )

}