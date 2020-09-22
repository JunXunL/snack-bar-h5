# snack-bar-h5

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 学习积累
## vue-cli中自定义路径别名assets和static文件夹的区别
### assets目录中的文件会被webpack处理解析为模块依赖，只支持相对路径形式。例如，在 <img src="./logo.png"> 和 background: url(./logo.png)中，”./logo.png” 是相对的资源路径，将由Webpack解析为模块依赖。
### static/ 目录下的文件并不会被Webpack处理：它们会直接被复制到最终的打包目录（默认是dist/static）下。必须使用绝对路径引用这些文件，这是通过在 config.js 文件中的 build.assetsPublicPath 和 build.assetsSubDirectory 连接来确定的。任何放在 static/ 中文件需要以绝对路径的形式引用：/static/[filename]。在实际的开发中，总的来说：static放不会变动的文件 assets放可能会变动的文件。
