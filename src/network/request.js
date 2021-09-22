import axios from 'axios'

export function request(config) {
  const instance = axios.create({ //创建axios局部实例
    baseURL: "http://123.207.32.32:8000", //声明地址
    timeout: 5000 //超时设置
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

//响应拦截
  instance.interceptors.response.use(config => {

    return config    //将拦截的数据返回出去，否则收不到
  }, err => {

  })

  return instance(config)
}



//portal封装方式，
// export const getUserList = config => {
//   return axios.request({
//     url: 'http://123.207.32.32:8000/home/multidata',
//     method: 'get',
//
//   })
// }
