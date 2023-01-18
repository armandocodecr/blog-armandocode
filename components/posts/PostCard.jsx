
import { formatDate } from "@/utils"
import Image from "next/image"
import Link from "next/link"

export const PostCard = ({ title, date, slug, img, desc }) => {
    const rutaImg = `/img/posts/${img}`
    const dateFormat = formatDate(date)
    return (

        <Link href={`/posts/${slug}`} key={slug} style={{ textDecoration: 'none' }}>
            <article className="container-postTitle article-container-post">
                    <Image src={rutaImg} alt="imagen del titulo" width={50} height={50}/>
                    <div className="container-title-card">
                        <h2>{ title }</h2>
                        <p>{ dateFormat }</p>
                    </div>
                    <div className="container-description-card">
                        <p>{ desc }</p>
                    </div>
            </article>
        </Link>

    )

}