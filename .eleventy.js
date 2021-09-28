const plugins = require('./src/config/plugins/index');

module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addWatchTarget('src/assets/static/');
  eleventyConfig.addPassthroughCopy({ 'src/assets/static': '/' });
  eleventyConfig.setLiquidOptions({ dynamicPartials: true });
  eleventyConfig.addPlugin(plugins);
  return {
    dir: { 
      input: 'src',
      output: 'build',
      layouts: 'config/layouts',
      includes: 'config/layouts/includes',
      data: 'config/data'
    }
  };
};
