const markdownIt = require("markdown-it");
const anchor = require("markdown-it-anchor");
const attrs = require("markdown-it-attrs");
const figures = require("markdown-it-image-figures");
const mark = require("markdown-it-mark");
const cite = require("./cite"); //https://github.com/dweidner/markdown-it-attribution/

const footnote = require("markdown-it-footnote"); //https://github.com/markdown-it/markdown-it-footnote/

module.exports = function (config) {
  let md = markdownIt({
    html: true,
    breaks: true,
    linkify: false,
  })
    .use(anchor, { tabIndex: false })
    .use(attrs)
    .use(cite)
    .use(footnote)
    .use(figures, { figcaption: true })
    .use(mark)
    .disable("code");

  md.renderer.rules.footnote_open = (tokens, idx, options, env, slf) => {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

    if (tokens[idx].meta.subId > 0) {
      id += ":" + tokens[idx].meta.subId;
    }

    return '<li id="fn' + id + '">';
  };

  md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
    var caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
    var refid = id;

    if (tokens[idx].meta.subId > 0) {
      refid += ":" + tokens[idx].meta.subId;
    }

    return (
      '<sup><a href="#fn' +
      id +
      '" id="fnref' +
      refid +
      '">' +
      caption +
      "</a></sup>"
    );
  };

  md.renderer.rules.footnote_block_open = () =>
    "<hr>\n" + '<section class="footnotes">\n' + "<ol>\n";

  md.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf) => {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

    if (tokens[idx].meta.subId > 0) {
      id += ":" + tokens[idx].meta.subId;
    }

    /* ↩ with escape code to prevent display as Apple Emoji on iOS */
    return ' <a href="#fnref' + id + '">\u21a9\uFE0E</a>';
  };

  config.setLibrary("md", md);
};
