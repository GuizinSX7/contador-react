function CapsLock(props) {

    // props = Propriedades
    // Criando e recebendo 
    // os valores do componente 
    const TextoIserido = props.children;

    // Criando a funcionalidade
    const TextoFinalizado = TextoIserido.toUpperCase();

    // Retornando para tela
    return(
    <>
        <h1> {TextoFinalizado} </h1>
    </>
    )
    
}

export default CapsLock;