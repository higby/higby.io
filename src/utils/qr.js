const qrcode = require("qrcode");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("qrcode", async function(url) {
    const code = await qrcode.toDataURL(url, {
      width: '128',
      margin: '0',
    });
    return '<figure class="qr"><img width="128px" height="128px" src="' + code + '"></figure>'
  });
}