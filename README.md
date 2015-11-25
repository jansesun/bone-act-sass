# bone-act-sass
[![NPM version](https://img.shields.io/npm/v/bone-act-sass.svg?style=flat)](https://npmjs.org/package/bone-act-sass)
[![NPM downloads](http://img.shields.io/npm/dm/bone-act-sass.svg?style=flat)](https://npmjs.org/package/bone-act-sass)
> bone的sass处理器

### 安装及使用
通过npm安装
```sh
$ npm install bone-act-sass
```

安装后在`bonefine.js`文件内通过`act()`加载

```js
var bone = require('bone');
var sass = require('bone-act-sass');

bone.dest('dist').src('~/src/css/*.scss').act(sass);
```

传递参数的调用方法
```js
bone.dest('dist').src('~/src/css/*.scss').act(sass({
	precision: 4
}));
```

bone-act-sass是将node-sass中间件包装成bone可用的处理器，参数查询参考[node-sass](https://github.com/sass/node-sass)

### 其他
处理器开发以及使用请参考[处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)