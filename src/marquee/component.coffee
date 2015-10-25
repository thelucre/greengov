###
The marquee
###

# Deps
require './style.styl'
require '../transitions/definitions.coffee'

# Component definition
Marquee =
	template: require './template.haml'
	inherit: true

	mixins: [
		require '../mixins/visible-on-page.coffee'
	]

	computed:
		src: () ->
			reduction = 1 - @state[@state.length-1].sum_co2e / @state[0].sum_co2e
			if (reduction < 0.1)
			then 'img/marquee/failing.png'
			else 'img/marquee/succeeding.png'

module.exports = Marquee
