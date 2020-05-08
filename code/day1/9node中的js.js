// node 为js提供了很多的api，比如fs，http，path路径操作，os操作系统信息模块等等，也叫作核心模块
// 使用方法
var fs=require('fs')
var http=require('http')
var os=require('os')
var path=require('path')

// 当前系统的cpu信息
console.log(os.cpus());
// 获取操作系统内存大小，这个是字节
console.log(os.totalmem());
// 获取路径后缀名
console.log(path.extname('D:/cbq/apicloud/apph5-yahu/image/hall/close.png'));

