// USANDO PROMISE

const http = require('http'); // O node possui em sua biblioteca o módulo http

const getTurma = letra=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise ((resolve,reject)=>{
        http.get(url,res =>{
            let resultado ="" ; //iniciando um let que será recebido os dados
    
            res.on('data', dados =>{ //interceptando o evento data (que é disparado quando começa a chegar os arquivos)
                resultado += dados
            })
            // TERMINANDO DE CHEGAR OS DADOS TEMOS OUTRO EVENTO
             res.on('end', () =>{
                resolve(JSON.parse(resultado))
             })
    
        })

    } )
    

}
 
// REFATURANDO PARA PROMISE

let nomes =[]; // DENTRO DESSE ARRAY VÁZIO QUE RECEBEREI AS MINHAS TURMAS

// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A : ${a.nome}`))

//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B : ${a.nome}`))

//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C : ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

// USANDO A PROMISE EM UM PROCESSO MAIS INTERESSANTE

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')]) // Só PROSSIGUIRÁ PARA O THEN DEPOIS DE TODAS RES
        .then( turmas => [].concat(...turmas))
        .then( alunos => alunos.map( aluno => aluno.nome))
        .then( nomes => console.log(nomes))