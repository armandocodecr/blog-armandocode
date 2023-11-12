import Link from "next/link"
import { formatDate } from "@/utils"

export function PostsResults({ hideSearchMenu, postSeached, searchQuery }) {

  console.log(postSeached)

  return (
    <div className={`menu-search ${hideSearchMenu}`}>
      {postSeached.length !== 0 ? (
        postSeached.sort((a,b) => new Date(b.date) - new Date(a.date)).map(({ title, date, slug }) => (
          <Link
            href={`/posts/${slug}`}
            key={slug}
            style={{ textDecoration: "none" }}
          >
            <article className="container-postTitle search-container-post">
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
