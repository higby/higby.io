const puppeteer = require('puppeteer');
const fs = require("fs");
const { JSDOM } = require("jsdom");

module.exports = function (eleventyConfig) {
  eleventyConfig.addLinter("screenshots", async function(content, outputPath) {

    const dom = new JSDOM(content);
    var link = dom.window.document.querySelector("body").getAttribute('data-attribute').split('/');
    var path = link.pop();
    link = link.join("/");
    if (!fs.existsSync("src/assets/images/" + link)){
      fs.mkdirSync("src/assets/images/" + link);
    }

    if( link && outputPath.endsWith(".md") ) {
      const browser = await puppeteer.launch({defaultViewport: null});
      const page = await browser.newPage();

      await page.setViewport({ width: 1200, height: 630 });
      await page.setContent(content);
      await page.screenshot({ path: 'src/assets/images/' + link + '/' + path + '.png' });
      await browser.close();
    }
  });
}
