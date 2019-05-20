const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/core/style";'
      }
    }
  },

  devServer: {
    open: true
  },

  chainWebpack: config => {
    config.resolve.extensions.store.add('.scss')
    config.resolve.alias
      .set('images', resolve('src/assets/images'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('api', resolve('src/api'))
  }
}
