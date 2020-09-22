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
  },
  devServer: {
    open: true, // 是否自动启动浏览器
    // host: 'localhost',
    // port: 8080,
    // https: true,
    disableHostCheck: true, // 不校验host，可以自定义hosts
    // Paths
    // assetsRoot : 在当前目录的上一级 的 dist目录下输出资源文件
    // assetsSubDirectory: 把所有的静态资源打包到 dist下的 assets文件夹下
    // assetsPublicPath :代表生成的index.html文件，里面引入资源时，路径前面要加上 ./hello/,也就是assetsPublicPath的值 ``。由此可见 ，可以直接设置assetsPublicPath为绝对路径，如线上路径前缀，https://www.yourdomain.com/,则打包后的路径，全部会加上这个前缀，如果配置package.json的一些参数，就可以放心的把自己html里面的内容复制出来，放在任何地方都可以用了。
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    //
    // assetsRoot: path.resolve(__dirname, '../dist'),
    // assetsSubDirectory: './assets/',
    // assetsPublicPath: './snackbar/',
    proxy: {
      "/api": {
        target: "http://localhost:3000", // nodejs服务器地址
        changeOrigin: true, // 是否允许跨越
        pathRewrite: {
          // 重写，用/api代替target值，如'/api/user/add'
          "^/api": ""
        }
      }
    }
  }
};
