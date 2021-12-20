const path = require('path');

module.exports = {
    publicPath: './',
    outputDir: 'docs', // 输出文件目录
    indexPath: 'index.html',
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/style/variables.less'),//路径前面需要加点，不然加载不到文件
            ]
        }
    },
};
