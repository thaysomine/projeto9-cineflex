import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";

export default function UserData(props) {
    let navigate = useNavigate();
    const {seatList, seats} = props
    const [userData, setUserData] = useState({name:"", cpf:""});

    function getUserInfo(e) {
        e.preventDefault()
        if(userData.name.length > 0 && userData.cpf.length === 11) {
            let seatNum = []
            seats.seats.map(({ id, name }) => seatList.includes(id) ? seatNum.push(parseInt(name)) : "")
            const infos = {
                ids : seatNum,
                name: userData.name,
                cpf: userData.cpf
            }
            const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", infos);
            promisse.then(() => {     
                navigate("/success")
            });
            promisse.catch(() => {
                console.log("deu ruim")
            });
        }
    }

    return (
        <form onSubmit={getUserInfo}>
            <div className="user-data">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." onChange={(name) => setUserData({...userData, name:name.target.value})} />
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." onChange={(cpf) => setUserData({...userData, cpf:cpf.target.value})} />
            </div>
            <button className='book-seat' type='submit'>Reservar assento(s)</button>
        </form>
    )
}