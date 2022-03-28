import { useLocation, Link } from "react-router-dom";

export default function Success() {
    console.log("oooooooooooooooooi");
    const location = useLocation()
    const {
        userData: {name, cpf},
        seats: {movie: {title}, day:{date}},
        time,
        seatNum
    } = location.state
    
    return (
        <div className="success-page">
            <h4>Pedido feito <br></br> com sucesso</h4>
            <h5>Filme e sessão</h5>
            <p>{title} <br></br> {date} {time}</p>
            <h5>Ingressos</h5>
            <div className="tickets">
                {seatNum.map((num) => <p className="ajust-margin" key={num}>Assento {num}</p>)}
            </div>
            <h5>Comprador</h5>
            <p>Nome: {name} <br></br>CPF: {cpf}</p>
            <Link to="/">
                <div className="homepage-button">Voltar para a Home</div>
            </Link>
        </div>
    )
}