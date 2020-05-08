// 用node构建服务器，
// 在node中提供了一个核心模块和fs差不多，叫http
// 这个模块的职责就是帮你创建编写服务器的
// 1、导入核心模块，名字随便取
var http=require('http')
// 2、使用http.createServer()方法创建一个web服务器
// 返回一个server实例
var server=http.createServer()
// 3、服务器发请求，接收请求，发送相应，处理请求
// 接请求
// 注册request请求事件，当客户请求过来，就会自动触发服务器的request请求事件,然后执行第二个参数，回调处理函数
server.on('request',function(){
    // 当服务器收到请求，执行处理函数
    console.log('收到请求了');
})
// 4、绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功');
})
// 终端node 5http.js之后显示服务器启动成功，之后再浏览器输入127.0.0.1:3000之后回车，这个终端就会提示收到请求了
