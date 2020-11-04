const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', path.join(__dirname, '../src/web/index')],
    output: {
        path: path.join(__dirname, '../build/'),
        filename: 'bundle.js',
        publicPath: '/',
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
                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify('production'),
                PLATFORM_ENV: JSON.stringify('web'),
            },
        }),
        // optimizations
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: true,
                    ecma: 6,
                    output: {
                        comments: false,
                    },
                    compress: {
                        warnings: false,
                        dead_code: true,
                        drop_console: true,
                    },
                },
                sourceMap: false,
            }),
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json', 'jsx'],
    },
};
