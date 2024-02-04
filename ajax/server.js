const bodyParser= require('body-parser');
const express=require('express');
const app=express();
const multer=require('multer') // ESSA BIBLIOTECA É A RESPONSÁVEL PELO UPLOAD

app.use(express.static('.')) // ESTOU INFORMANDO QUE O EXPRESS IRÁ PROVER TODOS OS ARQUIVOS DA PASTA RAIZ
app.use(bodyParser.urlencoded({extended:true})) // VAI TRATAR AS REQUISIÇOES SUBMIT E TRANSFORMAR EM OBJETO
app.use(bodyParser.json()) // CHAGANDO UMA REQUISIÇÃO QUE VENHA EM JSON , ESSE SERÁ O PARSER QUE TRANSF EM OBJETO

// VAMOS FAZER AQUI A CONFIGURAÇÃO DO OBJETO QUE FARA A CONFIGURAÇÃO DO LOCAL ONDE QUEREMOS COLOCAR O
// ARQUIVO E O NOME DO ARQUIVO
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null,'./upLoad') // tem que criar a pasta
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now}_${file.originalname}`) // NOME ORIGINAL DO ARQUIVO PRECEDIDO DA DATA

    }
})
const upload = multer({storage}).single('arquivo') // o argumento 'arquivo' e o name da tag que dispara
// o evento de upLoad

// VAMOS CONFIGURAR O CAMINHO DA REQUISIÇÃO

app.post('/upload',(req, res) =>{ // o segundo argumento é uma função milldle
    upload(req, res, err => { // aqui termino de configurar o multer que está em const upload
        if (err){

            return res.end('Ocorreu um erro')
        }
        res.end('concluido com sucesso') // caso não ocorrá erro
    })
})
/*----------------------AQUI TERMINA A REQUISIÇÃO DE UPLOAD DO MULTER-------------------*/
/*----------------------IREMOS TRABALHAR COM , NESSE EXEPLO, COM FETCH EM REQUISIÇÃO GET------------*/

app.post('/formulario',(req, res)=>{

    res.send({
        ...req.body,
        id:1
    })

}) 

  

 

/*-------VAMOS FAZER DOIS EXEMPLOS COM AXIOS COM REQUISICOES PASSANDO PARAMETROS (UMA GET OUTRA POST)--*/

app.get('/parouimpar',(req,res)=>{
   // em uma requisição tipo get podemos passar parametros de três formas
   //req.body (usamos logo acima)
   //req.query ("url?nome=valor") ex.: "/parouimpar?numero=5"
   //req.params ('url/:dado') ex.: "/parouimpar/5"
   const par = parseInt(req.query.numero)%2 ===0
   res.send({
       resultado:par?"par":'impar'
   })

})

//app.get('/teste',(req,res)=> res.send('OK')) /* REQUISIÇÃO QUE CHEGAR POR ESSA URL TERA A RESPOSTA OK*/


app.listen(8080,()=>{ console.log('Executando')}) // EXECUTANDO O SERVIDOR (PORTA 8080)