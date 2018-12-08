import request from '@/utils/request'
import qs from 'qs'

export function login(username, password) {
  return request({
    url: '/api/login',
    method: 'post',
    data: qs.stringify({
      username,
      password
    })
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}
