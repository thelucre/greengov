###
The marquee
###

# Deps
require './style.styl'

# Component definition
Marquee =
  template: require './template.haml'
  inherit: true

  computed:
    grade: () ->
      reduction = (1 - @state[@state.length-1].sum_co2e / @state[0].sum_co2e);

      if (reduction < 0.1)
        return 'failing'
      else
        return 'succeeding'

module.exports = Marquee
