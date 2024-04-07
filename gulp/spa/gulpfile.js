const {series, parallel}= require('gulp');
const gulp = require('gulp');

const {appHTML, appJS, appCSS, appIMG} = require('./gulpTasks/app');
const {depsCSS, depsFONTS}= require('./gulpTasks/deps');
const {monitorarArquivos, servidor}= require('./gulpTasks/servidor');




exports.default=series(
    parallel(
        series(appHTML, appJS, appCSS, appIMG),
        series(depsCSS, depsFONTS)
        ),
    servidor,
    monitorarArquivos
)