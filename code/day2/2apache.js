var http=require('http')
var fs=require('fs')
var path=require('path')
http.createServer(
    function(req,res){
            var url=req.url
            var wwwDir='D:/cbq/xampp/htdocs/nodestudy/'
            fs.readFile('../../template.html',function(err,ret){
                if(err){
                    return '404 not found'
                }
                // 1、如何得到wwwDir目录列表中的文件名和目录名
                // 用fs.readdir
                // 2、如何将得到文件名和目录名替换到template.html中
                // 模板引擎
                // 只要做了这两件事，问题就解决了
                // 2、1在template.html中需要替换的位置预留一个特殊的标记，就像以前使用模板引擎的标记一样
                // 2、2根据files生成需要的html内容 
                fs.readdir(wwwDir,function(err,files){
                    if(err){
                        console.log('can not found'+wwwDir);
                    }
                    // 生成需要替换的内容
                    var content=''
                    files.forEach(function(item){
                        var FileType=path.extname(item).slice(1)
                        content+=`
                        <tr>
                            <td data-value="${item}/"><a class="icon dir" href="/${wwwDir}+${item}/">${item}</a></td>
                            <td class="detailsColumn" data-value="0"></td>
                            <td class="detailsColumn" data-value="1587000773">2020/4/16 上午9:32:53</td>
                        </tr>
                        `
                        // 获取文件后缀
                        // console.log(path.extname(item).slice(1));

                    })
                    // console.log(files);
                    // res.end(ret)
                    ret=ret.toString()
                    // 普通字符串解析替换文件内容
                    ret=ret.replace('@file@',content)
                    // 把标题也替换
                    ret=ret.replace('@url@',wwwDir)
                    // console.log(ret);
                    res.end(ret)
                })

                
            })
    }).listen(3000,function(){
    console.log('3000服务器启动成功');
    
})