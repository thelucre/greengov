###
Full list of all organizations, ordered by the amount of emissions savings
###

# Deps
require './style.styl'

# Component definition
module.exports =
	template: require './template.haml'
	inherit: true

	data: -> {
		organizations: [
			{
				name: 'Farts',
				percent: .2222222,
			}
			{
				name: 'Less farty',
				percent: .150000,
			}
			{
				name: 'The most farty ever',
				percent: .111111,
			}
		]
	}

	
