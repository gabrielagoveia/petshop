import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')

addEventListener('submit', (evento)=>{
    evento.preventDefault()
    const nome = evento.target.querySelector("#inputNome").value
    const cpf = evento.target.querySelector("#inputCPF").value
    const email = evento.target.querySelector("#inputEmail").value
    const telefone = evento.target.querySelector("#inputTelefone").value

    clienteService.criaCliente(nome, cpf, email, telefone)
    .then(()=>{
        window.location.href = '../telas/lista_cliente.html'
    })
})

