const imageSizes = (eleventyConfig) => {
  const { JSDOM } = require("jsdom");
  const sharp = require('sharp');
  const fetch = require('node-fetch');
  eleventyConfig.addShortcode("image", imageStructure);
  function imageStructure(src, alt, width) {
    if ( width != undefined ) {
figure = "<figure style='width:" + width + "'><img src='" + src +"' alt='" + alt +"'/></figure>";
    }
    else {
figure = "<figure><img src='" + src +"' alt='" + alt +"'/></figure>";
    }
    return figure;
  }
  eleventyConfig.addTransform("imageSizes", imageData);
  async function imageData(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
const dom = new JSDOM(content);
const images = [...dom.window.document.querySelectorAll("img")];
for (var i = 0; i < images.length; i++) {
  let src = images[i].src;
  if (src.startsWith('http')) {
    const res = await fetch(src);
    const buffer = await res.buffer();
    elem = await sharp(buffer).metadata();
  }
  else {
    let url = "./site/" + src;
    elem = await sharp(url).metadata();
  }
  images[i].setAttribute('loading', 'lazy');
  images[i].setAttribute('width', elem.width);
  images[i].setAttribute('height', elem.height);
}
content = dom.serialize();
    }
    return content;
  }
}

const beautifyHTML = (eleventyConfig) => {
  const beautify = require('js-beautify').html;
  eleventyConfig.addTransform("beautifyHTML", beautifyHTML);
  async function beautifyHTML(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
    let formatted = beautify(content, {"indent_size": "1", "indent_char": "\t", "max_preserve_newlines": "-1", "preserve_newlines": false, "keep_array_indentation": false, "break_chained_methods": false, "indent_scripts": "normal", "brace_style": "collapse", "space_before_conditional": true, "unescape_strings": false, "jslint_happy": false, "end_with_newline": false, "wrap_line_length": "110", "indent_inner_html": true, "comma_first": false, "e4x": false, "indent_empty_lines": false });
    return formatted;
    }
    return content;
  }
}
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("site/favicon.ico");
    eleventyConfig.addPassthroughCopy("site/assets");
    eleventyConfig.addWatchTarget("./site/assets/");
    eleventyConfig.addPlugin(imageSizes);
    eleventyConfig.addPlugin(beautifyHTML);
    return {
    dir: {
input: "site",
output: "build",
layouts: "_layouts",
includes: "_layouts/includes",
data: "_layouts/data"
    }
  };
};
