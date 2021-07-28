const beautify = require('./plugins/beautify');
const imageDimensions = require('./plugins/image-dimensions');
const serve404 = require('./plugins/serve-404');
const sinisterSix = require('./plugins/sinister-six');
const toc = require('./plugins/toc');


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("site/favicon.ico");
    eleventyConfig.addPassthroughCopy("site/assets");
    eleventyConfig.addWatchTarget("./site/assets/");

    eleventyConfig.addPlugin(beautify);
    eleventyConfig.addPlugin(imageDimensions);
    eleventyConfig.addPlugin(serve404);
    eleventyConfig.addPlugin(sinisterSix);
    eleventyConfig.addPlugin(toc);

    return {
    dir: {
      input: "site",
      output: "build",
      layouts: "_layouts",
      includes: "_layouts/includes",
      data: "_layouts/data"
    }
  };
};
