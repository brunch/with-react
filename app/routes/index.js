import load from 'load-script2'

import AsyncRoute from 'preact-async-route'

import Home from '/components/pages/home'
import Resource from '/components/pages/resource'

const LOADED = []

const getComponentsPage = () => {
  if (LOADED.indexOf('app.js') > -1) return
  load('app.js', (err, script) => {
    if (err) return
    LOADED.push('app.js')
  })
}

export const routes = {
  home: {
    path: '/',
    component: Home
  },
  components: {
    path: '/components',
    getComponent: getComponentsPage,
    component: AsyncRoute
  },
  resource: {
    path: '/resource/:id',
    component: Resource
  }
}

export default routes
