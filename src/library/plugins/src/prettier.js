const prettier = require("prettier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform("prettier", function (content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      return prettier.format(content, { parser: "html" });
    }
  });
}
