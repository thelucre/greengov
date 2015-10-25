###
The marquee
###

# Deps
require './style.styl'
_ = require 'lodash'
Chart = require 'chart'

# Component definition
module.exports =
	template: require './template.haml'
	inherit: true

	data: ->
		years: [2010..2014]

	ready: ->
		@$watch 'state.length', @buildChart

	methods:

		buildChart: ->
			ctx = @$$.chart.getContext '2d'
			new Chart(ctx).Line(@chartData, {
				# datasetFill : false,
			})

		# Get the target goal for every year after 2010
		goalPerYear: (year) ->
			amt = @state[0].sum_co2e * (1 - (year - 2010) / @years.length * .1)
			Math.round(amt/1000)

		# Massage the actual goal
		actualPerYear: (amt) ->
			Math.round(amt/1000)

	computed:

		chartData: ->
			labels: @years
			datasets: [
				{
					label: 'Goal'
					data: _.map @years, @goalPerYear
					strokeColor: "#556270"
					pointColor: "#556270"
					fillColor: "rgba(255,255,255,0)"
				},{
					label: 'Actual'
					data: _.map(_.pluck(@state, 'sum_co2e'), @actualPerYear),
					strokeColor: "#c7f464"
					pointColor: "#c7f464"
					fillColor: "rgba(199,244,100,0.2)"
				}
			]
