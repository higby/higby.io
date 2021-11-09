module.exports = function(eleventyConfig) {
    eleventyConfig.addPairedShortcode("encode", function(svg) {
        return encodeURIComponent(svg);
    });
};