var http=require('http')
http.createServer(function(req,res){
    console.log('请求我的客户端的地址是'+req.socket.remoteAddress);
    console.log('请求我的客户端的端口号是'+req.socket.remotePort);

    
    if(req.url=='/'){
        res.end('index page')
    }else if(req.url=='/get'){
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
    }else{
        res.end('404 not found')
    }
}).listen(3000,function(){
    console.log('3000端口号服务器创建成功');
})
http.createServer(function(req,res){
    console.log('请求我的客户端的地址是'+req.socket.remoteAddress);
    console.log('请求我的客户端的端口号是'+req.socket.remotePort);

    
    if(req.url=='/'){
        res.end('index page')
    }else if(req.url=='/get'){
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
                name:'xx',
                age:3
            },
        ]
        res.end(JSON.stringify(data))
    }else{
        res.end('404 not found')
    }
}).listen(8000,function(){
    console.log('8000端口号服务器创建成功');
})
http.createServer().listen(3000,function(){console.log('3000端口号创建成功');
})
http.createServer().listen(8000,function(){console.log('8000端口号创建成功');
})