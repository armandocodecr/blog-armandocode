import { removeAccents } from "@/utils"
import { useState, useEffect } from "react"

export function useSearch(posts) {

    const [searchQuery, setSearchQuery] = useState('')
    const [hideSearchMenu, setHideSearchMenu] = useState('disabled')
    const [postSeached, setPostSearched] = useState([])

    useEffect(() => {
        if( searchQuery ){
            setHideSearchMenu('actived')
            setPostSearched(posts.filter(post => {
                let search = searchQuery.toLowerCase()
                let titlePost = removeAccents(post.title.toLowerCase())
               if( titlePost.startsWith(search) ){
                return post
               }
            }))
        }else{
            setHideSearchMenu('disabled')
        }
        
    }, [searchQuery, posts])

    return {
        //Variables
        hideSearchMenu,
        postSeached,
        searchQuery,

        //Methods
        setSearchQuery, 
    }

}