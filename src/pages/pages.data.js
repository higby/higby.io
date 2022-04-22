module.exports = {
  layout: "page.njk",
  // This removes the first instance of the '/pages' portion for the output directory
  // Should a page include '/index' that isn't the final /index.html this will write incorrectly
  // To remedy this I need to find a way to replace( '/index' ) only the last instance (regex wasn't working)
  permalink: "{{ page.filePathStem | replace( '/pages', '', 1) | replace( '/index', '', 1) }}/",
};
