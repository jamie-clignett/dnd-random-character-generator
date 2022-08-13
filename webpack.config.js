const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/server.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
    // template: '!!prerender-loader?string!index.html',
  })],
  // target: 'node',
  // devServer: {
  //   port: '3000',
  //   static: ['./public'],
  //   open: true,
  //   hot: true,
  //   liveReload: true,
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts'],
  },
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