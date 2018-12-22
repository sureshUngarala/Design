var path = require('path');
var htmlPlugin  = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, dist),
        filename: 'app-bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader,css-loader'] }
        ]
    },
    mode: 'development',
    plugins: [
        new htmlPlugin({
            template: './src/index.html'
        })
    ]
}