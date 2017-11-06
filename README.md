# vue-sensors

## Introduction
- vue-sensors. will set $sa to Vue.prototype, and add directive v-sensors to Vue directive
- JS-SDK: https://www.sensorsdata.cn/manual/js_sdk.html

#### API
- `v-sensors` vue directives
``` javascript

v-sensors="['event_name', {arg1: 1}]"
```

#### Usage
- index.html
```
<div id="app">
  <input class="btn" type="button" value="发送" v-sensors="['test_v_sensors', {arg1: 1}]">
</div>
```

- index.js
```javascript
import vueSensors from 'vue-sensors'

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
```

