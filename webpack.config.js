const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        demo: path.resolve(__dirname, 'src/index.js')
    },
    output:{
        filename:'static/js/[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            //处理es6转es5
            {
                test: /\.m?js$/,
                // exclude: /(node_modules|bower_components)/,
                include:[path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            // 转CSS的
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            //处理图片的
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'static/img/[name].[hash:7].[ext]'
                    },
                },
                ],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        })
    ],
    devtool: 'eval-cheap-module-source-map'
}