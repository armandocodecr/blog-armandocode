import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/utils"

export function PostsResults({ hideSearchMenu, postSeached, searchQuery }) {
  return (
    <div className={`menu-search ${hideSearchMenu}`}>
      {postSeached.length !== 0 ? (
        postSeached.map(({ title, date, imgTitle, slug }) => (
          <Link
            href={`/posts/${slug}`}
            key={slug}
            style={{ textDecoration: "none" }}
          >
            <article className="container-postTitle search-container-post">
              <Image
                src={`/img/posts/${imgTitle}`}
                alt="imagen del titulo"
                width={20}
                height={20}
              />
              <div className="search-title-card">
                <h2>{title}</h2>
                <p>{formatDate(date)}</p>
              </div>
            </article>
          </Link>
        ))
      ) : (
        <article className="container-postTitle search-container-post">
          <p>{`No hay resultados sobre: "${searchQuery}"  `}</p>
        </article>
      )}
    </div>
  );
}
