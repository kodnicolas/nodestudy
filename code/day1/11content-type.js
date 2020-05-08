var http=require('http')
http.createServer(
    function(req,res){
        // 在服务器默认发送的数据，其实是utf-8编码内容，但是浏览器不知道是utf-8编码
        // 浏览器不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
        // 中文操作系统默认是gbk，解决就是告诉浏览器用什么编码
        // res.setHeader('Content-Type','text/plain;charset=utf-8')
        // Content-Type不能乱写
        // request.setHeader('Content-Type', 'application/json');
        // 告诉浏览器要用json格式去解析
        // res.end('hello世界')
// 在http协议中，Content-type就是用来告知对方我给你发送的数据内容是什么类型
        var url=req.url
        if(url==='/plain'){
            res.setHeader('Content-Type','text/plain;charset=utf-8')
            res.end('普通字符串')
        }else if(url==='/html'){
            // 解析成html
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.end('<strong>html加粗</strong><a href="https://www.baidu.com">点我</a>')
        }else if(url==='/json'){
            res.setHeader('Content-Type','application/json')
            var data=[
                {
                    name:'apple',
                    age:12
                },{
                    name:'banana',
                    age:10
                },{
                    name:'friut',
                    age:9
                },{
                    name:'苹果',
                    age:3
                },
            ]
            res.end(JSON.stringify(data))
        }
    }
).listen(3000,function(){
    console.log('3000服务器创建成功');
})