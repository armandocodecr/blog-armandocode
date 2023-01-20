import { useState, useEffect } from "react"

import { Podcast, PostInstagram, Youtube } from "../frames"
import { PostsLists } from "../posts"

import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

export const HomePage = ( {posts} ) => {

    const [prevPage, setPrevPage] = useState(0)
    const [nextPage, setNextPage] = useState(3)
    const [arrayPages, setArrayPages] = useState(posts)

    useEffect(() => {
      
        setArrayPages(posts.filter((post, i) => {
            if( i <= nextPage && i >= prevPage ) return post;
        }))

    }, [nextPage, prevPage, posts])
    
    const changePage = (next) => {
        if( next ) {
            setNextPage(state => state + 4)
            setPrevPage(state => state + 4)
            return;
        }

        setNextPage(state => state - 4)
        setPrevPage(state => state - 4)
    }

    return (
        <section className="container-content u-center">
            <div className="container-posts">
                <h1>Ultimos posts</h1>
                < PostsLists posts={arrayPages} />
                <div className="container-arrows">
                    {
                        prevPage !== 0 && (
                            <button onClick={() => changePage(false)}>
                                <FaArrowLeft className="btn-arrow"/>
                            </button>
                        )
                    }
                    {
                        nextPage < posts.length - 1 && (
                            <button onClick={() => changePage(true)}>
                                <FaArrowRight className="btn-arrow"/>
                            </button>
                        )
                    }
                </div>

                <div className="container-posts-social">
                    <h1>Podcast recomendados</h1>
                    <div className="posts-podcast posts">
                        < Podcast episode={'3oosd3Y7oM3DAsXusY7rai'} />
                        < Podcast episode={'5fd78Wp41IhaoKWVKBoS3C'} />
                    </div>
                    <h1>Último video en Youtube</h1>
                    <div className="posts-youtube posts">
                        < Youtube id={'_JGk6zS2ZbQ'} />
                    </div>
                </div>
                </div>
                <div className="container-instagram">
                    <h1>Ultimos posts en Instagram</h1>
                    <div className="posts-instagram">
                        < PostInstagram id={'CnQXVh-rFf3'} />
                        < PostInstagram id={'Cm7cKW8vhPB'} />
                </div>
            </div>
        </section>
    )
}