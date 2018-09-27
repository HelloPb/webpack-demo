const path = require('path');

module.exports = {  
    entry: {
    one: './src/index.js',
    two:  './src/index2.js',
    three:  './src/index3.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
};