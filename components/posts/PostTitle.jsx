import { FaGithub, FaClock } from "react-icons/fa";

export const PostTitle = ({ urlImage, title, date, readingTime, slug }) => {

    return (
        <>
        
            <div className="container-postTitle container-postTitle-byslug" data-aos="fade-up">
                <aside className="container-title-card">
                    <h1>{title}</h1>
                    <p>
                        <a 
                        href="https://www.linkedin.com/in/armandocode/" 
                        target='_blank' 
                        rel="noreferrer">Armando Murillo
                        </a> 
                        | { date } 
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center' }}><FaClock style={{ paddingRight: 5 }} />{`${readingTime} de lectura`}</p>
                </aside>
            </div>
            <div id="container-aditional-info" data-aos="fade-up">
                <p>
                    < FaGithub style={{ color: 'white' }} /> 
                    ¿Ves alguna errata o quiere sugerir algo? 
                    <a href={`https://github.com/armandocodecr/blog-armandocode/blob/main/data/${slug}.mdx`} target='_blank' rel="noreferrer">
                        Haz un pull request
                    </a>
                </p>
            </div>
        
        </>
    )
}