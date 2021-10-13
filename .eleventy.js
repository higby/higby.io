const eliteFour = require('elite-four');

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('src/assets/static/');
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy({ 'src/assets/static': '/' });
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
