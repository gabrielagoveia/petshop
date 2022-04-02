const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
    
}

const criaCliente = (nome, cpf, email, telefone) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            cpf: cpf,
            email: email,
            telefone: telefone
        })
        })
        .then(resposta => {
            return resposta.body
        })
}

export const clienteService = {
    listaClientes,
    criaCliente
}
