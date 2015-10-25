bower_dir = __dirname + '/bower_components'

webpack = require 'webpack'
ExtractTextPlugin = require 'extract-text-webpack-plugin'
autoprefixer = require 'autoprefixer-stylus'

module.exports =

	entry: __dirname + '/src/app.coffee'

	output:
		path: __dirname + '/build'
		publicPath: '/build/'
		filename: 'build.js'

	devtool: 'source-map'

	module: loaders: [
		{
			# Exposes jQuery and $ to the window object. This does not automatically load the jquery module.
			test: /jquery\.js$/
			loader: "expose?jQuery!expose?$"
		}
		{
			test: /\.html$/
			loader: 'html'
		}
		{
			test:/\.haml$/
			loader: "haml"
		}
		{
			test: /\.styl$/
			loader: ExtractTextPlugin.extract 'style-loader', 'css?sourceMap!stylus-loader?sourceMap'
		}
		{
			test: /\.(png|woff|woff2|eot|ttf|svg)($|\?)/
			loader: 'url-loader?limit=100000'
		}
		{
			test: /\.coffee$/
			loader: "coffee-loader"
		}
	]

	resolve:
		modulesDirectories: [
			'stylus'
		]

		alias:
			'jquery': bower_dir + '/jquery/dist/jquery.js'
			'lodash': bower_dir + '/lodash/lodash.js'
			'vue': bower_dir + '/vue/dist/vue.js'
			'vue-router': bower_dir + '/vue-router/dist/vue-router.js'
			'vue-resource': bower_dir + '/vue-resource/dist/vue-resource.js'
			'velocity': bower_dir + '/velocity/velocity.js'
			'chart': bower_dir + '/Chart.js/Chart.min.js'

	plugins: [
		new webpack.OldWatchingPlugin,
		new webpack.ProvidePlugin
			_: 'lodash'
			$: "jquery"
			jQuery: "jquery"
			"window.jQuery": "jquery"
			"root.jQuery": "jquery"

		new ExtractTextPlugin 'style.css', { allChunks: true }
	]

	stylus: use: [autoprefixer()]
