// 基于文本webpack的开发 是基于模块化的开发
// var Vue = require('vue') node.js的模块化遵守 CommonJS规范

// ES6模块化的语法 
import Vue from 'vue';
import App from './App.vue';

// 导入bootstrap的样式 3.3.7
import 'bootstrap/dist/css/bootstrap.css';
// 导入全局的样式
import './assets/css/index.css';
// 导入路由模块
import router from './routers';
import axios from 'axios';
// 为axios 添加url头
axios.defaults.baseURL = 'http://localhost:3000/';
// 给vue 的原型添加 axios属性
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
