import { useState, useEffect } from "react"

import Image from "next/image"
import Link from "next/link"
import Logo from '../../public/img/Logo.png'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

import { formatDate } from "@/utils"


export const Navbar = ({ posts }) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [hideSearchMenu, setHideSearchMenu] = useState('disabled')
    const [postSeached, setPostSearched] = useState([])

    const concatUrlImage = (imageName) =>{
        return `/img/posts/${imageName}`
    }

    useEffect(() => {
        if( searchQuery ){
            setHideSearchMenu('actived')
            setPostSearched(posts.filter(post => {
                let search = searchQuery.toLowerCase()
                let titlePost = post.title.toLowerCase()
                // console.log(typeof(post.title))
               if( titlePost.includes(search) ){
                return post
               }
            }))
        }else{
            setHideSearchMenu('disabled')
        }
        
    }, [searchQuery])
    

    return (
        <>
        
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap:'5px' }}>
                    <Link href='/'>
                        <Image src={Logo} width={50} height={50} id="logo-navbar" alt="logo-armandocode" />
                    </Link>
                    <h3 style={{ color: 'white' }}>ArmandoCode</h3>
                </div>
            </ul>

            <ul style={{ display: 'flex', gap: '20px'}}>
                <input type="text" placeholder="Buscar..." className="input-navbar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <div className="container-navbar-icons">
                    <FaGithub className="navbar-icons" id="git"/>
                    <FaInstagram className="navbar-icons" id="instagram"/>
                    <FaTwitter className="navbar-icons" id="twitter"/>
                    <FaLinkedin className="navbar-icons" id="linkedin"/>
                </div>
                <div className={`menu-search ${ hideSearchMenu }`}>
                    {
                        postSeached && (
                            postSeached.map(({ title, date, post, imgTitle, slug }) =>(
                                <Link href={`/posts/${ slug }`} key={ slug } style={{ textDecoration: 'none' }}>
                                    <article className="container-postTitle search-container-post">
                                        <Image src={concatUrlImage( imgTitle )} alt="imagen del titulo" width={20} height={20}/>
                                        <div className="search-title-card">
                                            <h2>{ title }</h2>
                                            <p>{ formatDate( date) }</p>
                                        </div>
                                    </article>
                                </Link>
                            ))
                        )
                    }
                </div>
            </ul>
        
        </>
    )

}