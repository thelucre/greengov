###
List of the top leaders and losers
###

# Deps
require './style.styl'
_ = require 'lodash'
require '../transitions/definitions.coffee'

# Component definition
module.exports =
	template: require './template.haml'
	inherit: true

	mixins: [
		require '../mixins/visible-on-page.coffee'
	]

	computed:

		best: -> _.take(@organizationsWithStats, 5)

		worst: -> _.takeRight(@organizationsWithStats, 5)
