_ = require 'lodash'
require './style.styl'

endpoint = 'https://greengov.data.ca.gov/resource/umpc-nnuk.json?$limit=50000'

Test =

  template: require './template.html'

  data: () ->
    data =
      hello: 'world'
      dataset: []
    return data

  ready: () ->

    @$http.get endpoint, (data, status, request) =>
      @$set('dataset', data)
    return

  computed:
    first: () ->
      return _.first @dataset


module.exports = Test
