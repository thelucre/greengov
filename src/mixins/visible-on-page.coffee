_ = require 'lodash'
require './visible-on-page.styl'

module.exports = {
	data: () ->
		return {
			isVisible: false
		}

	attached: () ->
		@$win = $(window)
		@$win.on 'scroll', _.throttle(@onScroll, 100)
		@onScroll()
		return

	methods:
		onScroll: () ->
			console.log @isVisible
			return if @isVisible

			if @checkVisiblity()
				@isVisible = true

			return

		checkVisiblity: () ->
			docViewTop = @$win.scrollTop()
			docViewBottom = docViewTop + @$win.height()

			elemTop = $(@$el).offset().top
			elemBottom = elemTop + $(@$el).height()
			console.log @
			console.log elemTop, docViewTop, docViewBottom, elemBottom
			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
}
