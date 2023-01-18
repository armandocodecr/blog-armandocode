

export const PostInstagram = ({ id }) => {
    return (
        <iframe frameBorder='0' src={`https://www.instagram.com/p/${id}/embed`} loading="lazy"></iframe>
    )
}