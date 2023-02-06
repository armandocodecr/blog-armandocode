import Head from "next/head"
import { Footer, Navbar } from "../ui";

export const BlogLayout = ({ title, pageDescription, posts, slug, children }) => {

  const concatImgURL = slug 
    ? `/public/img${slug}/portada.png` 
    : "https://res.cloudinary.com/dyuj1zglt/image/upload/v1674407383/ahxonr3ssagn8qbllgkx.png"

  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="robots" content="index,follow"/>
            <meta name="decription" property="og:description" content={ pageDescription } />

            {/* Google / Search Engine Tags  */}
            <meta itemProp="name" content="Blog - ArmandoCode 👨‍💻" />
            <meta itemProp="description" content="ArmandoCode 👨‍💻 - Soy un desarrollador de Software, y aqui te compartiré información que te encantará sobre programación." />
            <meta itemProp="image" content={concatImgURL} />

            {/* Facebook Meta Tags */}
            <meta property="og:title" content={ title } />
            <meta property="og:url" content="https://armando-murillo.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={concatImgURL} />
            <meta property="og:image:alt" content="Imagen del blog" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:site" content="@Armando_Code" />
            <meta name="twitter:creator" content="@Armando_Code" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:domain" content="armando-murillo.vercel.app" />
            <meta name="twitter:title" content={ title } />
            <meta name="twitter:url" content="https://armando-murillo.vercel.app/" />
            <meta name="twitter:image" content={concatImgURL} />
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