const fs = require('fs');

var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'none',
  devtool: 'inline-source-map',
  entry: {
    'polyfills': './src/polyfills.ts',
    'mainApp': './src/main.ts',
    'styles':[
      "./src/styles/styles-app-loading.scss",
      "./src/styles/tailwind.min.css",
      "./node_modules/ngx-toastr/toastr.css",
      "./src/styles/app.scss"
    ]
  },
  output: { 
    filename: '[name].[hash].js',
    //path: path.resolve(__dirname, 'dist')
    path: path.resolve(process.cwd(), 'dist'),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "mainApp",
      filename: 'index.html',
      template: 'src/app/index.html',
      chunks: ['polyfills', 'vendor', 'mainApp','styles']
    }),
    new ManifestPlugin(),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ])
  ],
  resolve: {
    extensions: ['.ts','.tsx', '.js', '.json', '.css', '.scss', '.html'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader', '@angularclass/hmr-loader'],
        exclude: /node_modules/
     },
     {
       test: /\.html$/,
       loaders: ['html-loader']
     },
     {
       test: /\.(woff|woff2|ttf|eot|ico)(\?v=[0–9]\.[0–9]\.[0–9])?$/,
       loader: 'file-loader'
     },
     {
       test: /\.(jpe?g|png|gif|svg)$/i,
       loader: 'file-loader'
     },
     {
       test: /\.json$/,
       loader: 'json-loader',
       include: path.dirname(__dirname, 'src/assets')
     },
     {
       test: /\.css$/,
       loaders: ['style-loader', 'css-loader'],
       include: path.dirname(__dirname, 'src/assets')
     }
    ]  
  },
  devServer: {
    host: 'localhost',
    port: 4204
  }
}