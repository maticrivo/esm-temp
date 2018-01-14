import { ping } from './handlers'

export const name = 'misc'
export const prefix = ''
export const routes = [
  {
    method: 'GET',
    route: '/ping',
    handlers: [ping]
  }
]
