import { useEffect } from "react";
import { usePathname } from 'next/navigation';
import Head from "next/head"
import { Navbar } from "../ui";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const BlogLayout = ({ title, pageDescription, posts, urlImageFrontPage, children }) => {
  
  useEffect(() => {
    AOS.init({
      offset: 50
    });
  }, [])

  const pathname = usePathname();
  
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="robots" content="index,follow"/>

            {/* Google / Search Engine Tags  */}
            <meta itemProp="name" content="Blog - ArmandoCode 👨‍💻" />
            <meta itemProp="description" content="ArmandoCode 👨‍💻 - Soy un desarrollador de Software, y aqui te compartiré información que te encantará sobre programación." />
            <meta itemProp="image" content={urlImageFrontPage} />

            {/* Facebook Meta Tags */}
            <meta property="og:title" content={ title } />
            <meta property="og:url" content="https://blog-armandocode.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={ pageDescription } />
            <meta property="description" content={ pageDescription } />
            <meta property="og:image" content={urlImageFrontPage} />

            <link
              rel="canonical"
              href={`https://blog-armandocode.vercel.app${pathname}`}
              key="canonical"
            />

            {/* Twitter Meta Tags */}
            <meta name="twitter:site" content="@Armando_Code" />
            <meta name="twitter:creator" content="@Armando_Code" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ title } />
            <meta name="twitter:url" content="https://blog-armandocode.vercel.app/" />
            <meta name="twitter:image" content={urlImageFrontPage} />
            <meta name="twitter:image:alt" content="ArmandoCode 👨‍💻 - Soy un simple desarrollador web que quiere compartir con los demás lo que aprende día con día. 👨‍💻" />
            <meta name="twitter:description" content={ pageDescription } />
            
        </Head>

        <Navbar posts={posts} />
 
        <main
        >
            { children }
        </main>
    </>
  )
}