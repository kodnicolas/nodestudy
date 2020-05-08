var foo='bar';
function adds(x,y){
    return x+y
}
function plus(x,y){
    return x-y
}
// 把这个adds当做add给mainjs传过去，只能得到想给你的成员,这就把两个函数发过去了
exports.add={adds,plus}//即使下面exports={}也不影响传
// exports是一个对象，可以多次为这个对象添加成员
// 必须要.才能访问，有时候仅仅导出一个方法就可以了
// exports=add;//这样是不行的，
// module.exports=add//这样就可以，如果一个模块需要直接导出一个成员而非挂载的方法
// 重新这个时候必须这个方式，重新赋值
exports={}//这样写发送过去的是空对象，和module的exports没关系，因为这个exports指针指向了另一个对象
// exports.foo='hello'
module.exports='hello'//现在就只是传一个字符串
exports.foo='123'//现在又变成了对象，返回的是hello，
// 原因是给module.exports重新复制就断开了exports，
// 最后永远返回的都是module.exports，
exports=module.exports//这样就重新的联系到了一起
exports.a='foo'