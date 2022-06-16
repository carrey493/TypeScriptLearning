//引入一个包
const path = require('path')
const HTMLWebapckPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//webpack 中所有的配置信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: './src/index.ts',
    //指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        //打包后文件名
        filename: 'bundle.js'
    },
    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定规则生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: 'ts-loader',
                //要排除的文件
                exclude: /node_modules/
            }
        ]
    },
    //配置webpack的插件
    plugins: [
        new HTMLWebapckPlugin({
            // title:'自定义title'
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    //用来配置模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}