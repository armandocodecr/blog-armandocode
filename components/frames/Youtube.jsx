

export const Youtube = ({ id }) => {
    return (
        <iframe 
            style={{ borderRadius: '12px' }}
            width="50%" 
            height="250px" 
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
        ></iframe>
    )
}