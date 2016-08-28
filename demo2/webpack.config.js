module.exports = {
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

   /**
   	如果不配置devtool，如果运行报错，定位代码定位是在根据打包输出的文件来定位的。
   	1）以下4个 devtool 配置都会影响打包速度，影响速度的程度：
  		source-map > cheap-module-source-map > eval-source-map > cheap-module-eval-source-map
  	2）source-map,cheap-module-source-map都会生成一个js.map的文件，source map的信息就记录在这个文件中；
  	其他两个不会生成map文件，但是会将source map的信息写入打包输出的文件中，显然这是会影响项目执行效率的。
  	但是相比source-map,cheep-module-source-map提高了打包数据

   devtool: 'source-map',
   devtool: 'cheap-module-source-map',
   devtool: 'eval-source-map',
   devtool: 'cheap-module-eval-source-map',
   	注：开发常用选项：eval-source-map
   */
  devtool: 'source-map',
  /**
	webpack-dev-server:构建本地服务器，并在当前修改代码后实时刷新页面。
	这样你就可以安心写代码，不用手动刷新浏览器了，大大的提高代码开发效率。
	1）安装webpack-dev-server：
		npm install --save-dev webpack-dev-server
		（注意这里安装在本地，由于webpack-dev-server依赖webpack所以webpack也需要安装在本地，
		如果你的webpack安装在全局，那么webpack-dev-server‘也必须安装在全局）
	2）如下配置devServer{}
	3）在demo2目录下执行命令：./node_modules/.bin/webpack-dev-server
	4）浏览器中打开地址：http://localhost:8080/
  */
  devServer:{
  	contentBase: "./public",//本地服务器打开的页面，也就是你的首页所在的页面
  	port:8080,//端口号
  	historyApiFallback: true,
  	inline:true//是否实时刷新。
  },
  module:{
  	/**
  	loader:webpack中loader,是用来导入各种格式的文件。
		如：通过json-loader,导入json文件；
  		    通过Babel,导入JSX语法的文件；
  		但是loader需要单独安装，你需要导入json格式的文件，需要安装npm install --save-dev json-loader
  		在代码中可以通过var jsonObj = require("json_file");
  		那么可以通过jsonObj来访问json_file文件中定义的json对象，json-loader在webpack打包时，会将其转换为js来实现对jsonObj的使用。
  		同样Bable同理
  	*/
  	loaders:[
  	{
  		test:/\.json$/,
  		loader: "json"
  	},
  	{
  		test: /\.js$/,    //正则表达式，匹配的文件名的文件将是使用该loader处理
  		exclude: /node_modules/,//不loader处理的黑名单，也就是在改目录下的文件和子文件夹下的文件都不会被loader处理
  		loader: 'babel',//loader名称
  		query:{//The query setting can be used to pass Additional options to the loader.在query的参数将会传给loader使用
  			presets: ['es2015']
  		}
  	}
  	]
  }
}
