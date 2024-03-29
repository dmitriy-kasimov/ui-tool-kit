import path from 'path';
import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|ttf)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],   
    };
    const cssLoader = buildCssLoaders(isDev);

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });
    return [
        fileLoader,
        svgLoader,
        cssLoader,
        codeBabelLoader,
        tsxBabelLoader,
    ]
}