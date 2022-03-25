import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		request.then(response => {
			setMovies(response.data);
            console.log(response)
		});
	}, []);

    return (
        <>
            <h4>Selecione o filme</h4>
            <div className='movies'>           
                {movies.map(({posterURL, title, id}) => {
                    return (
                        <div className="movie" key={id}>
                            <Link to={`session/${id}`}>
                                <img src={posterURL} alt={title} />
                            </Link>    
                        </div>                
                    )
                })}
            </div>
        </>
    );
}