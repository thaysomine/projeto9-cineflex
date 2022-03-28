import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

import UserData from './UserData';
import Footer from './Footer';

export default function Seats() {
    const { idSeats } = useParams();
    const [seats, setSeats] = useState("");
    const [seatList, setSeatList] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);

        request.then(response => {
            setSeats(response.data);
            console.log(response.data)
        });
    }, []);

    const { movie, day, name } = seats;
    console.log(movie);

    return (
        seats !== ""
        ? <>
            <h4>Selecione o(s) assentos(s)</h4>
            <div className="seats">
                {seats.seats.map(({name, isAvailable, id})=> {
                    if(!isAvailable) {
                        return (
                            <div className="seat yellow" key={id} onClick={() => alert("Esse assento não está disponível")}>{name}</div>
                        )
                    } else {
                        return (
                            <div className={`seat ${seatList.includes(id) ? "selected" : ""}`} key={id} onClick={() => {
                                seatList.includes(id) ? setSeatList(()=> {
                                    let removeId = seatList.filter(e => e !== id)
                                    return removeId
                                }) : setSeatList([...seatList, id])
                            }}>{name}</div>
                        )
                    }
                })}
            </div>
            <div className='seat-types'>
                <div className='seat-type'>
                    <div className="seat selected"></div>
                    <p>Selecionado</p>
                </div>
                <div className='seat-type'>
                    <div className="seat"></div>
                    <p>Disponível</p>
                </div>
                <div className='seat-type'>
                    <div className="seat yellow"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <UserData />
            <p className='book-seat'>Reservar assento(s)</p>
            <Footer poster={movie.posterURL} title={movie.title} day={day.weekday} time={name}/>
        </>
        : <p>carregando</p>
    )
}

