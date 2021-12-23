const fs = require('fs');
const collections = require("./src/utils/collections");
const extensions = require("./src/utils/extensions");
const filters = require("./src/utils/filters");
const markdown = require("@higby/eleventy-markdown");
const shortcodes = require("./src/utils/shortcodes");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const transforms = require("./src/utils/transforms");

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
  
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("garden", "garden.njk");
  eleventyConfig.addLayoutAlias("page", "page.njk");

  eleventyConfig.addPlugin(collections);
  eleventyConfig.addPlugin(extensions);
  eleventyConfig.addPlugin(filters);
  eleventyConfig.addPlugin(markdown);
  eleventyConfig.addPlugin(shortcodes);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(transforms);

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
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
      includes: 'components',
      data: 'data'
    }
  };
};