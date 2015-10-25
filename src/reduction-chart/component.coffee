###
The marquee
###

# Deps
require './style.styl'
Chart = require 'chart'
chartColors = require './chart-colors.coffee'

Chart.defaults.global.responsive = true
Chart.defaults.global.animationEasing = "easeInOutQuart"

# Component definition
Marquee =
	template: require './template.haml'
	inherit: true

	data: () ->
		return {
			chartdata: []
			initted: false
		}

	attached: () ->

		return

	methods:
		init: () ->
			if !@initted
				@buildChart()
				@initted = true
			return

		buildChart: () ->
			ctx = @$$.bar.getContext '2d'
			@chart = new Chart(ctx).Bar(@barData, { animationEasing: "easeInOutQuart", maintainAspectRatio: true })
			@$$.legend.innerHTML = @chart.generateLegend()
			return

	computed:

		barData: () ->
			chartvalues =
				labels: _.map _.range(11), (i) ->
					return 2010 + i
				datasets: [
					{
						label: 'Target'
						data: _.map _.range(11), (i) ->
							return (1 - i * 0.02)
						fillColor: '#556270'
						strokeColor: '#556270'
						highlightFill: '#5f6f81'
						highlightStroke: '#5f6f81'
					},{
						label: 'Actual'
						data: _.map @org.years, (year) =>
							return (year.sum_co2e / @org.years[0].sum_co2e)
						fillColor: '#c7f464'
						strokeColor: '#c7f464'
						highlightFill: '#d1f67e'
						highlightStroke: '#d1f67e'
					}
				]
			return chartvalues

module.exports = Marquee
