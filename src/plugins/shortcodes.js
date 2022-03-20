module.exports = function (config) {

  config.addShortcode("OG", function (data) {
    return encodeURIComponent(`https://higby.io/og${data}`);
  });

  config.addPairedShortcode("encode", function (svg) {
    return encodeURIComponent(svg);
  });
  
};