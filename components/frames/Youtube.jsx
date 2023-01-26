

export const Youtube = ({ description, urlImage, urlVideo }) => {
    return (
        <a href={urlVideo} target="_blank" rel="noreferrer">
            <picture>
                <img src={urlImage} alt="miniatura del video de youtube" />
            </picture>
            <h4>{description}</h4>
        </a>
    )
}