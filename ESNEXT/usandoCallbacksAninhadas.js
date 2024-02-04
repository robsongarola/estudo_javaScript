// SEM PROMISES

const http = require('http'); // O node possui em sua biblioteca o módulo http

const getTurma =(letra,callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    //usando o módulo http para fazer a requisição e pegar os dados
    http.get(url,res =>{
        let resultado ="" ; //iniciando um let que será recebido os dados

        res.on('data', dados =>{ //interceptando o evento data (que é disparado quando começa a chegar os arquivos)
            resultado += dados
        })
        // TERMINANDO DE CHEGAR OS DADOS TEMOS OUTRO EVENTO
         res.on('end', () =>{
            callback(JSON.parse(resultado))
         })

    })
}
// VAMOS CRIAR AS CALLBACKS PARA USAR A FUNÇÃO QUE CRIAMOS ACIMA

let nomes =[]; // DENTRO DESSE ARRAY VÁZIO QUE RECEBEREI AS MINHAS TURMAS

 getTurma('A',alunos =>{
    nomes = nomes.concat(alunos.map( a => `A : ${a.nome}`))/*alunos =>... até o final dessa linha é a callback*/
       getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map( a => `B : ${a.nome}`))
          getTurma('C', () =>{
            nomes = nomes.concat( alunos.map( a => `C : ${a.nome}`))
            console.log(nomes)
          })
       })
 }) // ESSA ESTRUTURA É CHAMADA DE CALLBACK HELL