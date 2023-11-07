const path = require('path')

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
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      sassOptions: {
                        indentWidth: 4,
                        includePaths: [path.resolve(__dirname, "./src")]
                      },
                    },
                  },
                ],
            },
            {
                test: /\.ttf$/,
                type: 'asset/resource',
            },
        ]
    }
}