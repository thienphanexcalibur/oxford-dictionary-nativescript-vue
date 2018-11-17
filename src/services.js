import { options } from './constants'
export const http =  {
  get (url) {
    return fetch(url, options.get).then(res => res.json())
  }
}