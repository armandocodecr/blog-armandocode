import { useEffect, useState } from "react"


export const usePagination = ({ posts }) => {

    const [prevPage, setPrevPage] = useState(0)
    const [nextPage, setNextPage] = useState(5)
    const [arrayPages, setArrayPages] = useState(posts)

    useEffect(() => {
      
        setArrayPages(posts.filter((post, i) => {
            if( i <= nextPage && i >= prevPage ) return post;
        }))

    }, [nextPage, prevPage, posts])
    
    const changePage = (next) => {
        if( next ) {
            setNextPage(state => state + 6)
            setPrevPage(state => state + 6)
            return;
        }

        setNextPage(state => state - 6)
        setPrevPage(state => state - 6)
    }

    return {
       changePage,
       arrayPages,
       prevPage,
       nextPage 
    }
    
}