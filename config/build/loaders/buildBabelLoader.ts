import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions{
    isTsx?: boolean;
}

export function buildBabelLoader(options: BuildBabelLoaderProps) {
    const { isTsx } = options;
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                ].filter(Boolean),
            },
        },
    };
}
