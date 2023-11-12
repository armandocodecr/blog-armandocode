import Image from "next/image"
import Link from "next/link"
import Logo from '../../public/img/Logo.png'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

import { useSearch } from "@/hooks"
import { PostsResults } from "."


export const Navbar = ({ posts }) => {

    const { searchQuery, setSearchQuery, hideSearchMenu, postSeached } = useSearch(posts)

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
                    <a href="https://github.com/armandocodecr" target="_blank" rel="noreferrer">
                        <FaGithub className="navbar-icons" id="git"/>
                    </a>
                    <a href="https://www.instagram.com/armandocodecr/" target="_blank" rel="noreferrer">
                        <FaInstagram className="navbar-icons" id="instagram"/>
                    </a>
                    <a href="https://twitter.com/Armando_Code" target="_blank" rel="noreferrer">
                        <FaTwitter className="navbar-icons" id="twitter"/>
                    </a>
                    <a href="https://www.linkedin.com/in/armandocode/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="navbar-icons" id="linkedin"/>
                    </a>
                </div>
                
               <PostsResults 
                    hideSearchMenu={hideSearchMenu} 
                    postSeached={postSeached} 
                    searchQuery={searchQuery} 
               />
            </ul>
        
        </>
    )

}