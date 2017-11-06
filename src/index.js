const sa = require('sa-sdk-javascript')
const click = require('./click')
const duration = require('./duration')

module.exports = {
  install(Vue, options){
    sa.init(options)
    Vue.prototype.$sa = sa
    Vue.directive('sa-click', click)
    Vue.directive('sa-duration', duration)
  }
}