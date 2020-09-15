const path = require("path");
module.exports = {
  configureWebpack: config => {
    // 目录引用简写
    const srcDir = path.resolve(__dirname, "src");
    const aliasExt = {
      "@public": path.resolve(__dirname, "public"), // public 文件夹
      "@assets": path.resolve(srcDir, "assets"),
      "@components": path.resolve(srcDir, "components"),
      "@store": path.resolve(srcDir, "store")
    };
    Object.assign(config.resolve.alias, aliasExt);
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置
    } else {
      // 为开发环境修改配置
    }
  }
};
