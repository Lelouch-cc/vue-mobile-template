module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 50 * 2,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [/^body$/],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
