import { useState } from "react";

<link rel="stylesheet" href="index.css" />


function Contador(){
    const [contador, setContador] = useState(1);

    function AdicionarContador(){
        setContador(contador+1);
    }

    return (
    <>
        <div id="botaoContador">
            <div>{contador}</div>
            <button onClick={AdicionarContador} id="botao">Adicionar</button>
            {/* A função "onclick" verifica se a pessoa clicou no botão, logo após isso, ele executa a ação que você definiu */}
        </div>
    </>
    )
}

export default Contador;