import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import axios from 'axios';

import Footer from './Footer'

export default function Session() {
    const { idSession } = useParams();
    const [session, setSession] = useState("");

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSession}/showtimes`);

        request.then(response => {
            setSession(response.data);
            console.log(response.data)
        });
    }, []);

    const { posterURL, title } = session;

    return (
        session !== ""
            ? <>
                <h4>Selecione o horário</h4>
                <div className='sessions'>
                    {session.days.map(({ weekday, date, id, showtimes }) => {
                        return (
                            <div className='session' key={id}>
                                <p>{weekday} - {date}</p>                                
                                <div className='time'>
                                    {showtimes.map(({ name, id }) => {
                                        console.log(id)
                                        return (
                                            <Link to={`/seats/${id}`} key={id}>
                                                <div className='time-button'>{name}</div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>                           
                        )
                    })}
                </div>
                <Footer poster={posterURL} title={title} />
            </>
            : <p>carregando</p>
    )
}