import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Movie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		request.then(response => {
			setMovies(response.data.posterURL);

		});
	}, []);

    console.log(movies);

	return (
		<div className="movie">
			{movies.map(item => <img src={item} />)}
		</div>
	);

    return (
        <div className="movies">
            <div className="movie">
                <img src="/image 6.svg" alt="movie" />
            </div>

            <div className="movie">
                <img src="/image 6.png" alt="movie" />
            </div>

            <div className="movie">
                <img src="/image 6.svg" alt="movie" />
            </div>

            <div className="movie">
                <img src="/image 6.svg" alt="movie" />
            </div>
        </div>
    );
}