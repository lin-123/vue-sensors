const sa = require('sa-sdk-javascript')
const vSensors = require('./v-sensors')

module.exports = {
  install(Vue, options){
    sa.init(options)

    Vue.prototype.$sa = sa
    Vue.directive('sensors', vSensors)
  }
}