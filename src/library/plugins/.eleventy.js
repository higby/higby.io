const imageDimensions = require('./src/image-dimensions');
const serve404 = require('./src/404');
const sinisterSix = require('./src/sinister-six');
const toc = require('./src/toc');
const prettier = require('./src/prettier');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(imageDimensions);
  eleventyConfig.addPlugin(serve404);
  eleventyConfig.addPlugin(sinisterSix);
  eleventyConfig.addPlugin(toc);
  eleventyConfig.addPlugin(prettier);
}
