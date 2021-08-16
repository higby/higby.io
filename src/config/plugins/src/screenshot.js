const puppeteer = require('puppeteer');
const fs = require("fs");
const { JSDOM } = require("jsdom");

module.exports = function (eleventyConfig) {
  eleventyConfig.addLinter("screenshots", async function(content, outputPath) {

    const dom = new JSDOM(content);
    const link = dom.window.document.querySelector("body").getAttribute('data-attribute');
    const path = link.split('/').pop();
    if (!fs.existsSync("src/assets/images/" + path)){
      fs.mkdirSync("src/assets/images/" + path);
    }

    if( link && outputPath.endsWith(".md") ) {
      const browser = await puppeteer.launch({defaultViewport: null});
      const page = await browser.newPage();

      await page.setViewport({ width: 1200, height: 630 });
      await page.setContent(content);
      await page.screenshot({ path: 'src/assets/images/' + link + '.png' });
      await browser.close();
    }
  });
}
