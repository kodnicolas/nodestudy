require('fs')//模块标识符
/* 1核心模块
    2第三方模块
    3自己的模块
    如果是非路径形式的模块标识
    ./当前目录，不可省略
    ../上一级目录，不可胜率
    首位的/在这里表示的是当前文件模块所属磁盘根路径
    核心模块的本质也是文件
    核心模块文件已经被编译到了二进制文件中了，我们只需要按照名字来加载就可以了
    凡是第三方模块都必须通过npm下载
    使用的时候就可以通过require('包名')的方式来进行加载才可以使用
    不可能有任何一个第三方包和核心模块名字是一样的
    既不是核心模块也不是路径形式的模块
    先找到当前文件所处目录中的node_modules目录
    node_modules/art-template
    node_modules/art-template/package.json文件
    node_modules/art-template/package.json文件的main属性
    main属性就记录了art-template的入口模块
    然后加载使用这个第三方包，实际上最终加载的还是文件
    如果package.json文件不存在或者main指定的入口文件模块也是错的，是运行不了的
    则node会自动找该目录下的index.js,也就是index.js是默认备选项
    如果以上所有任何一个条件都不成立，则会进入上一级目录的node_modules目录查找，如果上一级还没有，则继续往上上一级查找
    如果当前磁盘根目录没有的话，就报错了，can not find modules xxx
*/
var template=requiere('art-template')