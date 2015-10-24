###
Registration of shared Vue assets, like filters and shared components
###

# Deps
Vue = require 'vue'

# Convert a decimal percentage to a string one
# @param {float} val
# @return {string}
Vue.filter 'percent', (val) -> val*100 + '%'
