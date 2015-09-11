// Must be ES5 as we pull in the config via the commandline

var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  context: path.resolve(__dirname, 'src'),
  entry: './client',
  output: {
    path: path.resolve(__dirname, '.srv', 'bundles'),
    filename: 'client.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
