// example1.js 文件
// 定义有依赖的模块
 
//CommonJS
var example2Obj = require('./example2');
example2Obj.sayHello();
module.exports = example2Obj;

// //AMD

// define([
//     './example2'
// ],function(example2Obj){
//     example2Obj.sayHello();
//     return example2Obj;
// });


//UMD
// (function (root, factory) {
//     // console.log("define",typeof define === 'function')
//     // console.log("object",typeof module === 'object',module.exports)
//     if (typeof define === 'function' && define.amd) {
//         //AMD
//         define(['./example2'], factory);
//     }
//     // else if (typeof module === 'object' && module.exports) {
//     //     //CommonJS
//     //     module.exports = factory(require('./example2'));
//     // } 
//     // else {
//     //     //浏览区全局
//     //     root.example1 = factory(root.example2);
//     // }
    
// }(this, function (example2) {
//     example2.sayHello();
    
//     return {example2}
// }));

//ES6
//名字任意
// import ex2 from "./example2"
// let ex1 = "ex1 ES6!!"
// export {ex1,ex2}
