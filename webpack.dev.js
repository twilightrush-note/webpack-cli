const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", // development | production | none
  devtool: "inline-source-map",
  // webpack-dev-server 提供了一个能够实时重新加载的基本的 web server
  devServer: {
    static: "./dist",
    hot: true, // hrm 热更新
  },
});
