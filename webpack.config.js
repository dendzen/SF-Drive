const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/scripts/script.js',
  output: {
    filename: 'main.js',
  },
  mode: 'development',
  plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.pug',
        title: 'Index',
        filename: 'index.html'
      })

  ],
  devServer: {
    contentBase: './dist',
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        use: 'eslint-loader',
      },
      {
        test: /\.(eot|ttf|woff|svg)$/i,
        use: ['file-loader'],
      },
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              publicPath: '',
            },
          },
          'css-loader',
        ],
        test: /\.css$/,
      },
    ],
  },
  optimization:{
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin()
    ]
  },
};
