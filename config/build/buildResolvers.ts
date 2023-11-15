import webpack from 'webpack';
const path = require('path')

import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // Абсолютные пути в приоритете
        //modules: [ path.resolve(__dirname, "src") ],
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
