const webpack = require('webpack')


module.exports={
    mode: 'development',
    entry: './src/principal.js',
    output:{
        filename: 'principal',
        path: __dirname + '/public'
    }
}