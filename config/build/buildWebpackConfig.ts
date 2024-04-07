import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: 'index.js',
            path: paths.build,
            libraryTarget: "umd",
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'eval' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        externals:{
            react: 'react'
        }
    };
}
