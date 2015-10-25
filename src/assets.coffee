###
Registration of shared Vue assets, like filters and shared components
###

# Deps
Vue = require 'vue'

# Convert a decimal percentage to a string one
Vue.filter 'percent', (val, rounding) ->
	val *= 100
	val = val.toFixed(rounding) if rounding
	val += '%'
