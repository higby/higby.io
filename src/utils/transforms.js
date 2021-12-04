const images = require("@higby/eleventy-images");
const links = require("@higby/eleventy-links");
const htmlmin = require("html-minifier");

async function htmlMin(content, outputPath) {
  if (outputPath && outputPath.endsWith(".html")) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });
    return minified;
  }
  return content;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(images);
  eleventyConfig.addPlugin(links);
  eleventyConfig.addTransform("htmlmin", htmlMin);
};
