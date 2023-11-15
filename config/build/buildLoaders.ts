import path from 'path';
import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders({isDev}): webpack.RuleSetRule[] {
    const cssLoader = buildCssLoaders(isDev);
    // {
    //     test: /\.s[ac]ss$/i,
    //     use: [
    //       // Creates `style` nodes from JS strings
    //       "style-loader",
    //       // Translates CSS into CommonJS
    //       "css-loader",
    //       // Compiles Sass to CSS
    //       "sass-loader",
    //       {
    //         loader: "sass-loader",
    //         options: {
    //           sassOptions: {
    //             indentWidth: 4,
    //             includePaths: [path.resolve(__dirname, "./src")]
    //           },
    //         },
    //       },
    //     ],
    // };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fontLoader = {
        test: /\.ttf$/,
        type: 'asset/resource',
    }
    return [
        cssLoader,
        typescriptLoader,
        fontLoader
    ]
}