module.exports = {
  eleventyComputed: {
    tags: data => ["petals", ...data.tags]
  }
};
