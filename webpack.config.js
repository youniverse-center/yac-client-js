const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: 'index.js',
    library: 'YacClient',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: ['js-cookie'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          },
          {
            loader: 'ts-loader'
          },
        ],
        exclude: /node_modules/
      }
    ]
  }
}