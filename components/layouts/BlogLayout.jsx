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
            <meta name="image" property="og:image" content="https://res.cloudinary.com/dyuj1zglt/image/upload/v1674407383/ahxonr3ssagn8qbllgkx.png" />
            <meta property="og:image:alt" content="ArmandoCode - Desarrollador Web al que le encanta programar, y compartir con los demás lo que sabe. 🙆‍♂️" />

            <meta property="twitter:site" content="@CodeArmando" />
            <meta property="twitter:creator" content="@CodeArmando" />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:title" content={ title } />
            <meta property="twitter:url" content="https://armando-murillo.vercel.app/" />
            <meta property="twitter:image" content="https://res.cloudinary.com/dyuj1zglt/image/upload/v1674407383/ahxonr3ssagn8qbllgkx.png" />
            <meta property="twitter:image:alt" content="ArmandoCode - Desarrollador Web al que le encanta programar, y compartir con los demás lo que sabe. 🙆‍♂️" />
            <meta property="twitter:description" content="Este es mi Blog personal (ArmandoCode), donde podrás encontrar posts muy interesantes si eres desarrollador de software 👨‍💻" />
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