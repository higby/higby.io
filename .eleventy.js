const collections = require("./utils/collections");
const filters = require("./utils/filters");
const transforms = require("./utils/transforms");
const shortcodes = require("./utils/shortcodes");
const markdown = require("./utils/markdown/index");
const extensions = require("./utils/extensions");

const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (config) {
  config.setQuietMode(true);
  config.setUseGitIgnore(false);

  config.ignores.add("src/_assets/");
  config.addWatchTarget("src/_assets/");
  config.addPassthroughCopy({ "src/_assets": "/" });
  config.setServerPassthroughCopyBehavior("copy");

  config.addLayoutAlias("base", "templates/base.njk");
  config.addLayoutAlias("page", "templates/page.njk");
  config.addLayoutAlias("post", "templates/post.njk");

  config.addPlugin(collections);
  config.addPlugin(filters);
  config.addPlugin(transforms);
  config.addPlugin(shortcodes);
  config.addPlugin(markdown);
  config.addPlugin(extensions);

  config.addPlugin(pluginRss);

  return {
    markdownTemplateEngine: "njk",
    jsDataFileSuffix: ".data",
    dir: {
      input: "src",
      output: "build",
      includes: "_components",
      data: "_data",
    },
  };
};
