export function buildCssLoaders(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            // "css-loader",
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // Если не включает .module, то обрабатывается как обычный css файл
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // Настройка конечных имен файлов стилей: в dev не будет хешироваться
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    }
}
