var http =require('http');
//  这样就节省了server的对象指向,减少内存的压力
http.createServer(
    function(req,res){
        if(req.url==='/'){
            res.end('index')
        }else if(req.url==='/login'){
            res.end('login')
        }else if(req.url==='/get'){
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
            // 相应内容只能是字符串，或者是二进制
            res.end(JSON.stringify(data))
        }else{
            res.end('404 Not Found')
        }
    }
).listen(3000,function(){
    console.log('服务器创建成功');
})