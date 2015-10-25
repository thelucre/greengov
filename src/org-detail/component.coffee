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
		return

	computed:
		isPassing: () ->
			return (@org.reduction >= 0.1)

		grade: () ->
			if @isPassing
				return 'Pass'
			else
				return'Fail'

module.exports = Marquee
