const qrcode = require("qrcode");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("qrcode", async function(url) {
    const code = await qrcode.toDataURL(url);
    return '<figure class="qr"><img width="164px" height="164px" src="' + code + '"></figure>'
  });
}