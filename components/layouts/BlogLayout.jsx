import Head from "next/head"
import { Footer, Navbar } from "../ui";



export const BlogLayout = ({ title, pageDescription, posts, children }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="robots" content="index,follow"/>
            <meta name="decription" property="og:description" content={ pageDescription } />

            <meta name="title" property="og:title" content={ title } />
            <meta name="url" property="og:url" content="https://armando-murillo.vercel.app/" />
            <meta name="type" property="og:type" content="website" />
            <meta name="image" property="og:image" content="/img/Logo_portada.png" />
            <meta property="og:image:alt" content="ArmandoCode - Desarrollador Web al que le encanta programar, y compartir con los demás lo que sabe. 🙆‍♂️" />

            <meta name="twitter:site" content="@CodeArmando" />
            <meta name="twitter:creator" content="@CodeArmando" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:domain" content="armando-murillo.vercel.app" />
            <meta name="twitter:title" content={ title } />
            <meta property="twitter:url" content="https://armando-murillo.vercel.app/" />
            <meta name="twitter:image" content="/img/Logo_portada.png" />
            <meta name="twitter:image:alt" content="ArmandoCode - Desarrollador Web al que le encanta programar, y compartir con los demás lo que sabe. 🙆‍♂️" />
            <meta name="twitter:description" content={ pageDescription } />
        </Head>

        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="u-center">
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