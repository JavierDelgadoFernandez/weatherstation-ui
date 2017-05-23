/* eslint-disable */
const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: [
        'babel-polyfill',
        path.join(__dirname, 'src', 'js', 'main.js')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'weatherstation-ui.js'
    },
    module: {
        rules: [
            {
                test: /.(js)$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                include: [
                    path.resolve(__dirname, "src"),
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};
