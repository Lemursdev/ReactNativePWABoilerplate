const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: ['babel-polyfill', path.join(__dirname, '../../src/web/index')],
    output: {
        // path: path.join(__dirname, '../../src/web'),
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[contenthash].js',
    },
    module: {
        rules: [
            // Take all sass files, compile them, and bundle them in with our js bundle
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', // Creates `style` nodes from JS strings
                    'css-loader', // Translates CSS into CommonJS
                    'sass-loader', // Compiles Sass to CSS
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.json5$/i,
                loader: 'json5-loader',
                type: 'javascript/auto',
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: '../../config/web/tsconfig.json',
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev'),
                PLATFORM_ENV: JSON.stringify('web'),
            },
        }),
        new HtmlWebpackPlugin({
            title: 'JobTag React App',
            template: 'public/web/index.html',
            publicUrl: 'public',
        }),
        new webpack.HotModuleReplacementPlugin(), // Imports and destroys modules without having to reload.
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json', 'jsx'],
    },
};
