###
List of the top leaders and losers
###

# Deps
require './style.styl'
_ = require 'lodash'

# Component definition
module.exports =
	template: require './template.haml'
	inherit: true

	props: [
		'type' # The type of leaders to be displayed, either 'top' or 'bottom'
	]

	computed:

		# The title of the component
		title: -> if @type == 'top' then 'The best' else 'The worst'

		# Order the list of organizations
		leaders: ->
			if @type == 'top'
			then _.take(@organizationsWithStats, 5)
			else _.takeRight(@organizationsWithStats, 5)
