import { PostCard } from "./"


export const PostsLists = ({ posts }) => {
    const postsSort = posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return(
        <section>
            {
                postsSort.map(post => (
                    < PostCard 
                        title={post.title} 
                        date={ post.date } 
                        slug={post.slug} 
                        img={post.imgTitle} 
                        key={post.slug} 
                        desc={post.description} 
                    />
                ))
            }
        </section>
    )
}