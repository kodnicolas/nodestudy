// art-template模板引擎
/*
    <%= value %>
    <%= data.key %>
    <%= data['key'] %>
    <%= a ? b : c %>
    <%= a || b %>
    <%= a + b %>
    {{$data['user list']}}
    npm i art-template
    该命令在哪执行就会把node_modules安装到哪，这个文件不要改，不支持改
    在node中使用art-template模板引擎，最早就是诞生于服务器领域后来才发展到了前端，node是服务端
    */ 
//    把包引进来，在需要使用的文件模块中加载这个文件，查文档使用api
    var template=require('art-template');
    // template('script标签的id',{对象})不是浏览器所以不行
    // 核心方法：
    // 基于模板名渲染模板
    // template(filename, data);

    // 将模板源代码编译成函数
    // template.compile(source, options);

    // 将模板源代码编译成函数并立刻执行
    // template.render('模板字符串', 替换对象);render第一个参数必须是字符串
    var ret=template.render('hello{{ name }},age{{age}}', {
        name:'jack',
        age:18
    });
    console.log(ret);
    

