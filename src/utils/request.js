import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASEURL

const request = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 30
})

request.interceptors.request.use(config => {
  /**
   * 在这里做Loading
   * @type { String }
   */
  return config
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(response => response.data, error => {
  let response = error.response
  if (response.status === 404) {
    // 处理404错误
  } else if (response.status === 500) {
    // 处理500错误
  } else if (response.status === 502) {
    // 处理502错误
  }
  return Promise.reject(response)
})

export const post = (url, data) => {
  return request({
    method: 'post',
    url,
    data
  })
}

export const get = (url, params) => {
  return request({
    method: 'get',
    url,
    params
  })
}
