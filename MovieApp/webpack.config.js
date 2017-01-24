var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
	devtool: 'source-map',
	devServer: {},
	entry: [
		'./app/index',
		'./app/scss/main.scss'
	],
	output: {
		path: path.join(__dirname, 'app/build'),
		filename: 'bundle.js',
		publicPath: '/app/build/'
	},
	plugins: [
		new ExtractTextPlugin('styles.css', {
			allChunks: true
		})
	],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loaders: ['eslint'],
				include: [
					path.resolve(__dirname, "app"),
				],
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				include: [
					path.resolve(__dirname, "app"),
				],
				query: {
					presets: [ 'es2015', 'react' ]
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			}
		]
	}
};

if (process.env.NODE_ENV !== 'production') {
	
	config.devServer = {
		hot: true,
			port: 9999,
			colors: true,
			publicPath: '/app/build/',
			historyApiFallback: true
	};
	config.module.loaders[0].query.presets.push('react-hmre');
}

module.exports = config;