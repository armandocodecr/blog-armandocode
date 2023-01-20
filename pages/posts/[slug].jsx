import { useRouter } from "next/router";
import Image from "next/image";

import { MDXRemote } from "next-mdx-remote";

import { getFileBySlug, getFiles } from "@/lib/mdx";
import { BlogLayout } from "@/components/layouts";
import { FaGithub } from "react-icons/fa";

import "highlight.js/styles/atom-one-dark.css"
import { formatDate } from "@/utils";

const PostPage = ({ source, frontMatter }) => {

    const { asPath } = useRouter();
    const slug = asPath.slice(7, asPath.length);

    const { title, date, imgTitle } = frontMatter;
    const rutaImg = `/img/posts/${imgTitle}`;

    const dateFormat = formatDate(date)

    return(
        <BlogLayout title={title}>
            <section className="container-post-byslug">
                <div className="container-content-post">
                    <div className="container-postTitle container-postTitle-byslug">
                        <Image src={rutaImg} width={75} height={75} alt="imagen del titulo" id="img-title" />
                        <div className="container-title-card">
                            <h1>{title}</h1>
                            <p>
                                <a 
                                href="https://www.linkedin.com/in/armando-murillo/" 
                                target='_blank' 
                                rel="noreferrer">Armando Murillo
                                </a> 
                                | { dateFormat }
                            </p>
                        </div>
                    </div>

                    <div id="container-aditional-info">
                        <p>
                            < FaGithub style={{ color: 'white' }} /> 
                            ¿Ves alguna errata o quiere sugerir algo? 
                            <a href={`https://github.com/Armandocm19/blog-armandocode/blob/main/data/${slug}.mdx`} target='_blank' rel="noreferrer">
                                Haz un pull request
                            </a>
                        </p>
                    </div>

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

    return {
      props: { source, frontMatter },
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