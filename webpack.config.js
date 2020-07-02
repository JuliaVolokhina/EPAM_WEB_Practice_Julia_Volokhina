const globals = require('./globals.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const jsToScss = require('./utils/jsToScss.js');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: { path: __dirname + '/dist', filename: 'bundle.js' },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: globals,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: { 
            	prependData: jsToScss(globals)
            },
          },
        ],
      },
    ],
  },
};