_ = require 'lodash'
require './style.styl'

Test =

  template: require './template.html'
  inherit: true

  props: ['org']

  data: () ->
    data = {}
    return data

  ready: () ->
    return


module.exports = Test
