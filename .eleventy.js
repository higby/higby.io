const markdown = require('@higby/eleventy-markdown');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const fs = require('fs');
const collections = require('./src/utils/collections');
const filters = require('./src/utils/filters');
const shortcodes = require('./src/utils/shortcodes');
const transforms = require('./src/utils/transforms');

module.exports = function(eleventyConfig) {

  eleventyConfig.setQuietMode(true);
  eleventyConfig.setUseGitIgnore(false);
  
  eleventyConfig.addWatchTarget('src/assets/static/');
  eleventyConfig.addPassthroughCopy({ 'src/assets/static': '/' });

  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');
  eleventyConfig.addLayoutAlias('tags', 'tags.njk');

  eleventyConfig.addPlugin(collections);
  eleventyConfig.addPlugin(filters);
  eleventyConfig.addPlugin(shortcodes);
  eleventyConfig.addPlugin(transforms);
  eleventyConfig.addPlugin(markdown);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('build/404.html');
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    markdownTemplateEngine: "njk",
    jsDataFileSuffix: '.data',
    dir: { 
      input: 'src',
      output: 'build',
      layouts: 'components/templates',
      includes: 'components/includes',
      data: 'data'
    }
  };
};