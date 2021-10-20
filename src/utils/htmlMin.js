const htmlmin = require("html-minifier");

async function htmlMin(content, outputPath) {
  if( outputPath && outputPath.endsWith(".html") ) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: false,
      collapseWhitespace: true
    });
    return minified;
  }
  return content;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("htmlmin", htmlMin);
};