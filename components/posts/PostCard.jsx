
import { formatDate } from "@/utils"
import Link from "next/link"

export const PostCard = ({ title, date, slug, desc }) => {
    const dateFormat = formatDate(date)
    return (

        <Link href={`/posts/${slug}`} key={slug} style={{ textDecoration: 'none' }} data-aos="fade-right">
            <article className="container-postTitle article-container-post">
                    <div className="container-title-card">
                        <h2>{ title }</h2>
                        <p id="post-date">{ dateFormat }</p>
                        <p id="post-desc">{ desc }</p>
                    </div>
            </article>
        </Link>

    )

}