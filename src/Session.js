import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import axios from 'axios';

export default function Session() {
    const { idSession } = useParams();
    console.log(idSession);
    const [session, setSession] = useState("");

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSession}/showtimes`);

        request.then(response => {
            setSession(response.data);
            console.log(response)
        });
    }, []);

    return (
        session !== ""
            ? <>
                <h4>Selecione o horário</h4>
                <div className='sessions'>
                    {session.days.map(({ weekday, date, id, showtimes }) => {
                        return (
                            <>
                                <div className='session' key={id}>
                                    <p>{weekday} - {date}</p>
                                </div>
                                <div className='time'>
                                    {showtimes.map(({ name, id }) => {
                                        return (
                                            <div className='time-button'>{name}</div>
                                        )
                                    })}
                                </div>
                            </>
                        )
                    })}
                </div>
            </>
            : <p>carregando</p>
    )
}