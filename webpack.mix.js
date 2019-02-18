var mix = require('laravel-mix')
var webpack = require('webpack')

// Trigger Laravel Mix
mix

// Add jQuery globally
.webpackConfig({
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
})

// Suppress success messages
.disableSuccessNotifications()

// Assets path
.setPublicPath('web/assets/dist')

// Compile JavaScript
.js('src/js/site.js', 'web/assets/dist/site.js')

// Compile Sass
.sass('src/scss/main.scss', 'web/assets/dist/main.css')

// Add Sourcemaps
.sourceMaps()

// BrowserSync config
.browserSync({
  proxy: 'http://craft.test',
  host: 'http://craft.test',
  notify: false,
  open: false,
  reloadOnRestart: true,
  injectChanges: true,
  files: [
    './web/assets/dist/*', // watch css/js
    './templates/**/*' // watch html/twig
  ]
})
