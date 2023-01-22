import Head from "next/head"
import { Footer, Navbar } from "../ui";



export const BlogLayout = ({ title, pageDescription, posts, children }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="decription" content={ pageDescription } />

            <meta name="og:title" content={ title } />
            <meta property="og:image" content="https://res.cloudinary.com/dyuj1zglt/image/upload/v1674369118/cg0gxsyxgoszk9eozofp.png" />
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