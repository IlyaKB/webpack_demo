const path = require('path');
const webpack = require('webpack');

module.exports = (env, options) => {

	let bDev = options.mode != "production";

	let oConfig = {
		entry: {
			main: "./webapp/src/index.js"
		},
		output: {
			path: path.resolve(__dirname, "./webapp/dist")
			,pathinfo: bDev
			,filename: "[name].bundle.js" //,filename: "main.bundle.js"
			//,chunkFilename: "[name].bundle.js"

			//,publicPath: "webapp/src/"
			//,publicPath: "src/"
		}
		,module: {
			rules: [
				{
					test: /\.js$/, loader: "babel-loader"
					,exclude: /node_modules/
					,query: {
						presets: [['es2015', {modules: false}]]
						//presets: ['es2015']
					}
				},
				{
					test: /\.css$/, use: ["style-loader", "css-loader"]
				}
			]
		}
	};

	if (bDev) {
		oConfig.plugins = [
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin({'NODE_ENV': JSON.stringify(options.mode)})
		];
		oConfig.devServer = {
			host: "localhost", port: 8080
			,hot: true
			,contentBase: "./webapp/dist"
			//,publicPath: "/"
		};
		oConfig.devtool = "eval";//"inline-source-map";
	} else {
		oConfig.devtool = false;//source-map";
	}
	//devtool: (bProd ? false : "eval")

	return oConfig;
};