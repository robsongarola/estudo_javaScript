// OPERADOR ...REST (JUNTAR) / SPREAD(ESPALHAR)
// USAMOS ANTERIORMENTE O REST COMO PARAMETRO DE UMA FUNÇÃO

//USANDO SPREAD COM OBJETO

const funcionario ={ nome:'Maria',salario: 12328.48}
const clone={ ativo:true,...funcionario} // ESTOU 'ESPALHANDO AS PROPRIEDADES DENTRO DO OBJETO CLONE'

console.log(clone)

//NO CONTEXTO DE UM ARRAY

const alunos =['Carlos','Joao','Gloria','Marcio']

const grupoFinal = ['Marcia','Pedro',...alunos,"Hugo"]

console.log(grupoFinal) // IMPORTANTE : ESTAMOS CRIANDO NOVOS OBJETOS E ARRAYS E NÃO MODIFICANDO OS JÁ EXISTENTES
