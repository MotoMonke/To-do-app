const path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    mode:"development",
    entry:"./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        watchFiles: ["./src/template.html"],
      },
      
      devtool: "eval-source-map",
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html",
        }),
      ],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
};