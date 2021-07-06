module.exports = function(eleventyConfig) {

    return {
    dir: {
      input: "site",
      output: "build",
      layouts: "_layouts",
      includes: "_layouts/includes",
      data: "_layouts/data"
    }
  };
};
