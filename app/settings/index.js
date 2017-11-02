import {environment} from './environments'

export const API_URL = {
  development: 'http://localhost:8000',
  staging: '[STAGING_URL]',
  production: '[PRODUCTION_URL]'
}[environment]
