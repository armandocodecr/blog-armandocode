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
               if( titlePost.includes(search) ){
                return post
               }
            }))
        }else{
            setHideSearchMenu('disabled')
        }
        
    }, [searchQuery, posts])

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
                    <a href="https://github.com/Armandocm19" target="_blank" rel="noreferrer">
                        <FaGithub className="navbar-icons" id="git"/>
                    </a>
                    <a href="https://www.instagram.com/armandocodecr/" target="_blank" rel="noreferrer">
                        <FaInstagram className="navbar-icons" id="instagram"/>
                    </a>
                    <a href="https://twitter.com/CodeArmando" target="_blank" rel="noreferrer">
                        <FaTwitter className="navbar-icons" id="twitter"/>
                    </a>
                    <a href="https://www.linkedin.com/in/armandocode/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="navbar-icons" id="linkedin"/>
                    </a>
                </div>
                <div className={`menu-search ${ hideSearchMenu }`}>
                    {
                        postSeached.length !== 0 ? (
                            postSeached.map(({ title, date, imgTitle, slug }) =>( 
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
                        : (
                            <article className="container-postTitle search-container-post">
                            <p>{`No hay resultados sobre: "${searchQuery}"  `}</p>
                            </article>
                        )
                    }
                </div>
            </ul>
        
        </>
    )

}