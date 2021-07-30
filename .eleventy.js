const plugins = require('./src/config/plugins/index');

module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({ files: './build/assets/css/**/*.css' });
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addWatchTarget("./src/assets/");
  eleventyConfig.addPlugin(plugins);
  return {
    dir: {
      input: "src",
      output: "build",
      layouts: "config/layouts",
      includes: "config/layouts/includes",
      data: "config/data"
    }
  };
};
