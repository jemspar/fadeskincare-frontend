const path = require('path');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/public'
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
        test: [/\.png$/, /\.jpg$/, /\.jpe?g$/],
        use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
      },
      {
        test: /\.yaml$/,
        use: {
          loader: 'yaml-loader'
        }
      }
    ]
  }
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
