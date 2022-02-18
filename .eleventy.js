const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const fs = require('fs');
const collections = require("./src/plugins/collections");
const extensions = require("./src/plugins/extensions");
const filters = require("./src/plugins/filters");
const markdown = require("./src/plugins/markdown/index");
const shortcodes = require("./src/plugins/shortcodes");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const transforms = require("./src/plugins/transforms");

module.exports = function (config) {

  config.setQuietMode(true);
  config.setUseGitIgnore(false);

  config.addWatchTarget("src/assets/");
  config.addPassthroughCopy({ "src/assets": "/" });

  config.addLayoutAlias("base", "base.njk");
  config.addLayoutAlias("garden", "garden.njk");
  config.addLayoutAlias("page", "page.njk");

  config.addPlugin(collections);
  config.addPlugin(extensions);
  config.addPlugin(filters);
  config.addPlugin(markdown);
  config.addPlugin(shortcodes);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(transforms);
  //config.addPlugin(directoryOutputPlugin);

  config.setBrowserSyncConfig({
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
      layouts: 'templates',
      includes: 'components',
      data: 'data'
    }
  };
};
