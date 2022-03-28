export default function Footer(props) {
    const {poster, title, day, time} = props;

    if (time !== undefined) {
        return (
            <footer>
                <div className="poster-movie">
                    <img src={poster} alt={title} />
                </div>
                <p>{title} <br></br>{day} - {time}</p>
            </footer>
        )
    } else {
        return (
            <footer>
                <div className="poster-movie">
                    <img src={poster} alt={title} />
                </div>
                <p>{title}</p>
            </footer>
        )
    }
}