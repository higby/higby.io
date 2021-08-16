const screenshot = require('./src/config/plugins/src/screenshot');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(screenshot);
  return {
    dir: {
      input: "src",
      output: "build",
      layouts: "config/layouts/opengraph",
      includes: "config/layouts/includes",
      data: "config/data"
    }
  };
};
