###
Full list of all organizations, ordered by the amount of emissions savings
###

# Deps
require './style.styl'

# Component definition
module.exports =
	template: require './template.haml'
	inherit: true

	data: () ->
		return null

	components:
		'org-detail': require '../org-detail/component.coffee'
