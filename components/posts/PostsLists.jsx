import { PostCard } from "./"


export const PostsLists = ({ posts }) => {
    
    return(
        <>
            {
                posts.map(item => (
                    < PostCard title={item.title} date={ item.date } slug={item.slug} img={item.imgTitle} key={item.slug} desc={item.description} />
                ))
            }
        </>
    )
}