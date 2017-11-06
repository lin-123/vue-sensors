// 神策指令
const sa = require('sa-sdk-javascript')
let lisenters = new window.Map()
module.exports = {
  bind(el, {value, arg}) {
    const lisenter = el.addEventListener('touchstart', (event) => {
      sa.track(...value)

      //取消事件冒泡
      event.stopPropagation()
    })
    lisenters.set(el, lisenter)
  },
  unbind(el) {
    el.removeEventListener('touchstart', lisenters.get(el))
    lisenters.delete(el)
  }
}
