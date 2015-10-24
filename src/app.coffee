# import global styles (to force a compile)
require 'style.styl'

Vue = require 'vue'
Vue.use require 'vue-resource'
Vue.config.debug = true

app = new Vue
  el: '#app'

  data:
    endpoint: 'https://greengov.data.ca.gov/resource/umpc-nnuk.json?'
    params:
      '$limit': 50000
    dataset: []

  components:
    'test': require './test/component.coffee'

  ready: () ->
    @getAggregateData();
    return

  # child component will inherit these methods
  computed:

    groupedOrganizations: () ->
      # group by organization name
      grouped = _.groupBy @dataset, 'organizationname'

      # remove any data that does not contain values for 2010
      filtered = _.filter grouped, (orgdata) ->
        return orgdata[0].emissionyear == '2010'

      return filtered

    organizationsWithStats: () ->
      # massage the grouped sata to determine the current reduction
      stats = _.map @groupedOrganizations, (org) ->
        data =
          organization: org[0].organizationname
          target2015: 0.10
          target2020: 0.20
          reduction: 1 - (org[org.length - 1].sum_co2e / org[0].sum_co2e)
          years: org
        return data

      stats = _.sortBy(stats, ['reduction']).reverse()
      return stats

  methods:
    getAggregateData: () ->
      params =
        $limit: 50000
        $select: 'organizationname,emissionyear,SUM(co2e)'
        $group: 'organizationname,emissionyear'

      @$http.get @endpoint + $.param(params), (data, status, request) =>
        @$set('dataset', data)
      return
