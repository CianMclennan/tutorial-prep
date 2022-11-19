const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
	return {
		entry: {
			app: path.resolve(__dirname, 'src', 'app.js'),
		},
		module: {
			rules: [
				{
					test: /\.s*css$/,
					use: [
						'style-loader',
						'css-loader',
						// 'sass-loader'
					],
				},
				{
					test: /\.jsx*$/,
					exclude: /node_modules/,
					use: [
						'babel-loader',
						// 'eslint-loader'
					],
				},
				{
					test: /\.svg$/,
					use: 'file-loader',
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'src', 'index.html'),
			}),
		],
		resolve: {
			alias: {
				src: path.resolve(__dirname, 'src'),
			},
			extensions: ['.jsx', '.js'],
		},
		mode: 'development',
		performance: {
			hints: false,
		},
		devtool: 'source-map',
	};
};
