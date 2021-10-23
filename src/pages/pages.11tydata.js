module.exports = {
  "layout": "base.liquid",
  "permalink": "{{ page.filePathStem | remove: 'pages/' | remove: 'garden/' }}/",
  "stylesheet": "main"
};
