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

	data: () ->
		return {
			open: false
			orgdata: []
		}

	methods:
		toggle: () ->
			@open = !@open
			if @orgdata.length == 0
				@getData()
			return

		getData: () ->

			params =
				$select: 'organizationname,emissionyear,SUM(co2e)'
				$group: 'organizationname,emissionyear'
				
				# replace qutoes with two single quotes for a proper SQL query syntax
				$where: ('organizationname=\''+@org.name.replace('\'','\'\'')+'\'')

			@$http.get @endpoint + $.param(params), (data, status, request) =>
				@$set('orgdata', data)
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
