###
The marquee
###

# Deps
require './style.styl'
require 'velocity'

# Component definition
Marquee =
	template: require './template.haml'
	inherit: true

	props: ['org']

	components:
		'energy-chart': require '../energy-chart/component.coffee'
		'reduction-chart': require '../reduction-chart/component.coffee'

	data: () ->
		return {
			open: false
			piedata: []
		}

	attached: () ->
		return

	methods:
		toggle: () ->
			@open = !@open
			if !@open
				$(@$$.content).velocity 'slideUp'
			else
				$(@$$.content).velocity 'slideDown', complete: () =>
					@$.piechart.init();
					@$.reductionchart.init();
			return


		buildCharts: () ->
			ctx = @$$.pie.getContext '2d'
			@pieChart = new Chart(ctx).Pie(@pieData)
			console.log @pieData
			return

	computed:
		isPassing: () ->
			return (@org.reduction >= 0.08)

		pieData: () ->
			temp = _.map @piedata, (type, i) ->
				console.log i
				return {
					color: chartColors.colors[i % chartColors.colors.length]
					value: parseInt(type.sum_co2e).toFixed(0)
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
