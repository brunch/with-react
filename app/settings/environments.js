import {filter} from 'wasmuth'

const environments = {
  development: ['localhost:3333', 'localhost:3334'],
  staging: '[STAGING_URL]',
  production: '[PRODUCTION_URL]'
}

export const environment = (() => {
  const host = window.location.host
  const current = filter(
    (k) => {
      if (typeof environments[k] === 'object') {
        return filter(v => v === host, environments[k]).length > 0
      }
      return environments[k] === host
    },
    Object.keys(environments)
  )[0]
  if (!current) {
    throw new Error('No environment matching current url')
  }
  return current
})()
