/*
* objetivo: manipular dados utilizando a estrutura de ARRAY e JSON
* data: 04/10/2024
* dev: giovanna
* versão: 1.0
*/

//exemplo utilizando while
const percorrerArray = function(){
    let listaDeClientes = []
    listaDeClientes.push('Giovanna', 'Gabriel', 'Ana', 'Luiz', 'Israel', 'Yuri', 'Letícia')

    let contador = 0

    console.log('WHILE')
    while(contador < listaDeClientes.length){
        console.log(listaDeClientes[contador])
        contador += 1
    }

    //exemplo utilizando for
    console.log('FOR')
    for(let contador = 0; contador < listaDeClientes.length; contador++){
        console.log(listaDeClientes[contador])
    }

    //exemplo utilizando forEach -> callback; apenas com objetos array
    console.log('FOR EACH')
    listaDeClientes.forEach(function(item){
        console.log(item)
    })
}

const filtroProduto = function(nomeProduto){
    let produto = String(nomeProduto).toUpperCase()
    let status = false
    let listaDeProdutos = []
    listaDeProdutos.push(
                            'monitor',
                            'teclado',
                            'mouse',
                            'caixa de som',
                            'placa de vídeo',
                            'placa mãe',
                            'HD',
                            'SSD',
                            'Impressora',
                            'memória'
    )

    //listaDeProdutos.forEach(function(item){
    // if(produto == item.toUpperCase()){
    //  status = true
    //}
    //})

    //includes permite localizar um item dentro do array, retorna true ou false
    // listaDeProdutos.forEach(function(item){
    //     if(String(item).toUpperCase().includes()){
    //         status = true
    //     }
    // })

    //indexOf permite localizar um item no array, retorna -1 se não encontrar e um número >= 0 se encontrar o item
    listaDeProdutos.forEach(function(item){
        if(String(item).toUpperCase().indexOf(produto) >= 0){
            status = true
        }
    })
    return status
}

const conceitosJSON = function(){
    //primeira forma de criar JSON
    let cliente = {nome: 'Giovanna Xavier', telefone: '11 956568949', email: 'giovanna.gsx1997@gmail.com'}

    //segunda forma de criar JSON
    let cliente2 = {}
    cliente2.nome = 'Gabriel Soares'
    cliente2.telefone = '11 957598949'
    cliente2.email = 'gabriel@gmail.com'

    let cliente3 = {}
    cliente3.nome = 'Israel Magalhães'
    cliente3.telefone = '11 956588249'
    cliente3.email = 'israel@gmail.com'


    let listaDeClientes = []
    listaDeClientes.push(cliente, cliente2, cliente3)

    listaDeClientes.forEach(function(item){
        console.log(item.nome)
    })
}

const cadastroProdutos = function(){
    let listaDeCores = [
                            {nome: 'Branco', hexadecimal:'#ffffff' },
                            {nome: 'Preto', hexadecimal:'#000000' },
                            {nome: 'Cinza', hexadecimal:'#575757' },
                            {nome: 'Azul', hexadecimal:'#0534a1' },
                            {nome: 'Rosa', hexadecimal:'#a10597' }
                        ]
    let listaDeCategorias = [
                            {nome: 'Hardware'},
                            {nome: 'Periférico'},
                            {nome: 'Software'},
                            {nome: 'Acessórios'},
                            {nome: 'Games'},
    ]
}