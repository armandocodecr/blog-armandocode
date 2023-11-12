import Link from "next/link";
import { PostsLists } from "../posts";

import { usePagination } from "@/hooks";

import { About } from "./about/About";

export const HomePage = ({ posts }) => {
  const { arrayPages } = usePagination({ posts });

  return (
    <section className="container-content u-center">
      <div className="container-posts">
        <section className="container-postList">
          <h1>Ultimos posts</h1>
          <PostsLists posts={arrayPages} />
          <div style={{ marginTop: 20 }}>
            <Link href="/All" style={{ fontSize: 20 }}>
              Ver todo
            </Link>
          </div>

          <About />

        </section>

      </div>
    </section>
  );
};
