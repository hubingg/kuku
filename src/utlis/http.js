import axios from 'axios'
import { MessageBox } from 'mint-ui'

// create an axios instance
const service = axios.create({
  timeout: 20000 // request timeout
})
service.interceptors.request.use((config) => {
  config.headers.Accept = 'application/json'
  return config
})
// respone interceptor
// service.interceptors.response.use((response) => {
//   let data = response.data
//   let status = response.status
//   loadinginstace.close()
//   if (status === 200) {
//     return Promise.resolve(response)
//   } else {
//     return Promise.reject(response)
//   }
// })

function requestHandle (params, {}) {
  return new Promise((resolve, reject) => {
    service(params).then(res => {
      resolve(res.data)
    }).catch(function (err) {
      MessageBox('提示', '网络连接失败')
      reject(err)
    })
  })
}

export default {
  post (url, params, options) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    }, options)
  },
  get (url, params, options) {
    return requestHandle({
      method: 'get',
      url: helper.queryString(url, params)
    }, options)
  }
}
