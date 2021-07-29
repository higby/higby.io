const plugins = require('./src/library/plugins');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/static": "/" });
    eleventyConfig.addWatchTarget("./src/static/");
    eleventyConfig.addPlugin(plugins);

    return {
    dir: {
      input: "src",
      output: "build",
      layouts: "library/layouts",
      includes: "library/includes",
      data: "library/data"
    }
  };
};
