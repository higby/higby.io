const utilities = require('./src/utils/index');

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('src/assets/static/');
  eleventyConfig.addPassthroughCopy({ 'src/assets/static': '/' });
  eleventyConfig.addPlugin(utilities);
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setUseGitIgnore(false);
  return {
    dir: { 
      input: 'src',
      output: 'build',
      layouts: 'components/templates',
      includes: 'components',
      data: 'data'
    }
  };
};