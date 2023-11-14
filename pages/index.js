import { BlogLayout } from '@/components/layouts'

import { getAllFileMetadata } from '../lib/mdx'
import { HomePage } from '../components/home'


export default function Home({ posts }) {

  return (
      <BlogLayout 
        title='Blog | Armando Murillo 👨‍💻' 
        pageDescription='Armando Murillo 👨‍💻 - Soy un simple desarrollador web que quiere compartir con los demás lo que aprende día con día.' 
        posts={posts}
        urlImageFrontPage='https://res.cloudinary.com/dyuj1zglt/image/upload/v1675369455/dgdytbnah1tsm6jsa9yt.png'
      >
          < HomePage posts={posts} />
      </BlogLayout>
  )
}


 export async function getStaticProps() {

    const posts = await getAllFileMetadata();

    return {
      props: {posts},
    }
 }