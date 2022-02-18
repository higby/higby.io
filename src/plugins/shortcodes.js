module.exports = function (config) {

  config.addPairedShortcode("encode", function (svg) {
    return encodeURIComponent(svg);
  });
  
};