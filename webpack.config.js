// const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
// plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    resolve: {
        extensions: ['.jsx', '.json', '.scss', '.js'],
        roots: [
            path.resolve('./src')
        ],
        alias: {
            styles: path.resolve('./src/styles')
        }
    },
    devtool: 'eval',
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        })
        
    ],
    module: {
        // loaders
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    { 
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer()
                            ]
                        }
                    },
                    'sass-loader'
                ]               
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                include: path.resolve(__dirname, 'src/assets'),
                loader:'file-loader',
                options: {
                    outputPath: 'assets/img',
                    name: '[name].[ext]',
                    esModule: false
                }
            }
        ]
    }
}