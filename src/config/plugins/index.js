const beautify = require('./src/beautify');
const dates = require('./src/dates');
const imageDimensions = require('./src/image-dimensions');
const safeLinks = require('./src/safeLinks');
const serve404 = require('./src/serve404');
const sinisterSix = require('./src/sinister-six');
const qr = require('./src/qr');
const screenshot = require('./src/screenshot');
const toc = require('./src/toc');


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(dates);
  eleventyConfig.addPlugin(imageDimensions);
  eleventyConfig.addPlugin(safeLinks);
  eleventyConfig.addPlugin(serve404);
  eleventyConfig.addPlugin(sinisterSix);
  eleventyConfig.addPlugin(toc);
  eleventyConfig.addPlugin(qr);
  eleventyConfig.addPlugin(screenshot);
  eleventyConfig.addPlugin(beautify); /* Has to be last */
}
