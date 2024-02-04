// PRIMEIRO VIMOS QUE A PALAVRA RESERVADA LET PARA DESIGNAR UMA VARIÁVEL TEM ESCOPO DE BLOCO

{
    var a =5;
    let b=6
    console.log(b) // só é lida no interior do bloco que foi declarada
}
console.log(a)

// TEMPLATE STRIG

const produto ='computador';

console.log(`O ${produto} é caro`)

// VIMOS O DESTRUCTION E SPREED

const [l,e,...tra]='Garola'

console.log(l,e,tra)

// VIMOS TAMBÉM O DESTRUCTION EM UM ARRAY

const [x,,y]=[1,2,3]

console.log(x,y) // O valor literal 2 não foi setado

// em um objeto

const {idade:i,nome}={nome:'Joana',idade:15} // É POSSÍVEL , NO OPERADOR DESTRUCTION MUDAR O NOME DA VARIÁVEL

console.log(nome,i)
