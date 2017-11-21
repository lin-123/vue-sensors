// 记录一个组件停留时长
const sa = require('sa-sdk-javascript')
let values = new window.Map()
let timers = new window.Map()

module.exports = {
  bind(el, {value, arg}) {
    values.set(el, value);
    timers.set(el, Date.now())
  },

  // 如果是参数是同步value， 则此处会更新这个标签打点的value
  update(el, {value, arg}) {
    if(arg == 'sync') return values.set(el, value);
  },

  unbind(el) {
    let [eventName, args] = values.get(el)
    args.duration = (Date.now() - timers.get(el)).toString()
    sa.track(eventName, args)
    values.delete(el)
  }
}
