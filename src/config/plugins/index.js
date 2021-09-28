const dates = require('./src/dates');
const encodeUrl = require('./src/encodeurl');
const imageDimensions = require('./src/image-dimensions');
const minify = require('./src/minify');
const safeLinks = require('./src/safeLinks');
const serve404 = require('./src/serve404');
const sinisterSix = require('./src/sinister-six');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const toc = require('./src/toc');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(dates);
  eleventyConfig.addPlugin(encodeUrl);
  eleventyConfig.addPlugin(imageDimensions);
  eleventyConfig.addPlugin(safeLinks);
  eleventyConfig.addPlugin(serve404);
  eleventyConfig.addPlugin(sinisterSix);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(toc);
  eleventyConfig.addPlugin(minify); /* Has to be last */
}
