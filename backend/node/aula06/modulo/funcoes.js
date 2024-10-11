/*
* objetivo: manipular dados utilizando a estrutura de ARRAY e JSON
* data: 27/09/2024
* dev: giovanna
* versão: 1.0
*/

/**
 * array -> [] -> estrutura para armazenar um conjunto de dados
 * json -> {} -> estrutura de dados para organizar os dados
 */

const comandosBasicos = function(){
    //primeira forma de criar um array
    let listaDeNomes = ['Giovanna', 'Gabriel', 'Israel', 'Letícia', 7, true]

    //console.log(listaDeNomes[1])
    //console.table(listaDeNomes)

    //segunda forma de criar um array
    let listaDeDisciplinas = []

    listaDeDisciplinas[0] = 'Banco de Dados'
    listaDeDisciplinas[1] = 'Back-End'
    listaDeDisciplinas[2] = 'Projetos de Software'
    listaDeDisciplinas[3] = 'Front-End'
    listaDeDisciplinas[4] = 'Requisitos de Software'

    //console.table(listaDeDisciplinas)

    //terceira forma de criar um array
    let listaDeProdutos = []

    //.push adiciona no final
    listaDeProdutos.push('Teclado')
    listaDeProdutos.push('Mouse')
    listaDeProdutos.push('HD')
    listaDeProdutos.push('Placa de Vídeo')
    listaDeProdutos.push('Caixa de Som')
    listaDeProdutos.push('Processador')
    listaDeProdutos.push('Monitor')
    listaDeProdutos.push('Gabinete')
    listaDeProdutos.push('Headset')
    listaDeProdutos.push('Placa de Som')
    console.table(listaDeProdutos)

    //.unshift adiciona no início da lista, poré, reorganiza os demais itens
    listaDeProdutos.unshift('Placa Mãe')
    console.table(listaDeProdutos)

    //.shift remove o primeiro elemento da lista, porém re-organiza os demais indices
    listaDeProdutos.shift()
    console.table(listaDeProdutos)

    //.pop elimina o ultimo item
    listaDeProdutos.pop()
    console.table(listaDeProdutos)

    //.splice remove elementos da lista através de um determinado indice
    listaDeProdutos.splice(3,1)
    console.table(listaDeProdutos)
    
    //.length retorna a qtde de elementos de um array 
    console.log(listaDeProdutos.length)
}
comandosBasicos()