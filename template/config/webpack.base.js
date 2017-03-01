var userConfig = require('../config')
var config = require('./getConfig')()
var path = require('path');
var webpack = require('webpack');
var extend = require('extend')
/**
 * @param {object} settings.externals - 使用全局变量替换模块
 * @param {array|object} settings.entry - 入口文件
 * @param {string} settings.devtool - webpack config devtool
 * @param {array} settings.firstJsLoader  - *.js 最先执行的loader
 * @param {array} settings.lastJsLoader  - *.js 最后执行的loader
 * @param {array} settings.firstPlugins - 最先执行的 plugins
 * @param {array} settings.lastPlugins - 最后执行的 plugins
 * @param {object} settings.output - webpack output 配置
 */
module.exports = function (settings) {
    settings = extend(true, {
        devtool: '',
        entry: [],
        firstJsLoader: [],
        lastJsLoader: [],
        firstPlugins: [],
        lastPlugins: [],
        externals: {}
    }, settings)
    var output = {
        devtool: settings.devtool,
        entry: settings.entry,
        externals: settings.externals,
        output: settings.output,
        plugins: settings.firstPlugins.concat(
            []
        ).concat(settings.lastPlugins),
        lessLoader: {
            lessPlugins: userConfig.less.plugins
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: settings.firstJsLoader.concat(
                        ['babel?' + JSON.stringify(config.babel)]
                    ).concat(settings.lastJsLoader)
                    ,
                    exclude: /node_modules/
                },
                {
                    test: /.css$/,
                    loader: "style!css"
                },
                {
                    test: /[^m]\.less$/,
                    loader: "style!css!less"
                },
                {
                    test: /\.m\.less$/,
                    loader: "style!css?modules&localIdentName=[local]___[hash:base64:5]!less"
                },
                {
                    test: /-m\.less$/,
                    loader: "style!css?modules&localIdentName=[local]___[hash:base64:5]!less"
                },
                { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=1&minetype=application/font-woff' },
                { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=1&minetype=application/font-woff' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=1&minetype=application/octet-stream' },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=1&minetype=image/svg+xml' },
                { test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i, loader: 'url?limit=1' },
                { test: /\.json$/, loader: 'json' }
            ]
        }
    }
    return output
}
