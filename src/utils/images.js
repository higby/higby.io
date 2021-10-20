const { JSDOM } = require("jsdom");
const sharp = require('sharp');
const fetch = require('node-fetch');

async function imageData(content, outputPath) {
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
          console.log("Couldn't get image over HTTPS \n" + err);
          break;
        }
      }
      else {
        try {
          let url = "./src/assets/static" + src;
          elem = await sharp(url).metadata();
        }
        catch(err) {
          console.log("Couldn't get local image \n" + err);
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
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("imageSizes", imageData);
};