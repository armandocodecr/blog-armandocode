import { PostsLists } from "../posts"

import { usePagination } from "@/hooks"

import { ButtonsPagination } from "./buttons/ButtonsPagination"
import { About } from "./about/About"

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

            </div>
               
        </section>
    )
}