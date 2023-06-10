export const Quote = ({ id, sprites, name }) => {
    return (
        <blockquote className="blockquote text-init">
            <p className="mb-1">id: {id}</p>
            <img src={sprites.front_default} alt="" />
            <footer className="blockquote-footer">{name}</footer>
        </blockquote>
    )
}
