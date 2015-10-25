###
The marquee
###

# Deps
require './style.styl'
Chart = require 'chart'

# Component definition
Marquee =
	template: require './template.haml'
	inherit: true

	props: ['org']

	data: () ->
		return {
			open: false
			orgdata: []
		}

	attached: () ->
		return

	methods:
		toggle: () ->
			@open = !@open
			if @orgdata.length == 0
				@getEneryData()
			return

		getEneryData: () ->

			params =
				$select: 'organizationname,sourcename,SUM(co2e)'
				$group: 'organizationname,sourcename'
				$where: 'organizationname=\''+(@org.name.replace('\'','\'\'')+'\'')

			@$http.get @endpoint + $.param(params), (data, status, request) =>
				@$set('orgdata', data)
				console.log @orgdata
				@buildCharts()
			return

		buildCharts: () ->
			ctx = @$$.pie.getContext '2d'
			@pieChart = new Chart(ctx).Pie(@pieData)
			console.log @pieData
			return

	computed:
		isPassing: () ->
			return (@org.reduction >= 0.1)

		pieData: () ->
			temp = _.map @orgdata, (type, i) ->
				return {
					color: '#000'
					value: type.sum_co2e
					hightlight: '#444'
					label: type.sourcename
				}
			return temp

		grade: () ->
			if @isPassing
				return 'Pass'
			else
				return'Fail'

module.exports = Marquee
