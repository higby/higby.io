const eliteFour = require('elite-four');

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('src/assets/static/');
  eleventyConfig.addPassthroughCopy({ 'src/assets/static': '/' });
  eleventyConfig.setLiquidOptions({ dynamicPartials: true });
  eleventyConfig.addPlugin(eliteFour);
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
