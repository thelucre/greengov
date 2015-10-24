# import global styles (to force a compile)
require 'style.styl'

Vue = require 'vue'
Vue.use require 'vue-resource'
Vue.config.debug = true

endpoint = 'https://greengov.data.ca.gov/resource/umpc-nnuk.json?$limit=50000'

app = new Vue
	el: '#app'

	data:
		dataset: []

	ready: () ->
		@$http.get endpoint, (data, status, request) =>
			@$set('dataset', data)
		return

	# child component will inherit these methods
	computed:
		null

	components:
		leaderboard: require './leaderboard/component.coffee'
		leaders: require './leaders/component.coffee'
		marquee: require './marquee/component.coffee'
