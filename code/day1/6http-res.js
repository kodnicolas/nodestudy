var http=require('http')
var server=http.createServer()
// request请求时间处理函数，需要接受两个参数
// request请求对象
    // 请求对象可以用来获取客户端的一些请求下，例如请求路径
// response响应对象
    // 响应对象可以用来给客户端一些信息，例如请求路径
server.on('request',function(req,res){
    // 
    console.log('收到客户端请求,请求路径是'+request.url);
    // response对象有一个方法write可以来给用户发送相应数据
    // write可以使用多次，最后一定要使用end来结束，否则客户端会一直等待
    response.write('hello')
    response.write(' nodejs')
    response.end()
    // 话说完了可以给用户了

})
// 由于nodejs控制服务端，所有不管客户端后缀加什么返回的都是hello nodejs
// 我希望url不同来返回不同数据，127.0.0.1:3000返回的url是/是根路径
server.listen(3000,function(){
    console.log('服务器创建成功');
    
})