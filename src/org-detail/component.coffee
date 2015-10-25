###
The marquee
###

# Deps
require './style.styl'

# Component definition
Marquee =
	template: require './template.haml'
	inherit: true

	props: ['org']

	attached: () ->
		console.log @.org
		return

	computed:
		passing: () ->
			if @org.reduction >= 0.1
				return 'Pass'
			else
				return 'Fail'

module.exports = Marquee
