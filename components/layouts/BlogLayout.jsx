import { useEffect } from "react";
import Head from "next/head"
import { Footer, Navbar } from "../ui";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const BlogLayout = ({ title, pageDescription, posts, urlImageFrontPage, children }) => {
  
  useEffect(() => {
    AOS.init();
  }, [])
  

  const getUrlImageFrontPage = urlImageFrontPage 
    ? urlImageFrontPage 
    : 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675369455/dgdytbnah1tsm6jsa9yt.png'

  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="robots" content="index,follow"/>

            {/* Google / Search Engine Tags  */}
            <meta itemProp="name" content="Blog - ArmandoCode 👨‍💻" />
            <meta itemProp="description" content="ArmandoCode 👨‍💻 - Soy un desarrollador de Software, y aqui te compartiré información que te encantará sobre programación." />
            <meta itemProp="image" content={getUrlImageFrontPage} />

            {/* Facebook Meta Tags */}
            <meta name="title" property="og:title" content={ title } />
            <meta name="url" property="og:url" content="https://blog-armandocode.vercel.app/" />
            <meta name="type" property="og:type" content="website" />
            <meta name="decription" property="og:description" content={ pageDescription } />
            <meta name="image" property="og:image" content={getUrlImageFrontPage} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:site" content="@Armando_Code" />
            <meta name="twitter:creator" content="@Armando_Code" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ title } />
            <meta name="twitter:url" content="https://blog-armandocode.vercel.app/" />
            <meta name="twitter:image" content={getUrlImageFrontPage} />
            <meta name="twitter:image:alt" content="ArmandoCode - Desarrollador Web al que le encanta programar, y compartir con los demás lo que sabe. 🙆‍♂️" />
            <meta name="twitter:description" content={ pageDescription } />
            
        </Head>

        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="u-center" data-aos="fade-down">
            <Navbar posts={posts} />
        </nav>

        <main
        >
            { children }
        </main>

        <footer>
            < Footer />
        </footer>

    </>
  )
}