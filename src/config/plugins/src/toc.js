const buildTOC = require('./BuildTOC')
const parseOptions = require('./ParseOptions')

module.exports = (eleventyConfig, globalOpts) => {
  globalOpts = globalOpts || {}
  eleventyConfig.namespace(globalOpts, () => {
    eleventyConfig.addFilter('toc', (content, localOpts) => {
      return buildTOC(content, parseOptions(localOpts, globalOpts))
    })
  })
}
