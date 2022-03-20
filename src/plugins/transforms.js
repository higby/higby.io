const advanced = require('cssnano-preset-advanced');
const cssnano = require('cssnano');
const fetch = require('node-fetch');
const htmlmin = require("html-minifier");
const { JSDOM } = require("jsdom");
const moment = require("moment-timezone");
const { PurgeCSS } = require('purgecss');
const sharp = require('sharp');


module.exports = function (config) {

  config.addTransform("htmlMin", async function(content, outputPath) { 
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

 config.addTransform("images", async function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      const dom = new JSDOM(content);
      const images = [...dom.window.document.querySelectorAll("img:not([width]):not([height])")];
      for (var i = 0; i < images.length; i++) {
        let src = images[i].src;
        if (src.startsWith('http')) {
          try {
            const res = await fetch(src);
            const buffer = await res.buffer();
            elem = await sharp(buffer).metadata();
          }
          catch(err) {
            console.log(outputPath + ": Couldn't find image over HTTPS (" + src + ")");
            break;
          }
        }
        else {
          try {
            let url = "./src/assets" + src;
            elem = await sharp(url).metadata();
          }
          catch(err) {
            console.log(outputPath + ": Couldn't find local image (" + src + ")");
            break;
          }   
        }
        images[i].setAttribute('loading', 'lazy');
        images[i].setAttribute('width', elem.width);
        images[i].setAttribute('height', elem.height);
      }
      content = dom.serialize();
    }
    return content;
  });

  config.addTransform("safeLinks", async function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      const dom = new JSDOM(content);
      const links = [...dom.window.document.querySelectorAll("a[href^='http://']:not([rel]),a[href^='https://']:not([rel])")];
      for (var i = 0; i < links.length; i++) {
        links[i].setAttribute('rel', 'noopener noreferrer');
      }
      content = dom.serialize();
    }
    return content;
  });

  config.addTransform("timeAgo", async function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      const dom = new JSDOM(content);
      const timeTags = [...dom.window.document.querySelectorAll("time[transform]")];

      for (var i = 0; i < timeTags.length; i++) {
        const date = new Date(timeTags[i].innerHTML);
        timeTags[i].innerHTML = moment(date).fromNow();
        timeTags[i].removeAttribute("transform");
      }
      content = dom.serialize();
    }
    return content;
  });

  config.addTransform("purgeCSS", async function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      const dom = new JSDOM(content);
      const raw = dom.window.document.querySelector("style").innerHTML;
      dom.window.document.querySelector("style").innerHTML = '';
      content = dom.serialize();

      const purgeCSSResults = await new PurgeCSS().purge({
        content: [{ raw: content, extension: 'html' }],
        css: [{ raw: raw }]
      });

      await cssnano({
        from: undefined,
        preset: advanced
      })
      .process(purgeCSSResults[0].css, {from: undefined})
      .then(result => {
        testVar = result.css;
        dom.window.document.querySelector("style").innerHTML = result.css;
        content = dom.serialize();
      });
    }
    return content;
  });

  config.addTransform("pageSize", async function(content, outputPath) { 

    if( outputPath && outputPath.endsWith(".html") ) {
      // https://github.com/11ty/eleventy-plugin-directory-output/blob/main/.eleventy.js
      let sizeStr = (content.length / 1000).toFixed(1) + "kB";
      const dom = new JSDOM(content);
      const tags = [...dom.window.document.querySelectorAll("span.pagesize")];
      for (var i = 0; i < tags.length; i++) {
        tags[i].innerHTML = sizeStr;
        tags[i].removeAttribute("class"); 
      }
      content = dom.serialize();
    }
    return content;
  });
  
};
