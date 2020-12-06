import path from 'path';
// https://github.com/vitejs/vite/blob/master/src/node/config.ts

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  vueTransformAssetUrls: {
    img: ['src', 'data-src'],
    SvgRender: 'src',
  },
  cssPreprocessOptions: {
    stylus: {
      paths: ['node_modules', path.resolve('./src/styles')],
    }
  },
}