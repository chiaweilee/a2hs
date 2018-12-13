const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.json']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: require('./babel.config')
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          'remove-flow-types-loader'
        ],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `${process.env.npm_package_name} v${process.env.npm_package_version}\n` +
        '(c) 2018 +v\n' +
        'Released under the MIT License.'
    })
  ]
}
