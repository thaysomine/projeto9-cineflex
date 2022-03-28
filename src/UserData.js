import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";

export default function UserData(props) {
    let navigate = useNavigate();
    const {seatList, seats, time} = props
    const [userData, setUserData] = useState({name:"", cpf:""});

    function getUserInfo(e) {
        e.preventDefault()
        console.log(userData.name.length);
        console.log(userData.cpf.length);
        console.log(seatList);
        if(userData.name.length > 0 && userData.cpf.length === 11 && seatList.length > 0) {
            const infos = {
                ids : seatList,
                name: userData.name,
                cpf: userData.cpf
            }

            const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", infos);
            promisse.then(() => {  
                let seatNum = []
                seats.seats.map(({ id, name }) => seatList.includes(id) ? seatNum.push(name) : "")   
                console.log(seatNum);
                navigate("/success", { state: {userData, seats, time, seatNum} })
            });
            promisse.catch(() => {
                console.log("deu ruim")
            });
        } else {
            alert("Preencha os dados corretamente.")
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