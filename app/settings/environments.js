import {find, some} from 'wasmuth'
import check from 'check-arg-types'

const toType = check.prototype.toType

const environments = {
  development: ['localhost:3333', 'localhost:3334'],
  staging: '[STAGING_URL]',
  production: '[PRODUCTION_URL]'
}

export const environment = (() => {
  const host = window.location.host
  const current = find(
    (env) => toType(environments[env]) === 'array'
      ? some(v => v === host, environments[env])
      : environments[env] === host,
    Object.keys(environments)
  )
  if (!current) {
    throw new Error('No environment matching current url')
  }
  return current
})()
