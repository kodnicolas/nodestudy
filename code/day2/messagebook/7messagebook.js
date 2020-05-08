// 留言板
var fs =require('fs')
var http=require('http')
var template=require('art-template')
var url=require('url')

// 写死一个数据
var comment=[
    {id:'1',name:'cbq1',content:'第1条数据',time:'2019.12.12'},
    {id:'2',name:'cbq2',content:'第2条数据',time:'2019.12.12'},
    {id:'3',name:'cbq3',content:'第3条数据',time:'2019.12.12'},
    {id:'4',name:'cbq4',content:'第4条数据',time:'2019.12.12'},
    {id:'5',name:'cbq5',content:'第5条数据',time:'2019.12.12'},
]
http.createServer(function(req,res){
    // if()
    var parseObj=url.parse(req.url,true)//根据地址获取对象
    var pathname=parseObj.pathname//获取对象内的路径
    var parameter=parseObj.query//获取传过来的参数
    // 更改字符
    if(pathname==='/'){
        fs.readFile('./messagebook.html',function(err,data){

            if(err){
                return res.end('404请求不到留言板')
            }else{
                res.setHeader('Content-Type','text/html;charset=utf-8')
                // 这里请求头直接设置为了html，所以浏览器就会把获取到的文件全部以html格式解析
                // 如果页面，用script加bootstrap之类的样式的话，是请求不到bootstrap样式文件的
                // 我们为了方便统一处理这些静态资源，所以约定把所有的静态资源存放到public目录中
                /*可以统一处理*/
                // 首先吧html文件转换为字符串然后把 
                var str=template.render(data.toString(), {comment:comment});
                res.end(str)
            }
        })
    }else if(pathname.indexOf('/public/')===0){
        // 判断是否请求这个Public里面的东西
        // 允许获取public里面的所有东西
        // public/jquery.css
        // public/bootstrap/css/bootstrap.css
        /*如果是以public开头的则认为是获取public里的某个资源，
        把请求路径当做文件路径来直接进行读取*/
        // 资源访问是可控的
        // console.log(url);//弹出请求地址
        // 用fs方法读文件,这里的点不能省略
        fs.readFile('.'+pathname,function(err,data){
            if(err){
                return res.end('404 未找到此静态文件')
            }else{
                res.end(data)
            }
        })
    }else if(pathname=='/post'){
        // 跳转到发表的页面
        fs.readFile('post.html',function(err,data){
            if(err){
                return res.end('404 未找到此静态文件')
            }else{
                res.end(data)
            }
        })
    }else if(pathname.indexOf('/pull')==0){
        // 点击评论之后,请求的是pull这个接口，然后传参数、后面的这个true是获取传的参变为中文
        // let pull = url.parse(pathname,true);
        // console.log(pull.query);//获取传过来的参数
        let newobj={}
        newobj.name=parameter.name;
        newobj.content=parameter.content;
        newobj.time=new Date()
        comment.push(newobj)//加入新数据
        // 下面就是重新请求首页
        // 如果通过服务器让客户重定向？
        // 1、状态码设置为302临时重定向,浏览器不会记忆，访问a的时候跳到b.com，之后请求的话还是会请求a.com，再跳到b.com
        // 301是永久重定向，浏览器会记住，第一次访问a.com的时候跳转到b.com，之后再访问a.com的时候，直接跳到b.com不会请求a.com
        // 2、在响应头中通过通过location告诉客户端往哪重定向
        // 如果客户端收到服务器的响应的状态码是302，就会自动响应投中找location，然后对该地址发起新的请求
        // 所以你就能从客户端自动跳转
        res.statusCode=302//设置状态码是302
        res.setHeader('Location','/')//调回到根目录
        res.end()
    }else{
        // 处理请求不到的文件就返回404
        fs.readFile('./notfound.html',function(err,data){
            if(err){
                console.log('error!');
            }else{
                res.end(data)
            }
        })
    }
    // res.end('hello')

}).listen(3000,function(){
    console.log('3000端口服务器启动成功');
})