const path = require('path');

const APP_PATH = './src/index.js';

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, APP_PATH),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    library: 'default',
    libraryTarget: 'umd',
  },

  resolve: { extensions: ['.js', '.json'] },

  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = () => config;
