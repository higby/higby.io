const beautify = require('js-beautify').html;

async function beautifyHTML(content, outputPath) {
  if( outputPath && outputPath.endsWith(".html") ) {
  let formatted = beautify(content, {"indent_size": "1", "indent_char": "\t", "max_preserve_newlines": "-1", "preserve_newlines": false, "keep_array_indentation": false, "break_chained_methods": false, "indent_scripts": "normal", "brace_style": "collapse", "space_before_conditional": true, "unescape_strings": false, "jslint_happy": false, "end_with_newline": false, "wrap_line_length": "110", "indent_inner_html": true, "comma_first": false, "e4x": false, "indent_empty_lines": false });
  return formatted;
  }
  return content;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform("beautifyHTML", beautifyHTML);
}
