const puppeteer = require('puppeteer');
const fs = require("fs");
const { JSDOM } = require("jsdom");

module.exports = function (eleventyConfig) {
  eleventyConfig.addLinter("screenshots", async function(content, outputPath) {

    const dom = new JSDOM(content);
    const link = [...dom.window.document.querySelector("link[rel='canonical']").href];

    console.log(link);

    if (!fs.existsSync("build/assets/images/opengraph")){
      fs.mkdirSync("build/assets/images/opengraph");
    }

    if( outputPath && outputPath.endsWith(".html") ) {
      const browser = await puppeteer.launch({defaultViewport: null});
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 600 });
      await page.setContent(content);
      await page.screenshot({ path: 'build/assets/images/opengraph/' + "test" + '.png' });
      await browser.close();
    }
  });
}
