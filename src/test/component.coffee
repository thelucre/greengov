Vue = require 'vue'
require './style.styl'

Test =

  template: require './template.html'

  data: () ->
    data =
      hello: 'world'
    return data


module.exports = Test
