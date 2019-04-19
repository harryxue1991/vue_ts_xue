import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserKey = 'Admin-user'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUser() {
  return Cookies.get(UserKey)
}

export function setUser(user: string) {
  return Cookies.set(UserKey, user)
}

export function removeUser() {
  return Cookies.remove(UserKey)
}

