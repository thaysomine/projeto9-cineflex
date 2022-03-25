export default function Footer(props) {
    const {poster, title} = props;
    return (
        <footer>
            <div className="poster-movie">
                <img src={poster} alt={title} />
            </div>
            <p>{title}</p>
        </footer>
    )
}