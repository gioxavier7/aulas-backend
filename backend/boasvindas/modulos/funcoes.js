const listaContatos = require('./contatos.js')

//função que retorna lista dos dados pessoais por usuario
const getDadosPessoal = function(number){
    let dadosContatos = listaContatos.contatos['whats-users']
    let status = false
    let listaDadosContatos = {
        contato: []
    }

    dadosContatos.forEach(function(valor){
        listaDadosContatos.contato.push(valor.id)
        listaDadosContatos.contato.push(valor.account)
        listaDadosContatos.contato.push(valor.number)
        listaDadosContatos.contato.push(valor.createdsince)
        status = true
    })

    if(status === true){
        return listaDadosContatos
    }else{
        return status
    }
}

//função que retorna dados da conta do profile do usuário
const getDadosProfile = function(){
    let dadosContatos = listaContatos.contatos['whats-users']
    let status = false
    let listaDadosProfile = {
        contato: []
    }

    dadosContatos.forEach(function(valor){
        listaDadosProfile.contato.push(valor.nickname)
        listaDadosProfile.contato.push(valor.profileimage)
        listaDadosProfile.contato.push(valor.background)
        status = true
    })

    if(status === true){
        return listaDadosProfile
    }else{
        return status
    }
}

// função que retorna lista de dados de contato para cada usuário
const getDadosContatos = function(){
    let dadosContatos = listaContatos.contatos['whats-users']
    let status = false
    let listaDadosContatos = {
        contato: []
    }

    dadosContatos.forEach(function(valor){
        valor.contacts.forEach(function(dados){
            let dadosEncontrados = {}
            dadosEncontrados.name = dados.name
            dadosEncontrados.description = dados.description
            dadosEncontrados.image = dados.image

            listaDadosContatos.contato.push(dadosEncontrados)
        })
        status = true
    })

    if(status === true){
        return listaDadosContatos
    }else{
        return status
    }
}


// console.log(getDadosPessoal())
// console.log(getDadosProfile());
console.log(getDadosContatos());

console.log();

// console.log(listaContatos.contatos['whats-users']);