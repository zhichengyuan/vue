//引用插件
var uglifyjs = require('uglifyjs-webpack-plugin');
var providePlugin = require({$:'jquery',jQuery:'jquery','window.jQuery'});
module.exports = {
    entry:{
        demo:'./src/demo.js',
        index:'./src/index.js'
    },

    output:{
        path:__dirname + '/out',
        filename:'[name].bundle.js',
        publicPath:'./out'
    },

    module:{
        rules:[
            {test:/.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/.jpg|png$/,use:['url-loader?limit=10&name=./[name].[ext]']}
        ]
    },
    //加载插件
    plugins:[
        new uglifyjs(),
        providePlugin
    ],
    mode:'development'
    //loader
    //plugin
}