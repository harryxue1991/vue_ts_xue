import login from './login'
import table from './table'

interface Apis {
    [key: string]: any
}
const api:Apis = {};

Object.keys(login).forEach(key => {
  api[key] = (<any>login)[key];
})

Object.keys(table).forEach(key => {
  api[key] = (<any>table)[key];
})

export default api
