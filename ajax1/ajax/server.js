const bodyParser= require('body-parser');
const express=require('express');
const app=express();

app.use(express.static('.')) // ESTOU INFORMANDO QUE O EXPRESS IRÁ PROVER TODOS OS ARQUIVOS DA PASTA RAIZ
app.use(bodyParser.urlencoded({extended:true})) // VAI TRATAR AS REQUISIÇOES SUBMIT E TRANSFORMAR EM OBJETO
app.use(bodyParser.json()) // CHAGANDO UMA REQUISIÇÃO QUE VENHA EM JSON , ESSE SERÁ O PARSER QUE TRANSF EM OBJETO

app.get('/teste',(req,res)=> res.send('OK')) /* REQUISIÇÃO QUE CHEGAR POR ESSA URL TERA A RESPOSTA OK*/