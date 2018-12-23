const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, args) => {
    const devMode = args.mode === 'development';
    console.log('devMode ' + devMode);
    return {
        entry: "./src/index.tsx",
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app-bundle.js'
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        module: {   //for unbundled files
            rules: [
                { test: /\.(js|jsx|ts|tsx)$/, use: 'babel-loader', exclude: /node_modules/, },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { test: /\.(js|jsx|ts|tsx)$/, loader: "source-map-loader", enforce: "pre" },
                { test: /\.(ts|tsx)?$/, loader: 'ts-loader', exclude: /node_modules/ },
                {
                    test: /\.(css|scss)$/, use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                }
            ]
        },
        plugins: [  //for bundled files
            new htmlPlugin({
                template: './src/index.html'
            }),
            new TSLintPlugin({
                files: ['./src/**/*.ts', './src/**/*.tsx']
            }),
            new MiniCssExtractPlugin({  //doesn't work without 'MiniCssExtractPlugin.loader'. So, works only in prod mode.
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css',
            })
        ]
    };
}