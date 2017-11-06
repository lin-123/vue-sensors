// 单击组件触发神策打点
const sa = require('sa-sdk-javascript')
let lisenters = new window.Map()
let values = new window.Map()

module.exports = {
  bind(el, {value, arg}) {
    values.set(el, value);
    const lisenter = el.addEventListener('touchstart', (event) => {
      sa.track(...values.get(el))

      //取消事件冒泡
      event.stopPropagation()
    })
    lisenters.set(el, lisenter)
  },

  // 如果是参数是同步value， 则此处会更新这个标签打点的value
  update(el, {value, arg}) {
    if(arg == 'sync') return values.set(el, value);
  },

  unbind(el) {
    el.removeEventListener('touchstart', lisenters.get(el))
    lisenters.delete(el)
    values.delete(el)
  }
}
