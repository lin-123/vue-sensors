const path = require('path');
const webpack = require('webpack')

const devConf = {
  entry: {
    app: './example/umd.js',
  },
  devtool: '#inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /dist|node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  },
  output: {
    filename: 'umd.min.js',
    path: path.resolve(__dirname, '.'),
    publicPath: '/',
  }
};

module.exports = devConf