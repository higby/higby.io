const plugins = require('./src/config/plugins/index');

module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({ files: './build/css/**/*.css' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/static': '/' });
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
