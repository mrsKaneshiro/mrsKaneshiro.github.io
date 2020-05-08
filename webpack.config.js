//导入html-webpack-plugin各类插件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin =new HtmlWebpackPlugin({
    //html-webpack-plugin插件,path模块的具体用法可以在nodeJS查到 
    /**
     * title--生成html文件的标题
     * filename--输出的html的文件名称
     * template--html模板所在的文件路径
     * chunksSortMode设置模块引入的顺序，none不设置顺序
     * __dirname:与当前文件即，webpack.config.js同级别的根路径
     */
    filename:"index.html",
    template:path.join(__dirname,"./src/index.html"),
    chunksSortMode:"none"
})

//webpack 构建的命令npx webpack
//向外暴露模块
module.exports ={
    entry:{
        //设置入口也可以不用设置; ./ 当前目录下找到src
        main:'./src/main.js'
    },
    output:{
        //这个指定与不指定都是被压缩到了这个文件下面的 也会默认生成个index.html
        //'./main.js' 是在内存中生成的，压缩到内存，index.html中可以不用引入这个JS
        filename:'./main.js'
    },
    //设置环境是开发还是生产
    mode: 'development' , //'production',
    //mode: 'production' , //'production',
    
    //插件引入使用
    plugins:[
        htmlWebpackPlugin
    ],
    //其他模块的解析----------这部分配置不是很懂
    module:{
        rules:[
            {
                test:/\.js|.jsx$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
    
    resolve:{
        alias:{
            // 统一组件加载路径，方便组件的引用，绝对路径的字符串拼接
            '@': path.join(__dirname,'./component'),
            'antd':path.join(__dirname,'./lib/antd.js'),
        },
        //resolve-extensions这个规则用于文件名的匹配，
        //如果js为匹配，匹配jsx 而后匹配json
        extensions:['.js','.jsx','.json']
    }
}