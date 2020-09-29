const path = require("path");
const env = process.env.npm_config_env; // process.env属性返回的是一个包含用户环境信息的对象，可以区分开发环境或正式环境的依据
let nodeServer = "http://localhost:3000";
if (env === "product") {
  nodeServer = "http://localhost:3333";
} else {
  nodeServer = "http://localhost:3000";
}
module.exports = {
  configureWebpack: config => {
    // 目录引用简写
    const srcDir = path.resolve(__dirname, "src");
    const aliasExt = {
      // @ 是 src/ 的别名
      "@public": path.resolve(__dirname, "public"), // public 文件夹
      "@assets": path.resolve(srcDir, "assets"),
      "@components": path.resolve(srcDir, "components"),
      "@constants": path.resolve(srcDir, "constants"),
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
        target: nodeServer, // nodejs服务器地址
        changeOrigin: true, // 是否允许跨越
        pathRewrite: {
          // 重写，用/api代替target值，如'/api/user/add'
          "^/api": ""
        }
      }
    }
  },
  css: {
    // css预设器配置项
    loaderOptions: {
      postcss: {
        // vue-cli3.x项目引入vant-ui1.6.21，要求在项目中使用rem单位，但vant是px的。
        // 故，需要添加一个自动转换插件和一段修改html根元素的font-size值的脚本
        plugins: [
          require("postcss-pxtorem")({
            // 换算基数
            rootValue: 35.5, // 16px = 0.4507rem; 基数是100：16px = 0.16rem
            propList: ["*"]
          })
        ]
      },
      // 给 sass-loader 传递选项
      sass: {
        // prependData: `@import "~@/variables.sass"` // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效，`scss` 语法要求语句结尾必须有分号，而`sass` 则要求必须没有分号
        // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
        // scss: { // `scss` 语法在内部也是由 sass-loader 处理的
        prependData: `@import "@assets/style/fontSize.scss";`
      },
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          // 全局设置
          // primary: '#fff'
        },
        modifyVars: {
          // 修改
          // 'font-size-sm': '14px'
        }
      }
    }
  }
};
