const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        path: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use:[{
                loader: "babel-loader"
            }]
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "index.html"
        })
    ],
    mode:'development',
    devServer: {
        open:true,
        port:8080
    }
}