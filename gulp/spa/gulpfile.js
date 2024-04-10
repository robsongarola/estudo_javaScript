const { series, parallel } = require('gulp');
const gulp = require('gulp');

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app');
const { depsCSS, depsFONTS } = require('./gulpTasks/deps');
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor');




exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFONTS)
    ),
    monitorarArquivos,
    servidor

)