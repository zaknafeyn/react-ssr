const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

 const clientConfig = {
  // Tell webpack the root file of our server application
  entry: './src/client/client.js',
  //where to put generated output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, clientConfig);
