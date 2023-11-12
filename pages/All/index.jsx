import { BlogLayout } from "@/components/layouts";
import { getAllFileMetadata } from '../../lib/mdx'
import { PostsLists } from "@/components/posts";


export default function AllBlogs ({ posts }) {
    return (
        <BlogLayout 
            title={"Blogs"} 
            pageDescription={`👨‍💻 - Observa todos los posts que te pueden interesar sobre el mundo de la programación`} 
            posts={posts} 
            urlImageFrontPage={"https://res.cloudinary.com/dyuj1zglt/image/upload/v1699770882/publicaciones%20del%20blog/xmcpxq6fslbv9lul27gh.png"}
        >
            <section className="container-content-all-blogs u-center-all-blogs">
                <div className="container-posts">
                    <aside>
                        <h1>Todos los posts</h1>
                        <p>{`${posts.length} posts sobre programación, soft skills, tecnología y más...`}</p>
                    </aside>
                    <div className="container-all-blogs">
                        <PostsLists posts={posts} />
                    </div>
                </div>
            </section>
        </BlogLayout>
    )
}

export async function getStaticProps() {

    const posts = await getAllFileMetadata();

    return {
      props: {posts},
    }
 }