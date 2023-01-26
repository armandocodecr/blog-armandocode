import { Podcast, PostInstagram, Youtube } from "../frames"
import { PostsLists } from "../posts"

import { usePagination } from "@/hooks"

import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { ButtonsPagination } from "./buttons/ButtonsPagination"

export const HomePage = ( {posts} ) => {

    const { changePage, arrayPages, prevPage, nextPage } = usePagination({posts})

    return (
        <section className="container-content u-center">
            <div className="container-posts">
                <h1>Ultimos posts</h1>
                <section className="container-postList">
                    < PostsLists posts={arrayPages} />
                </section>

                <ButtonsPagination 
                    nextPage={nextPage} 
                    prevPage={prevPage} 
                    changePage={changePage} 
                    postsLength={posts.length} 
                />

                </div>
                <div className="container-posts-social">
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
                </div>
        </section>
    )
}