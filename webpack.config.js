const path = require('path');
const webpack = require('webpack');

module.exports = (env, options) => {

	console.log(`options.mode=${options.mode}`);

	let bDev = options.mode != "production";

	return {
		entry: {
            //main: "./dev_src/index.js"
			main: "./webapp/src/index.js"
		},
		output: {
            //path: path.resolve(__dirname, "./src")
			path: path.resolve(__dirname, "../dist")

			,pathinfo: bDev
			,filename: "[name].bundle.js" //filename: "main.bundle.js",

			//,publicPath: "webapp/src/"
            //,publicPath: "src/"
		}
		,module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader"
					//,exclude: /node_modules/
				},
				{
					test: /\.css$/,
					use: [
						"style-loader",
						"css-loader"
					]
				}
			]
		}
		,plugins: [
			new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
		]
		,devServer: {
            port: 8080
			,hot: true
			,contentBase: "./webapp/dist"
            //,publicPath: "/"
		}
		,devtool: bDev ? "eval" : false
	};
};