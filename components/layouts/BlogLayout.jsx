import Head from "next/head"
import { Footer, Navbar } from "../ui";



export const BlogLayout = ({ title, pageDescription, posts, children }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="decription" content={ pageDescription } />

            <meta name="og:title" content={ title } />
            <meta name="og:image" content="/img/portada.png" />
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