const extensions = require("./src/plugins/extensions");
const filters = require("./src/plugins/filters");
const transforms = require("./src/plugins/transforms");
const shortcodes = require("./src/plugins/shortcodes");
const collections = require("./src/plugins/collections");
const markdown = require("./src/plugins/markdown/index");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (config) {
  config.setQuietMode(true);

  config.addWatchTarget("src/assets/");
  config.addPassthroughCopy({ "src/assets": "/" });

  config.addPlugin(extensions);
  config.addPlugin(filters);
  config.addPlugin(transforms);
  config.addPlugin(shortcodes);
  config.addPlugin(collections);
  config.addPlugin(markdown);

  config.addPlugin(pluginRss);

  return {
    markdownTemplateEngine: "njk",
    jsDataFileSuffix: ".data",
    dir: {
      input: "src",
      output: "build",
      layouts: "templates",
      includes: "includes",
      data: "data",
    },
  };
};
