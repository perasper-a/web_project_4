const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: "./page/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", 
    publicPath: ""
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), 
    compress: true,
    port: 8080,
    open: true 
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
    })
],
devServer: {
  static: {
    directory: path.join(__dirname, 'public'),
  },
  compress: true,
  port: 8080,
},
module: {
  rules: [
    // ... other rules
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
},
}
