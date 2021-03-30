const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  entry: './index.js',
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/index.html',
    },
  },
};

module.exports = merge(commonConfig, devConfig);
