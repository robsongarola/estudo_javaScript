// FUNCTION ARROW

const soma= (a,b)=> a+b;

// TODA FUNÇÃO ARROW E ANONIMA

console.log(soma(5,6))

//O 'THIS' DA FUNÇÃO ARROW NÃO VÁRIA (ELA APONTA PARA O LOCAL ONDE FOI CRIADA)= CONTEXTO LÉXICO

const lexico1 =()=> console.log( this === exports)
lexico1() // RETORNA TRUE

//MESMO FORÇANDO COM BIND() , CALL() E APPLEY() O 'THIS' SEMPRE APONTA PARA CO CONTEXTO LÉXICO

// OPERADOR REST (REUNIR) A ESTRUTORA TAMBÉM É SPREED (ESPALHAR) == VAI DEPENDER DO CONTEXTO

function total(...numeros){
    let total=0
    numeros.forEach( n=> total+=n)
    return total
}

console.log(total(1,2,3,4,5,6))

