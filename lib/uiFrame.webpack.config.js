const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelOptions = {
  "presets": ["@babel/env", "@babel/typescript", "@babel/react"],
  "plugins": [
    "@babel/plugin-proposal-numeric-separator",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}

const config = {
  mode: 'development',
  entry: './uiFrame/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist.uiFrame'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.tsx?/, use: {
          loader: 'babel-loader',
          options: babelOptions
        } 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './uiFrame/index.html' })
  ] 
}

module.exports = config;