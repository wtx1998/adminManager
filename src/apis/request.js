import Axios from 'axios';
import qs from 'qs';
import { API_URL } from '../config';
import { message } from 'ant-design-vue'
import { getToken } from '../utils/storage';
Axios.defaults.baseURL = API_URL
Axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"
// Axios.defaults.withCredentials = true
Axios.defaults.timeout = 15000
Axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

Axios.interceptors.request.use(config => { return config }, err => { return Promise.reject(err) })

Axios.interceptors.response.use(res => {
  console.log(res);
  if (res.data.Code == 200) {
    return Promise.resolve(res.data)
  } else if (res.data.Code == 2000) {
    message.error('Token过期，重新登录', 3)
  } else {
    return Promise.reject(res)
  }
},
  err => {
    message.warning("请求失败：" + err, 3)
  })



export default {
  post(url, data) {
    data = {
      ...data,
      tk: getToken()
    }
    return new Promise((resolve, reject) => {
      Axios({
        method: 'POST',
        url,
        data: qs.stringify(data)
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  get(url, data) {
    data = {
      ...data,
      tk: getToken()
    }
    return new Promise((resolve, reject) => {
      Axios({
        method: 'GET',
        url,
        params: data
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}