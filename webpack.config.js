module.exports = {
  entry: {
    'hello': __dirname + '/src/js/index.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    library: 'Hello',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: 'development',
  devServer: {
    contentBase: __dirname + '/public',
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}