// Must be ES5

var path = require('path');

var loc = path.resolve(__dirname, '..');
module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  context: path.resolve(loc, 'src'),
  entry: './client',
  output: {
    path: path.resolve(loc, '.srv', 'bundles'),
    filename: 'client.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },
      { test: /\.json$/, loader: 'json-loader'}
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
