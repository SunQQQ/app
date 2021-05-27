const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: "./src/components/layer/runoob1.js",
    // 设置输出文件
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "js/[name]]]]h5.js"
    },
    // 解决fs报错
    resolve: {
        fallback: {
            fs: false
        }
    },
    // 设置loader解析js和json以外类型的文件
    module: {
        rules: [
            //test属性表示要处理的类型，use属性表示用什么load插件
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
                exclude: /node_modules/,
            },
        ],
    },
    // 使用插件，自动创建根html。该html会自动引入编译后的入口js，且未编译的根index.html不需要引入入口js
    plugins: [new HtmlWebpackPlugin({
        // 此参数使生成的html隐射到根目录index.html
        template: 'index.html',
        // 把js引入标签放在body里
        inject: "body"
    })],
};