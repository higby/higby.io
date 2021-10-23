const { JSDOM } = require("jsdom");

async function safeLinks(content, outputPath) {
  if( outputPath && outputPath.endsWith(".html") ) {
    const dom = new JSDOM(content);
    const links = [...dom.window.document.querySelectorAll("a[href^='http://']:not([rel]),a[href^='https://']:not([rel])")];
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute('rel', 'noopener noreferrer');
    }
    content = dom.serialize();
  }
  return content;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("safeLinks", safeLinks);
};