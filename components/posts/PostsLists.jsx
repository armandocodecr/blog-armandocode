import { PostCard } from "./"


export const PostsLists = ({ posts }) => {

    const postsSort = posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return(
        <>
            {
                postsSort.map(item => (
                    < PostCard title={item.title} date={ item.date } slug={item.slug} img={item.imgTitle} key={item.slug} desc={item.description} />
                ))
            }
        </>
    )
}