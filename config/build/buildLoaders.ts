import path from 'path';
import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            }
                        }
                    ]
                }
            }
        }],
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