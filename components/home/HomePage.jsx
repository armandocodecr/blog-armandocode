import Link from "next/link"
import { PostsLists } from "../posts"

import { usePagination } from "@/hooks"

import { About } from "./about/About"

export const HomePage = ( {posts} ) => {

    const { arrayPages } = usePagination({posts})

    return (
        <section className="container-content u-center">
            <div className="container-posts">
                <h1>Ultimos posts</h1>
                <section className="container-postList">
                    < PostsLists posts={arrayPages} />
                </section>

                <div style={{ marginTop: 20 }}>
                    <Link 
                        href="/All"
                        style={{ fontSize: 20 }}
                    >
                        Ver todo
                    </Link>
                </div>

                <section className="container-info-autor">
                    <About />
                </section>

            </div>
               
        </section>
    )
}