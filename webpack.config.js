const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path=require('path')

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: "styles.css",
    }),
    new HtmlWebPackPlugin(),
  ],
  devServer: {
    port: 1234,
  },
  resolve:{
    alias:{
      Components : path.resolve(__dirname,'src/components'),
      Pages : path.resolve(__dirname,'src/pages'),
      Icons : path.resolve(__dirname,'src/icons')
    }
  }
};
