const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// make index.html that talks to appropriate script
// where does my bundle go - public folder? 
// webpack dev server on the right port 
// setting up a proxy
// adjusting script so that the node server is setup
// handling file & folder management

module.exports = {
  mode: 'development',
  entry: './public/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  // plugins: [new HtmlWebpackPlugin({
  //   template: './public/index.html'
  //   // template: '!!prerender-loader?string!index.html',
  // })],
  // target: 'node',
  // devServer: {
  //   port: '3000',
  //   static: ['./public'],
  //   open: true,
  //   hot: true,
  //   liveReload: true,
  // },
  // resolve: {
  //   extensions: ['.js', '.jsx', '.json', '.ts'],
  // },
  // stats: {
  //   children: true
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ],
  },
};