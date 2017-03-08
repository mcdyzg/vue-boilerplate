## 使用vue.js的活动框架

基于Vue.js，支持es6语法，rem布局

### 目录结构

-assets 图片文件夹

|

-dist 压缩后文件夹

|

-src 源文件夹

 |
  -app 打包入口文件夹

    |

    -app.js 打包入口等全局设置

    |

    -routes.js 路由配置

    |

    -store.js 数据请求汇总

 |

  -components 组件文件夹

 |

  -modules 模块文件夹

 |

  -pages 页面文件夹

### Build Setup

  ``` bash
  # install dependencies
  npm install

  # serve with hot reload at localhost:8080
  npm run dev

  tips: 开发模式用vue.js能显示报错的具体信息

  # build for production with minification
  npm run build
  ```

  For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

  webpack.config.js 中workSpace变量为当前工作目录 & 访问路径

### api

Vue.js https://vuefe.cn/v2/guide/

es6 http://es6.ruanyifeng.com/#docs/intro


### 活动说明

/test 框架测试代码

/2017  /0203  /lanternFastival  元宵节活动的Vue.js版本
