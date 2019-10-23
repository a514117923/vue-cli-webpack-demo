
export default{
  install(Vue) {
    // 清空字符串前后空格
    Vue.prototype.$trimStr = (str) => {
      return str.replace(/^\s+|\s+$/gm, '')
    }
    // 清空对象的属性值
    Vue.prototype.$clearObject = (obj) => {
      for (var k in obj) {
        var oClass = Object.prototype.toString.call(obj[k]).slice(8, -1)
        if (oClass === 'Object') {
          obj[k] = {}
        } else if (oClass === 'Array') {
          obj[k] = []
        } else {
          obj[k] = ''
        }
      }
      return obj
    }
    // 深度克隆
    Vue.prototype.$deepClone = (obj) => {
      var result
      var oClass = Object.prototype.toString.call(obj).slice(8, -1)
      if (oClass === 'Object') {
        result = {}
      } else if (oClass === 'Array') {
        result = []
      } else {
        return obj
      }

      if (oClass === 'Object') {
        for (var key in obj) {
          result[key] = Vue.prototype.$deepClone(obj[key])
        }
      } else if (oClass === 'Array') {
        for (var i = 0; i < obj.length; i++) {
          result.push(Vue.prototype.$deepClone(obj[i]))
        }
      }
      return result
    }
  }
}
