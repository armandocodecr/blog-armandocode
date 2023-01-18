import { BlogLayout } from '@/components/layouts'

import { getAllFileMetadata } from '../lib/mdx'
import { HomePage } from '../components/home'


export default function Home({ posts }) {

  return (
    <>
      <BlogLayout title='Blog - ArmandoCode 👨‍💻' pageDescription='Mi blog persona para mi Portfolio' posts={posts}>
          < HomePage posts={posts} />
      </BlogLayout>
    </>
  )
}


 export async function getStaticProps() {

    const posts = await getAllFileMetadata();

    return {
      props: {posts},
    }
 }