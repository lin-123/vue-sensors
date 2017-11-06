class Log {
  constructor(debug) {
    ;['info', 'warn'].forEach(key => {
      this[key] = (msg) => debug && console[key]('#mqtt-lite# ', msg)
    })
    this.error = (msg) => console.error('#mqtt-lite# ', msg)
  }
}

module.exports = Log