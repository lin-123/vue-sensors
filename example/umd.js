import vueSensors from '../dist/index.min.js'

const config = {
  name: 'sa',
  web_url: 'https://test.sensorsdata.com/sa?project=test_sensors',
  server_url: 'https://test.sensorsdata.com/sa?project=test_sensors',
  heatmap: {},
  show_log: true,
}
Vue.use(vueSensors, config)

new Vue({
  el: '#app',
  mounted() {
    console.log('mounted')
    this.$sa.login('xxx ')
  }
})