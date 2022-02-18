const markdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');
const attrs = require('markdown-it-attrs');
const figures = require('markdown-it-image-figures');
const mark = require('markdown-it-mark');
const cite = require('./cite'); //https://github.com/dweidner/markdown-it-attribution/
const footnote = require('./footnote'); //https://github.com/markdown-it/markdown-it-footnote/

module.exports = function (config) {

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
    .use(mark)
    .disable('code');

  config.setLibrary('md', markdownLibrary);
  
};