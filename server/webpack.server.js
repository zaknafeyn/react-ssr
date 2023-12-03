const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
  // inform webpack that we're going to build a bundle for node.js rather than for the browser
  target: 'node',
  // Tell webpack the root file of our server application
  entry: './src/index.js',
  //where to put generated output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [
    webpackNodeExternals()
  ]
}

module.exports = merge(baseConfig, serverConfig);
