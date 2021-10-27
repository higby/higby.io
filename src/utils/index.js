const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const fs = require("fs");
const moment = require("moment-timezone");
const markdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');
const attrs = require('markdown-it-attrs');
const figures = require('markdown-it-image-figures');
const mark = require('markdown-it-mark');
const toc = require('@higby/eleventy-plugin-nesting-toc');
const cite = require('./cite');
const footnote = require('./footnote');
const htmlMin = require('./htmlMin');
const images = require('./images');
const safeLinks = require('./safeLinks');
//const qr = require('./qr');

module.exports = function (eleventyConfig) {
  // Serve 404 during development
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('build/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  // Assets
  eleventyConfig.addPlugin(htmlMin);
  eleventyConfig.addPlugin(images);
  eleventyConfig.addPlugin(safeLinks);
  //eleventyConfig.addPlugin(qr);
  
  // Transforms
  eleventyConfig.addPlugin(toc, {
    wrapper: 'details',
    wrapperClass: '',
    headingText: 'Table of Contents', 
    headingTag: 'summary',     
    headingPlacement: 'inside'
  });
  eleventyConfig.addFilter("common", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("MMM DD, YYYY");
  })
  eleventyConfig.addFilter("technical", (date) => {
    const utc = Date.now();
    return moment.utc(utc).tz('America/Los_Angeles').format("YYYY-MM-DD, HH:mm:ss z");
  })
  eleventyConfig.addFilter("datetime", (date) => {
    const utc = Date.now();
    return moment.utc(utc).tz('America/Los_Angeles').format();
  })
  eleventyConfig.addFilter("encodeurl", (url) => {
    return encodeURIComponent(url);
  })

  // Markdown
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
  eleventyConfig.setLibrary('md', markdownLibrary);

  // Syntax Highlighting
  eleventyConfig.addPlugin(syntaxHighlight);
}