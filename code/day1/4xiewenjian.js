var fs= require('fs')//文件操作
// 写文件，如果文件没有的话先创建之后再把内容放进去，如果已经存在的话直接改写文件内容
// 第一个参数就是要写的文件路径，第二个就是要写的文件路径，第三个参数就是回调函数,只接受一个参数就是error
// 这里注意的是文件名字不能有特殊字符例如> ,<之类的
fs.writeFile('../readme1.txt','段东杰',function(error){
    // error成功就是null，失败就是错误参数
    console.log(error);
    if(error){
        console.log('写入成功');
    }else{
        console.log('写入失败');
    }
})