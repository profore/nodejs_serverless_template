const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  watch: true,
  watchOptions:{
    poll:1000, //监测修改的时间(ms)
    aggregateTimeout:500, //防止重复按键，500毫秒内算按键一次
    ignored:/node_modules/, //不监测
  }
});