const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const css_mimizer_webpack_plugin = require('css-minimizer-webpack-plugin');
const terser_webpack_plugin = require('terser-webpack-plugin')


module.exports={
    mode: modoDev ? 'development' : "production",
    optimization: {
        minimize: true,
        minimizer: [
            new terser_webpack_plugin(),
            new css_mimizer_webpack_plugin({})
        ]
    },
    entry: './src/principal.js',
    output:{
        filename:'principal.js',
        path: __dirname + "/public"
    },
    plugins:[
        new MiniCssExtractPlugin({
         filename:'estilo.css'   
        }),
        new terser_webpack_plugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module:{
        rules:[{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
           //     'style-loader', // responsavel por injetar o css na DOM a tag <style> // confitrante com o de cima
                'css-loader',
                'sass-loader',
            ]
        }]
    }
}