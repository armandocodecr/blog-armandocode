
import { formatDate } from "@/utils"
import Image from "next/image"
import Link from "next/link"

export const PostCard = ({ title, date, slug, img, desc }) => {
    const rutaImg = `/img/posts/${img}`
    const dateFormat = formatDate(date)
    return (

        <Link href={`/posts/${slug}`} key={slug} style={{ textDecoration: 'none' }} data-aos="fade-right">
            <article className="container-postTitle article-container-post">
                    <Image src={rutaImg} alt="imagen del titulo" width={50} height={50}/>
                    <div className="container-title-card">
                        <h2>{ title }</h2>
                        <p id="post-date">{ dateFormat }</p>
                        <p id="post-desc">{ desc }</p>
                    </div>
            </article>
        </Link>

    )

}