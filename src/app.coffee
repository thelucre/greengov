# import global styles (to force a compile)
require 'style.styl'

Vue = require 'vue'
Vue.use require 'vue-resource'
Vue.config.debug = true
require './assets.coffee'

# Global chart config
Chart = require 'chart'
Chart.defaults.global.tooltipFillColor = 'rgba(85,98,112,0.9)';
Chart.defaults.global.responsive = true
Chart.defaults.global.animationEasing = "easeInOutQuart"

app = new Vue
	el: '#app'

	data:
		endpoint: 'https://greengov.data.ca.gov/resource/umpc-nnuk.json?'
		organizations: []
		state: []

	components:
		intro: require './intro/component.coffee'
		marquee: require './marquee/component.coffee'
		leaders: require './leaders/component.coffee'
		leaderboard: require './leaderboard/component.coffee'
		compare: require './compare/component.coffee'

	ready: () ->
		@getAggregateOrgData()
		@getAggregateStateData()
		return

	# child component will inherit these methods
	computed:

		groupedOrganizations: () ->
			# group by organization name
			grouped = _.groupBy @organizations, 'organizationname'

			# remove any data that does not contain values for 2010
			return _.filter grouped, (orgdata) ->
				return orgdata[0].emissionyear == '2010'

		organizationsWithStats: () ->

			# massage the grouped sata to determine the current reduction
			stats = _.map @groupedOrganizations, (org) ->
				return {
					name: org[0].organizationname
					target2015: 0.10
					target2020: 0.20
					reduction: 1 - (org[org.length - 1].sum_co2e / org[0].sum_co2e)
					years: org
				}

			# sort by % reduction
			stats = _.sortBy(stats, 'reduction').reverse()

			# make their rank into the data
			stats = _.map stats, (org, i) ->
				org.rank = i + 1
				return org

			return stats

	methods:
		getAggregateOrgData: () ->
			params =
				$limit: 50000
				$select: 'organizationname,emissionyear,SUM(co2e)'
				$group: 'organizationname,emissionyear'

			@$http.get @endpoint + $.param(params), (data, status, request) =>
				@$set('organizations', data)
			return

		getAggregateStateData: () ->
			params =
				$select: 'emissionyear,SUM(co2e)'
				$group: 'emissionyear'

			@$http.get @endpoint + $.param(params), (data, status, request) =>
				@$set('state', data)
			return
