
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: "./page/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", 
    publicPath: ""
  },
  target: ['web', 'es5'], 
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), 
    compress: true,
    port: 8080,
    open: true 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html" // path to our index.html file
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
devServer: {
  static: path.resolve(__dirname, './dist'),
  compress: true,
  port: 8080,
  open: true
},
module: {
  rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader"
        },
        // add postcss-loader
        "postcss-loader"
      ],
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { importLoaders: 1 },
        },
        "postcss-loader"
      ] ,
    },
    {
      test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
      type: "asset/resource"
    },
  ],
},
stats: {
  children: true,
},
}
