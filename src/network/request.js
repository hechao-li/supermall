import axios from 'axios'

export function request(config) {   //创建网络请求实例1

  const instance = axios.create({ //创建axios局部实例
    baseURL: "http://152.136.185.210:7878/api/hy66", //声明地址
    timeout: 5000 //超时设置
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {})

  //响应拦截
  instance.interceptors.response.use(config => {
    return config    //将拦截的数据返回出去，否则收不到
  }, err => {})

  return instance(config)  //返回值
}


