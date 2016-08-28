# what is webpack?
    a)前端代码打包
    b)javascript预处理,将es2015,jsx等新特性的语法，转换为浏览器能够识别的旧语法。
    ...

# demo0:最简单（简陋）的方式使用 weppack
### 0)cd demo0(进入到demo0目录)
### 1)npm init 生成package.json 
### 2)npm install --save-dev webpack(当然你也可全局安装)
### 3)编写web代码：(请参考demo中对应的源码文件)
	3.1)创建文件夹app和public，分别在public中创建index.html并写下你的html代码
	3.2)在app文件夹下，放入你的原始数据和js代码文件
### 4)通过webpack打包：
	4.1)执行shell命令：webpack entryFile outputFile 如下：
		./node_modules/.bin/webpack app/main.js public/bundle.js
		那么在public中生成bundle.js便是打包后生成的文件。
### 5)浏览器打开index.html,代码生效，成功走起demo0

该demo我已执行过上面的所有步骤，所以，已生成了public/bundle.js文件；当然使用webpack前你必须确保您已经安装了nodejs

---



# demo1:通过配置的方式(webpack.config.js)使用 webpack
### 1)cd demo1
### 2)npm init 生成package.json
### 3)npm install -g webpack(这里选择了全局安装，当然你也可以像demo0中那样本地安装)
### 4)编写web代码：
    3.1)创建文件夹app和public，分别在public中创建index.html并写下你的html代码
    3.2)在app文件夹下，放入你的原始数据和js代码文件
### 5)新建webpack配置文件webpack.config.js，输入如下配置
```javascript
module.exports = {
    entry: __dirname + "/app/main.js",//打包的入口文件
    output: {
        path: __dirname + "/public",//打包后文件存放的目录
        filename: "bundle.js"//打包输出的文件
    }
}
```
### 6)在shell中执行命令：webpack
    webpack将会找到webpack.config.js文件，进行打包；由于是全局安装，所以可以直接执行webpack命令；在public中生成bundle.js便是打包后生成的文件。
### 7）浏览器打开index.html,代码生效，成功走起demo1

---



# demo2:使用json-loader
### 0)进入demo2目录: cd demo2
### 1)npm install --save-dev json-loader
### 2)webpack.config.js中添加json-loader配置，如下
```javascript
loaders:[
    {
        test:/\.json$/,
        loader: "json"
    }
]
```
### 3)在 app文件夹 里创建config.json文件,并编写你的json对象
```javascript
{
    "helloMsg": "hello2 webpack form json"
}
```
### 4）在js中使用config.json，如,hello.js中：
```javascript
var config = require("./config.json");
module.exports = function() {
  var hello = document.createElement('div');
  hello.textContent = config.helloMsg;
  return hello;
};
```
### 5)shell中执行命令：./node_modules/.bin/webpack-dev-server
### 6）浏览器打开index.html,代码生效，成功走起demo1

---



# demo2:使用bable loader
### 1)安装babel模块：npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
### 2)webpack.config.js中添加json-loader配置，如下
```javascript
loaders:[
    {
        test: /\.js$/,    //正则表达式，匹配的文件名的文件将是使用该loader处理
        exclude: /node_modules/,//不loader处理的黑名单，也就是在改目录下的文件和子文件夹下的文件都不会被loader处理
        loader: 'babel',//loader名称
        query:{//The query setting can be used to pass Additional options to the loader.在query的参数将会传给loader使用
            presets: ['es2015']
        }
    }
]
```
### 3)在你的js文件中尽情的使用es2015特性，如main.js中使用class：
```javascript
    //es2015 class
    class HelloClass{
        sayHello(){
        var hello = document.createElement('div');
        hello.textContent = "say hello by es2015 class";
        return hello;
        }
    }
    document.getElementById('root').appendChild(new HelloClass().sayHello());
``` 

---

参考资料：
    http://webpack.github.io/
    https://segmentfault.com/a/1190000006178770
    http://www.pro-react.com/materials/appendixA/