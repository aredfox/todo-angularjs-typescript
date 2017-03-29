const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.ts', '.js', '.css']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader',
                enforce: 'pre'
            },

            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: 'awesome-typescript-loader'
            },

            {
                test: /.html$/,
                exclude: /index.html$/,
                use: 'html-loader'
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader?limit=100000'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'ToDoSth',
            template: 'index.html',
            inject: true
        }),
        new LoaderOptionsPlugin({
            debug: true,
            options: {
                tslint: {
                    configuration: require('./tslint.json')
                }
            }
        }),

    ],

    devtool: 'cheap-module-source-map',

    devServer: {
        contentBase: path.join(__dirname, ".tmp"),
        compress: true,
        port: 9000
    },

    entry: './index.ts',
    output: {
        path: path.join(process.cwd(), '.tmp'),
        filename: 'index.js'
    },
};
