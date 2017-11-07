# vue-sensors

## Introduction
- vue-sensors. will set $sa to Vue.prototype, and add directive v-sensors to Vue directive
- JS-SDK: https://www.sensorsdata.cn/manual/js_sdk.html

#### API
- `v-sa-click` record click times, trigger track event when tag click.
``` javascript
// track data will not change
v-sa-click="['event_name', {arg1: 1}]"

// track data will update when origin data change
v-sa-click:sync="['event_name', {arg1: 1}]"
```

- `v-sa-duration` recod the duration of the tag living, trigger track event before tag destory.
``` javascript
// arguments the same as v-sa-click
v-sa-duration="['event_name', {arg1: 1}]"
v-sa-duration:sync="['event_name', {arg1: 1}]"
```

#### Usage
- index.html
```
<div id="app">
  <input class="btn" type="button" value="发送" v-sa-click="['test_v_sensors', {arg1: 1}]">
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

