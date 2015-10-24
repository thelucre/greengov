# import global styles (to force a compile)
require 'style.styl'

Vue = require 'vue'

app = new Vue
  el: '#app'

  components:
    'test': require './test/component.coffee'
