const beautify = require("js-beautify").html;

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform("beautify", function (content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      return beautify(content, {
        indent_size: "2",
        max_preserve_newlines: "-1",
        preserve_newlines: false,
        keep_array_indentation: true,
        space_before_conditional: false,
        indent_inner_html: true,
        extra_liners: '',
        unformatted: "noscript"
      });
    }
    return content;
  });
}
