module.exports = {
  "layout": "default.html",
  "permalink": "{{ page.filePathStem | remove: 'pages/' | remove: 'garden/' }}/",
  "stylesheet": "main"
};
