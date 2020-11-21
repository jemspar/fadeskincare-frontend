const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  devServer: {
    contentBase: path.join(__dirname,'build'),
    open: true,
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: [/\.png$/, /\.jpg$/, /\.jpe?g$/, /\.svg$/],
        exclude: /node_modules/,
        use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
      },
      {
        test: /\.ya?ml$/,
        exclude: /node_modules/,
        use: {
          loader: 'js-yaml-loader'
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {minimize: true}
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: './index.html',
      title: 'FADE skincare (development)'
    })
  ],
};

// prev use:

// use: {
//         loader: 'babel-loader',
//         options: {
//           presets: [
//             [
//               "@babel/preset-env",
//               {
//                 targets: {
//                   node: "10"
//                 }
//               }
//             ],
//             "@babel/preset-react"
//           ]
//         }
//       }


// babel.config.js

// "@babel/react",
// {
//   "modules": false
// }
