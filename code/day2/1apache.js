var http=require('http')
var fs=require('fs')
http.createServer(
    function(req,res){
            //监听request请求事件，设置请求处理函数
            /*请求，处理，响应，一个请求对应一个响应，如果在一个请求的过程中，已经结束了，则不能重复发送响应，
            没有请求就没有响应*/
            // console.log(req.url);
            var url=req.url
            // if(url==='/'){
            //     res.end('index')
            // }else if(url==='/index'){
            //     // res.end('data')

            // }else{
            //     res.setHeader('Content-Type','text/html;charset=utf-8')
            //     res.end('<h1>404 not found<h1></br><img src="../../bgc.jpg"></i>')
            // }
            // 这样一层一层判断太麻烦了，弄成和Apache一样的127.0.0.1:80/index/apple/index.html
            // 就跟文件资源控制器一样
            // 首先要获取地址url
            // 齐次通过fs.readFile()方法读取文件，先创建根地址路径
            var wwwDir='D:/cbq/xampp/htdocs/nodestudy/'
            var filePath='index.html'
            if(url!=='/'){//如果不是根路径
                filePath=url
            }
            fs.readFile(wwwDir+filePath,function(err,ret){
                if(err){
                    return res.end('404 Not Found')
                }
                res.end(ret)
            })
    }
).listen(3000,function(){
    console.log('3000服务器启动成功');
    
})