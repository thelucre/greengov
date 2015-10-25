###
The marquee
###

# Deps
require './style.styl'

# Component definition
Marquee =
	template: require './template.haml'
	inherit: true

	mixins: [
		require '../mixins/visible-on-page.coffee'
	]
	
	computed:
		src: () ->
			'img/car.png'

module.exports = Marquee
