// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//CommonJS / AMD 
var example1Obj = require('./assets/example1');

console.log("example1 in main",example1Obj)

//ES6
// import {ex1,ex2} from './assets/example1'
// console.log("ex1:",ex1,"ex2:",ex2)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
