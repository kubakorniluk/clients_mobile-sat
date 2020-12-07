const path = require('path');
const autoprefixer = require('autoprefixer');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', 'scss']
    },
    devServer: {
        historyApiFallback: true
     },
    module: {
        // loaders
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    { 
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({})
                            ]
                        }
                     }
                ]                
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}