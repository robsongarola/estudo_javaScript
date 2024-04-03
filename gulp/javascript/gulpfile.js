const {series} = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');



function padrao(cb){

    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // sem comentarios
            presets: ['env'] // versão do javascript mais recente
        }))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .on('error',err => console.log(err)) // caso queiremos tratar algum erro, podemos lancar mão do .on()
        .pipe(gulp.dest('build'))   // que dispara um evento. No caso error
    return cb()
}

module.exports.default= series(padrao)