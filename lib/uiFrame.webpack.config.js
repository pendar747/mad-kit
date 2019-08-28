const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelOptions = fs.readFileSync(path.resolve(__dirname, './uiFrame/.babelrc'), { encoding: 'utf8' });

console.log(babelOptions);

const options = {
  "presets": ["@babel/env", "@babel/typescript", "@babel/react"],
  "plugins": [
    "@babel/plugin-proposal-numeric-separator",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}

const config = {
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
          options
        } 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './uiFrame/index.html' })
  ] 
}

module.exports = config;