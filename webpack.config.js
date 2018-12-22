var path = require('path');
var htmlPlugin  = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app-bundle.js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.(js|jsx|ts|tsx)$/, use: 'babel-loader' },
            { test: /\.(css|scss)$/, use: ['style-loader','css-loader','sass-loader'] },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre" }
        ]
    },
    mode: 'development',
    plugins: [
        new htmlPlugin({
            template: './src/index.html'
        })
    ]
}