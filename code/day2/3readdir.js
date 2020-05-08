var fs=require('fs')
fs.readdir('D:/cbq/xampp/htdocs/nodestudy',function(err,ret){
    if(err){
        return console.log('目录不存在');
    }else{
        console.log(ret);//返回的是数组
    }
})