module.exports = {
  "layout": "default.html",
  "permalink": "{{ page.filePathStem | remove: 'site/' | remove: 'garden/' }}/",
  "stylesheet": "main"
};
