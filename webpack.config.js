const path = require('path');

module.exports = {
  entry: {
    path: path.resolve(__dirname, 'src'),
    filename: 'index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', presets: ['env', 'react'] }
    ]
  }
};
