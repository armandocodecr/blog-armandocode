import { PostsLists } from "../posts"

import { usePagination } from "@/hooks"

import { ButtonsPagination } from "./buttons/ButtonsPagination"
import { About } from "./about/About"
import { Social } from "./social/Social"

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

                <section className="container-info-autor">
                    <About />
                </section>

<<<<<<< HEAD
                <div className="container-posts-social">
                    <h1>Podcast recomendados</h1>
                    <div className="posts-podcast posts">
                        < Podcast episode={'3oosd3Y7oM3DAsXusY7rai'} />
                        < Podcast episode={'5fd78Wp41IhaoKWVKBoS3C'} />
                    </div>
                    <h1>Último video en Youtube</h1>
                    <div className="posts-youtube posts">
                        < Youtube id={'bA6T8KOgAFg'} />
                    </div>
                </div>
                </div>
                <div className="container-instagram">
                    <h1>Ultimos posts en Instagram</h1>
                    <div className="posts-instagram">
                        < PostInstagram id={'CndfnWQrTKF'} />
                        < PostInstagram id={'Cm7cKW8vhPB'} />
                </div>
=======
>>>>>>> rama-features
            </div>

            <section className="container-posts-social">
                <Social />
            </section>
               
        </section>
    )
}