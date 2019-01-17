// example2.js 文件
//没有依赖的js
// CommonJS
var me = {
    sayHello:function(){
        console.log('我是example2 in CommonJS!');
    }
};
module.exports = me;


//AMD
// define([
// ],function(){
// 	var we = {};
//     return {
//         sayHello:function(){
//             console.log('我是example2 in AMD!');
//         }
//     };
// });


//UMD
// (function (root, factory) {
//     if (typeof define === 'function' && define.amd) {
//         define([],factory);
//     }
//     // else if(typeof module === 'object' && module.exports) {
//     //     module.exports = factory();

//     // } 
//     // else {
//     //     root.example2 = factory();
//     // }

// }(this, function () {
//     var obj = {a:"i am obj!"}
//     return {
//         sayHello:function(){
//             console.log('hello world Alex!');
//         },
//         obj
//     };
// }));

//ES6
// const str = "First ES6";
// let obj = {
//     func:() => {
//         console.log("I am in ES6")
//     }
// }
// //只能一个default
// export default{
//     str,
//     obj
// }