module.exports = function (eleventy) {
  eleventy.addLiquidFilter("encodeurl", (url) => {
    return encodeURIComponent(url);
  });
}
