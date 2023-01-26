import { useEffect, useState } from "react"


export const usePagination = ({ posts }) => {

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

    return {
       changePage,
       arrayPages,
       prevPage,
       nextPage 
    }
    
}