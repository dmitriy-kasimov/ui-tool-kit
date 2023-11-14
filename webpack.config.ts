const path = require('path')
import { buildLoaders } from './config/build/buildLoaders'

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
        modules: [ path.resolve(__dirname, "src") ],

    },
    externals: {
        react: 'react'
    },
    module: {
        rules: buildLoaders()
    }
}