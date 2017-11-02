import {environment} from './environments'

export const SERVER_API = {
  development: 'http://localhost:8000',
  staging: '[STAGING_URL]',
  production: '[PRODUCTION_URL]'
}[environment]
