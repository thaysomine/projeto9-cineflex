import { useLocation } from "react-router-dom";

export default function Success() {
    console.log("oooooooooooooooooi");
    const location = useLocation()
    return (
        <>
            <h4>Pedido feito <br></br> com sucesso</h4>
            <h5>Filme e sessão</h5>
            <p>xxxxxx <br></br> xxxxxxx</p>
            <h5>Ingressos</h5>
            <p>Assento xx <br></br> xxxxxxx</p>
            <h5>Comprador</h5>
            <p>Nome: xxxxxx <br></br>CPF: xxxxxxx</p>
        </>
    )
}