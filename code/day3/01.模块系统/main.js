var fooexports=require('./foo')
// console.log(foo);//ReferenceError: foo is not defined

console.log(fooexports);

// 这里的函数是foo里面给的add
// console.log(fooexports.add.adds(1,2));
// console.log(module);
/*
输出的module
Module {
  id: '.',
  path: 'D:\\cbq\\xampp\\htdocs\\nodestudy\\code\\day3\\01.模块系统',
  exports: {},//默认是空对象
  parent: null,
  filename: 'D:\\cbq\\xampp\\htdocs\\nodestudy\\code\\day3\\01.模块系统\\main.js',
  loaded: false,
  children: [
    Module {
      id: 'D:\\cbq\\xampp\\htdocs\\nodestudy\\code\\day3\\01.模块系统\\foo.js',
      path: 'D:\\cbq\\xampp\\htdocs\\nodestudy\\code\\day3\\01.模块系统',
      exports: [Object],
      parent: [Circular],
      filename: 'D:\\cbq\\xampp\\htdocs\\nodestudy\\code\\day3\\01.模块系统\\foo.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    'D:\\cbq\\xampp\\htdocs\\nodestudy\\code\\day3\\01.模块系统\\node_modules',
    'D:\\cbq\\xampp\\htdocs\\nodestudy\\code\\day3\\node_modules',
    'D:\\cbq\\xampp\\htdocs\\nodestudy\\code\\node_modules',
    'D:\\cbq\\xampp\\htdocs\\nodestudy\\node_modules',
    'D:\\cbq\\xampp\\htdocs\\node_modules',
    'D:\\cbq\\xampp\\node_modules',
    'D:\\cbq\\node_modules',
    'D:\\node_modules'
  ]
}
// 默认在代码的最后一句：
return module.exports
*/
// 也就是说如果需要对外导出成员，只需要把导出的成员挂载到module
// 所以node为了简化操作，专门提供了一个变量，exports等于module.exports
// var module={
//     exports:{foo:'bar'}
// }
