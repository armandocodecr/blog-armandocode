import Head from "next/head"
import { Footer, Navbar } from "../ui";



export const BlogLayout = ({ title, pageDescription, posts, children }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="robots" content="index,follow"/>
            <meta name="decription" content={ pageDescription } />

            <meta name="description" property="og:description" content="Este es mi Blog personal (ArmandoCode), donde podrás encontrar posts muy interesantes si eres desarrollador de software 👨‍💻" />
            <meta name="title" property="og:title" content={ title } />
            <meta name="url" property="og:url" content="https://armando-murillo.vercel.app/" />
            <meta name="type" property="og:type" content="website" />
            <meta name="image" property="og:image" content="https://res.cloudinary.com/dyuj1zglt/image/upload/v1674369118/cg0gxsyxgoszk9eozofp.png" />
            <meta property="og:image:alt" content="ArmandoCode - Desarrollador Web al que le encanta programar, y compartir con los demás lo que sabe. 🙆‍♂️" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:site" content="@CodeArmando" />
            <meta name="twitter:creator" content="@CodeArmando" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ title } />
            <meta property="twitter:url" content="https://armando-murillo.vercel.app/" />
            <meta name="twitter:image" content="https://res.cloudinary.com/dyuj1zglt/image/upload/v1674369118/cg0gxsyxgoszk9eozofp.png" />
            <meta name="twitter:image:alt" content="ArmandoCode - Desarrollador Web al que le encanta programar, y compartir con los demás lo que sabe. 🙆‍♂️" />
            <meta name="twitter:description" content="Este es mi Blog personal (ArmandoCode), donde podrás encontrar posts muy interesantes si eres desarrollador de software 👨‍💻" />
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