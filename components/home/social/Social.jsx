import { Podcast, Youtube } from "../../frames"


export const Social = () => {

    return (
        <>
            <h1>Último video en Youtube</h1>
            <div className="posts-youtube">
                < Youtube 
                    urlVideo={'https://www.youtube.com/watch?v=bA6T8KOgAFg'}
                    urlImage={'https://res.cloudinary.com/dyuj1zglt/image/upload/v1674766529/miniaturas/wg8lwf9mospmukj5fgdu.png'} 
                    description='Closures en JAVASCRIPT: Qué son, y cómo se usan. 👨‍💻'
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