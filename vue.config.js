/**
 * vue.config 配置
 * @author maybe
 */
const path = require('path');
// const fs = require('fs')
// __dirname 总是指向被执行 js 文件的绝对路径
const resolve = dir => {
  return path.join(__dirname, dir);
};
// 项目部署基础
// const BASE_URL = process.env.NODE_ENV === 'production' ? '/web' : '/';
module.exports = {
  publicPath: '../',
  assetsDir: 'assets', //静态资源目录(js,css,img,fonts)这些文件都可以写里面
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 输出文件目录
  outputDir: 'dist',
  // webpack-dev-server 相关配置
  devServer: {
    // 禁用host验证
    disableHostCheck: true,
    // 设置主机地址
    host: '0.0.0.0',
    // 设置默认端口
    port: 53333,
  },
};

