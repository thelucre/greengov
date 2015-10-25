_ = require 'lodash'
require './visible-on-page.styl'

module.exports = {
	data: () ->
		return {
			isVisible: false
			offset: 300
		}

	attached: () ->
		@$win = $(window)
		@$win.on 'scroll', _.throttle(@onScroll, 100)
		@onScroll()
		return

	methods:
		onScroll: () ->
			return if @isVisible

			if @checkVisiblity()
				@isVisible = true
			return

		checkVisiblity: () ->
			docViewTop = @$win.scrollTop()
			docViewBottom = docViewTop + @$win.height()
			elemTop = $(@$el).offset().top
			return (elemTop + @offset <= docViewBottom)
}
