// Must be ES5 as used by webpack
import path from 'path';
import config from './index';

function assembleExcludeRules(){
  var list = config().linkPackages.map((p) => p.alias).join('|');
  return new RegExp('node_modules\\\/(?:[^((?:'+list+'))]).*');
}

const rootDir = path.resolve(__dirname, '..', '..');

export default {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      express: path.resolve(rootDir, 'src', 'client', 'express')
    }
  },
  context: path.resolve(rootDir, 'src'),
  entry: './client',
  output: {
    path: path.resolve(rootDir, '.srv', 'bundles'),
    filename: 'client.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {
        test: /\.(js|jsx)$/,
        exclude: assembleExcludeRules(),
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
