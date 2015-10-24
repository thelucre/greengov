_ = require 'lodash'
require './style.styl'

Test =

  template: require './template.html'
  inherit: true

  data: () ->
    data = {}
    return data

  ready: () ->
    return


module.exports = Test
