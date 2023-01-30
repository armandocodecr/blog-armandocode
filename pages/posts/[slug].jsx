import { useRouter } from "next/router";

import { MDXRemote } from "next-mdx-remote";

import { getFileBySlug, getFiles, getAllFileMetadata } from "@/lib/mdx";
import { BlogLayout } from "@/components/layouts";

import "highlight.js/styles/atom-one-dark.css"
import { formatDate } from "@/utils";
import { PostTitle } from "@/components/posts";

const PostPage = ({ source, frontMatter, posts }) => {

    const { asPath } = useRouter();
    const slug = asPath.slice(7, asPath.length);

    const { title, date, imgTitle, description, readingTime } = frontMatter;
    const urlImg = `/img/posts/${imgTitle}`;

    const dateFormat = formatDate(date)

    return(
        <BlogLayout title={title} pageDescription={`👨‍💻 - ${description}`} slug={asPath} posts={posts}>
            <section className="container-post-byslug">
                <div className="container-content-post">
                   
                   <PostTitle urlImage={urlImg} title={title} date={dateFormat} readingTime={readingTime} slug={slug} />

                    <div style={{ position: 'relative', width: '100%' }} id="content-post">
                        <MDXRemote {...source} />
                    </div>
                </div>
            </section>
        </BlogLayout>
    )

}

export async function getStaticProps({ params }) {

    const { source, frontMatter } = await getFileBySlug(params.slug);
    const posts = await getAllFileMetadata();

    return {
      props: { source, frontMatter, posts },
    }
 }

export async function getStaticPaths () {

    const allPosts = await getFiles();
    const paths = allPosts.map( post  => ({
        params: {
            slug: post.replace(/\.mdx/, '')
        }
    }));

    return {
        paths,
        fallback: false,
    }

}

export default PostPage