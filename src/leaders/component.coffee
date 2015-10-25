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

	computed:

		best: -> _.take(@organizationsWithStats, 5)

		worst: -> _.takeRight(@organizationsWithStats, 5)
