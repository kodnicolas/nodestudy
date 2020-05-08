var http=require('http')
var fs=require('fs')
// var path=require('path')
var template=require('art-template');
http.createServer(
    function(req,res){
            var url=req.url
            var wwwDir='D:/cbq/xampp/htdocs/nodestudy/'
            fs.readFile('template1.html',function(err,ret){
                if(err){
                    return '404 not found'
                } 
                fs.readdir(wwwDir,function(err,files){
                    if(err){
                        console.log('can not found'+wwwDir);
                    }
                    var htmlStr=template.render(ret.toString(), {
                        title:'haha',
                        files:files
                    });
                    // console.log(html);
                    res.end(htmlStr)
                })
            })
    }).listen(3000,function(){
    console.log('3000服务器启动成功');
    
})