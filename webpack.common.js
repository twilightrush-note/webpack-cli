const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // 每次构建前清理 /dist 文件夹
    clean: true,
  },

  // module loader 可以链式调用。链中的每个 loader 都将对资源进行转换，不过链会逆序执行。第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推。
  module: {
    rules: [
      {
        // 所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loader
        test: /\.css$/i,
        // 请确保 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后。如果不遵守此约定，webpack 可能会抛出错误。
        use: ["style-loader", "css-loader"],
      },
      {
        // 加载图片
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        // 加载字体
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    //
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],

  optimization: {
    usedExports: true,
  },
};
