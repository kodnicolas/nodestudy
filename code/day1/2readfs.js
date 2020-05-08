// 浏览器中js是没有文件操作能力的
// 但是nodejs中的js具有文件操作能力
// 如果想要进行文件操作要导入文件操作模块，fs这个模块有文件操作相关操作
var fs=require('fs')//加载使用fs核心模块，require是把模块加进来
// 读取文件
// 要读取的文件路径，第二个参数是一个回调函数
// 回调函数有两个参数一个是
    // error，读取成功的时候是null，读取失败的话就是错误对象
    // data读取失败的时候是null，如果成功的话是数据
fs.readFile('../readme.txt',function(error,data){
    // <Buffer e5 98 bb e5 98 bb e5 98 bb>
// 返回的不是0和1，因为二进制转为16进制了
// 无论是二进制还是16进制，都不行
    console.log(data);
    console.log(data.toString());//嘻嘻嘻
    // 如果你不弹出error的话不会报错
    // 如果有错的话弹出的是个对象
    // 如果没这个文件的话data就是undefined
    if(error){
        console.log('读取文件失败');
        console.log(error);
    }else{
        console.log("数据是:"+data);
    }
})