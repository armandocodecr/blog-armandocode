import Image from "next/image";

import { FaGithub, FaClock } from "react-icons/fa";

export const PostTitle = ({ urlImage, title, date, readingTime, slug }) => {

    return (
        <>
        
            <div className="container-postTitle container-postTitle-byslug">
                <Image src={urlImage} width={75} height={75} alt="imagen del titulo" id="img-title" />
                <div className="container-title-card">
                    <h1>{title}</h1>
                    <p>
                        <a 
                        href="https://www.linkedin.com/in/armando-murillo/" 
                        target='_blank' 
                        rel="noreferrer">Armando Murillo
                        </a> 
                        | { date } 
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center' }}><FaClock style={{ paddingRight: 5 }} />{`${readingTime} de lectura`}</p>
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
        
        </>
    )
}