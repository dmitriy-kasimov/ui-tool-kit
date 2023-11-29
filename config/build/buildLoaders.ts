import path from 'path';
import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders({isDev}): webpack.RuleSetRule[] {
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

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        cssLoader,
        typescriptLoader,

    ]
}