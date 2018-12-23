var path = require('path');
var htmlPlugin = require('html-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');

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
            { test: /\.(js|jsx|ts|tsx)$/, use: 'babel-loader', exclude: /node_modules/, },
            { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.(js|jsx|ts|tsx)$/, loader: "source-map-loader", enforce: "pre" },
            { test: /\.(ts|tsx)?$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    mode: 'development',
    plugins: [
        new htmlPlugin({
            template: './src/index.html'
        }),
        new TSLintPlugin({
            files: ['./src/**/*.ts', './src/**/*.tsx']
        })
    ]
}