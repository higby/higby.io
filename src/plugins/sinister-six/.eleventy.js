const markdownIt = require("markdown-it");

/* The Sinister Six */
const anchor = require('markdown-it-anchor');
const attrs = require('markdown-it-attrs');
const cite = require('./cite');
const footnote = require("markdown-it-footnote");
const figures = require('markdown-it-image-figures');
const mark = require("markdown-it-mark");

module.exports = function (eleventyConfig) {
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: false
  })
  .use(anchor, { tabIndex: false })
  .use(attrs)
  .use(cite)
  .use(footnote)
  .use(figures, { figcaption: true })
  .use(mark);
  eleventyConfig.setLibrary("md", markdownLibrary);
}
