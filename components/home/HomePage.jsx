import Link from "next/link";
import { PostsLists } from "../posts";

import { About } from "./about/About";
import { Redirect } from "@/assets/icons/Redirect";

export const HomePage = ({ posts }) => {
  const postsSort = posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()).reverse().slice(-4)
  console.log(postsSort)
  return (
    <section className="container-content u-center">
      <div className="container-posts">
        <section className="container-postList">

          <h1 style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            Ultimos posts
            <Link 
              className="see-all-link"
              href="/All"
            >
              <Redirect />
            </Link>
          </h1>

          <PostsLists posts={postsSort} />

          <About />

        </section>

      </div>
    </section>
  );
};
