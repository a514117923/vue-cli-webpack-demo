import axios from 'axios'
// import router from '@/router'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'If-Modified-Since': '0'
  }
})
// const showErrorMsg = (errorMsg, defaultMsg) => {
//   Message({
//     showClose: true,
//     message: errorMsg || defaultMsg,
//     type: 'error'
//   })
// }
// request拦截器
service.interceptors.request.use(
  config => {
    // var header = getToken()
    // if (header) {
    //   config.headers['Authorization'] = header // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    // if (/\/login/.test(response.config.url) && response.data['access_token']) {
    //   service.defaults.headers.common['Authorization'] = response.data['access_token']
    //   Message({
    //     showClose: true,
    //     message: '登录成功',
    //     type: 'success',
    //     duration: 1000
    //   })
    // }
    return response
  },
  error => {
    console.log('error')
    // const status = error.response.status
    // if (status >= 500) {
    //   showErrorMsg(error.response.data['message'], '系统服务异常!')
    // }
    // if (status >= 400 && status < 500) {
    //   if (status === 401 && error.response.data['error_code'] === 'INVALID_AUTHORIZATION') {
    //     showErrorMsg(error.response.data['message'], 'token验证失败，请重新登录!')
    //     // store.dispatch('FedLogOut').then(() => {
    //     //   setTimeout(() => {
    //     //     location.reload() // 为了重新实例化vue-router对象 避免bug
    //     //   }, 200)
    //     // })
    //   } else {
    //     showErrorMsg(error.response.data['message'], '请求的资源不存在!')
    //   }
    // }
    return Promise.reject(error)
  }
)

export default service
