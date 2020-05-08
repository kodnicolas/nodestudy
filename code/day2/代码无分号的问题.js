function name(){
    console.log(1);
    
}
name()

;(function(){
    console.log(2);
})()
;['apple',12,123].forEach(function(item) {
    console.log(item);
});
[1,2,3,4].forEach(element => {
    console.log(element);
})
// ``是es6新增的字符串包裹方式，叫做模板字符串
// 支持换行和非常方便的拼接变量
var foo=`bar    foo`
console.log(foo);
`hello`.toString()
/*当你采用无分号的代码风格的时候，只需要注意下面的情况就不会有上面的问题了
    当一行代码是以：
    [
    (
    `
    开头的时候，则在前面补上一个分号用以避免一些语法解析错误
    结论：无论你的代码是否有分号，如果一行代码[、(、`最后都要在其前面加上;保证没问题
    */