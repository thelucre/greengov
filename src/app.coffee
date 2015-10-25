# import global styles (to force a compile)
require 'style.styl'

Vue = require 'vue'
Vue.use require 'vue-resource'
Vue.config.debug = true
require './assets.coffee'

app = new Vue
  el: '#app'

  data:
    endpoint: 'https://greengov.data.ca.gov/resource/umpc-nnuk.json?'
    params:
      '$limit': 50000
    organizations: []
    state: []

  components:
    leaderboard: require './leaderboard/component.coffee'
    leaders: require './leaders/component.coffee'
    marquee: require './marquee/component.coffee'

  ready: () ->
    @getAggregateOrgData()
    @getAggregateStateData()
    return

  # child component will inherit these methods
  computed:

    groupedOrganizations: () ->
      # group by organization name
      grouped = _.groupBy @organizations, 'organizationname'

      # remove any data that does not contain values for 2010
      filtered = _.filter grouped, (organizations) ->
        return organizations[0].emissionyear == '2010'

      return filtered

    organizationsWithStats: () ->
      # massage the grouped sata to determine the current reduction
      stats = _.map @groupedOrganizations, (org) ->
        data =
          name: org[0].organizationname
          target2015: 0.10
          target2020: 0.20
          reduction: parseFloat(1 - (org[org.length - 1].sum_co2e / org[0].sum_co2e))
          years: org
        return data

      stats = _.sortBy(stats, ['reduction']).reverse()
      return stats

  methods:
    getAggregateOrgData: () ->
      params =
        $limit: 50000
        $select: 'organizationname,emissionyear,SUM(co2e)'
        $group: 'organizationname,emissionyear'

      @$http.get @endpoint + $.param(params), (data, status, request) =>
        @$set('organizations', data)
      return

    getAggregateStateData: () ->
      params =
        $select: 'emissionyear,SUM(co2e)'
        $group: 'emissionyear'

      @$http.get @endpoint + $.param(params), (data, status, request) =>
        @$set('state', data)
      return
