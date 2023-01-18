

export const Podcast = ({ episode }) => {
    return (
        <iframe 
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/episode/${episode}?utm_source=generator`}
            width="50%" 
            height="250" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
        ></iframe>
    )
}