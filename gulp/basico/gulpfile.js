const gulp = require('gulp');
const {series, parallel} = require('gulp')


function antes1(cb){ // task

    console.log('tarefa antes1 !')

    return cb()
}
function antes2(cb){ // task

    console.log('tarefa antes2 !')

    return cb()
}

function copiar(cb){ // task

   // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt']) // configuração de entrada
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB')) //pipeLine  -- faz uma transformação (podemos ter varias). Nesse caso cria a pasta B
        // e copia para pasta criada

    return cb()
}
function fim(cb){ // task

    console.log('tarefa fim!')

    return cb()
}

module.exports.default= series(
   parallel(antes1, antes2),    
    copiar,
    fim
    )