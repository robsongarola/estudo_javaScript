// REVISANDO OS AVANÇOS NA QUESTÃO DA NOTAÇÃO DE OBJETOS

const nome ='Fábio';

const pessoa ={
    nome, // não é mais necessário colocar nome:nome
    falar(){
        return `${this.nome} olá`  // não é necessário mais escrever uma função tradicional (function...)
    }
}
console.log(pessoa.falar())

class Animal {}

class Cachorro extends Animal{ // CRIANDO UMA RELAÇÃO DE HERANÇA

    falar(){
        return  'AU AU'
    }
}

console.log(new Cachorro().falar()) //INSTANCIANDO A CLASS CACHORRO