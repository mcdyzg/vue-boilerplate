# vue-boilerplate
vue的脚手架，vue + vue-router + vuex

### Usage

```
1. npm install
2. npm start
3. open 0.0.0.0:8082
```
  
### Features

* vue
* vue-router
* vuex



### 目录结构
```
├── dist
├── src
│   ├── components    
│   ├── router    
│   ├── store
│   ├── pages
│   ├── App.vue
│   ├── main.js
├── test
├── package.json
└── README
```

### Explation

1. 使用封装在一起的db模块，请求url都在同一个文件配置，省力。
2. 起初使用fetch，后台发现请求不定时有问题，改用superagent，暂时没发现。
3. 可以在webpack里定义多entry，打包的时候会打出多个包。



