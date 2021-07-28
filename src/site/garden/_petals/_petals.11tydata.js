module.exports = {
  eleventyComputed: {
    tags: data => [...data.tags, "petals"]
  }
};
