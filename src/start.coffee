# import global styles (to force a compile)
require 'style.styl'

Vue = require 'vue'
Vue.use require 'vue-resource'
Vue.config.debug = true

app = new Vue
  el: '#app'

  components:
    'test': require './test/component.coffee'
