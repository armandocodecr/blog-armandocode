import { Podcast, Youtube } from "../../frames"


export const Social = () => {

    return (
        <>
            <h1>Último video en Youtube</h1>
            <div className="posts-youtube">
                < Youtube 
                    urlVideo={'https://www.youtube.com/watch?v=2XpAS3Ne78Q'}
                    urlImage={'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675715963/miniaturas/ldpuyxahpjcqoua2ppkz.jpg'} 
                    description='NO HAGAS ESTO, MEJOR HAS ESTO! | Versión SHORTCUTS DE VISUAL STUDIO CODE. 👨‍💻'
                />
            </div>
            <h1>Podcast recomendados</h1>
            <div className="posts-podcast">
                < Podcast episode={'3oosd3Y7oM3DAsXusY7rai'} />
                < Podcast episode={'5fd78Wp41IhaoKWVKBoS3C'} />
            </div>
        </>
    )

}