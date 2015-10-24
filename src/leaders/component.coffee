###
List of the top leaders and losers
###

# Deps
require './style.styl'

# Component definition
module.exports =
	template: require './template.haml'
	inherit: true

	props: [
		'type' # The type of leaders to be displayed, either 'top' or 'bottom'
	]

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

	computed:

		# The title of the component
		title: -> if @type == 'top' then 'Most conserved' else 'Least conserved'
