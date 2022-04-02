import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, cpf, email, telefone) =>{
    const linhaNovoCliente = document.createElement('tr')
    const conteudo =
    `
    <td class="td" data-td>${nome}</td>
    <td class="td" data-td>${cpf}</td>
    <td>${email}</td>
    <td>${telefone}</td>
    <td>
        <a hrfe="../telas/edita_cliente.html"><i class="fa-solid fa-pen"></i> </a>
        <i class="fa-solid fa-trash"></i>
    </td>`
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

clienteService.listaClientes()
.then(data => {
            data.forEach(elemento =>{
                tabela.appendChild(criaNovaLinha(elemento.nome, elemento.cpf, elemento.email, elemento.telefone))
            })
})