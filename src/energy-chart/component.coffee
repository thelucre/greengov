###
The marquee
###

# Deps
require './style.styl'
Chart = require 'chart'
chartColors = require './chart-colors.coffee'

# Component definition
Marquee =
	template: require './template.haml'
	inherit: true

	data: () ->
		return {
			chartdata: []
		}

	attached: () ->

		return

	methods:
		init: () ->
			if @chartdata.length <= 0
				@getChartData()
			return

		getChartData: () ->
			params =
				$select: 'organizationname,sourcename,SUM(co2e)'
				$group: 'organizationname,sourcename'
				$where: 'organizationname=\''+(@org.name.replace('\'','\'\'')+'\'')

			@$http.get @endpoint + $.param(params), (data, status, request) =>
				@$set('chartdata', data)
				@buildCharts()
			return

		buildCharts: () ->
			ctx = @$$.pie.getContext '2d'
			@pieChart = new Chart(ctx).Pie(@pieData, { animationEasing: "easeInOutQuart", maintainAspectRatio: true })
			# @$$.legend.innerHTML = @pieChart.generateLegend()
			return

	computed:

		pieData: () ->
			temp = _.map @chartdata, (type, i) ->
				return {
					color: chartColors.colors[i % chartColors.colors.length]
					value: parseInt(type.sum_co2e).toFixed(0)
					hightlight: '#444'
					label: type.sourcename
				}
			return temp

module.exports = Marquee
