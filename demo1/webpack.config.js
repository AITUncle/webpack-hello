module.exports = {
	entry: __dirname + "/app/main.js",//打包的入口文件
	output: {
		path: __dirname + "/public",//打包后文件存放的目录
		filename: "bundle.js"//打包输出的文件
	}
}
