###
The marquee
###

# Deps
require './style.styl'

# Component definition
Marquee =
	template: require './template.haml'
	inherit: true

	computed:
		src: () ->
			'img/car.png'

module.exports = Marquee
