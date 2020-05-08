console.log('b文件执行了');
// require('./a.js')
var foo='bbb'
// console.log(exports);
exports.foo='hello'
exports.add=function(x,y){
    return x+y
}
var age=13
// 这就相当于把age为13给了exports这个对象里的age
exports.age=age