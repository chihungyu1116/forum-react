require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Leeft',
    description: '',
    head: {
      titleTemplate: 'Portal To Top Tech Companies: %s',
      meta: [
        {name: 'description', content: 'Portal To Top Tech Companies.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Portal To Top Tech Companies'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Portal To Top Tech Companies'},
        {property: 'og:description', content: 'Portal To Top Tech Companies'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@cyu0'},
        {property: 'og:creator', content: '@cyu0'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
