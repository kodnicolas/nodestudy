var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    // 如果想发送页面的话
    // 不同的资源对应不同的Content-Type
    // 
    var url=req.url;
    if(url==='/'){
        fs.readFile('../index.html',function(err,data){
            if(err){
                // res.setHeader('Content-Type','text/html;chaset=utf-8')
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('404 not found 错误');
            }else{
                res.setHeader('Content-Type','text/html;chaset=utf-8')
                // data默认是二进制，toString方法进行转换
                res.end(data)
            }
        })
    }else if(url==='/img'){
        fs.readFile('../bgc.jpg',function(err,data){
            if(err){
                // res.setHeader('Content-Type','text/html;chaset=utf-8')
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('404 not found 错误');
            }else{
                // 图片就不需要指定编码了，因为我们常说的编码指的是字符编码
                res.setHeader('Content-Type','image/jpeg')
                // data默认是二进制，toString方法进行转换
                res.end(data)
            }
        })
    }else if(url==='css'){
        fs.readFile('../main.css',function(err,data){
            if(err){
                // res.setHeader('Content-Type','text/html;chaset=utf-8')
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('404 not found 错误');
            }else{
                // css就需要指定编码了
                res.setHeader('Content-Type','text/css;charset=utf-8')
                // data默认是二进制，toString方法进行转换
                res.end(data)
            }
        })
    }
}).listen(3000,function(){
    console.log('3000服务器启动');
})