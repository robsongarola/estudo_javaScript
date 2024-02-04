//PROMISE ESTÁ RELACIONADO AO RETORNO DE UMA PROMESSA (QUE PODE SER POSITIVA (RESOLVE) OU NEGATIVA (REJECT))
// A PROMOSE TRABALHA COM REQUISIÇÕES ASSÍCRONAS

function falarAlgo(frase,segundos){
    //PARA SIMULAR A REQUISIÇAO ASSÍCRONA USAREMOS O MÉTODO SETIMEOUT     
        return new Promise((resolve,reject)=>{
               setTimeout(()=>{
                    resolve(frase)
               },segundos*1000)
        })
}

   falarAlgo('Ola',3)
            .then( frase => frase.concat('?!?!'))
            .then( novaFrase => console.log(novaFrase)) 
