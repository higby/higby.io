const { JSDOM } = require("jsdom");
const moment = require("moment-timezone");

module.exports = function (config) {
  config.addShortcode("currentPage", function (data) {
    const dom = new JSDOM(data);
    const localUrl = dom.window.document.querySelector("a").getAttribute("href");
    const localText = dom.window.document.querySelector("a").innerHTML;

    if (this.page.url == localUrl) {
      return `<span>${localText}</span>`;
    }
    return data;
  });

  config.addShortcode("OG", function (data) {
    return encodeURIComponent(`https://higby.io/og${data}`);
  });

  config.addShortcode("pageSize", function (data) {
    return "<code class='pageSize'>100kb</code>";
  });

  config.addShortcode("timeAgo", function (planted, tended) {
    if (tended != undefined) {
      var date = new Date(tended);
    } else {
      var date = new Date(planted);
    }
    var utc = date.toUTCString();
    utc = moment.utc(utc).tz("America/Los_Angeles").format();
    return `<time datetime='${utc}'>${moment(date).fromNow()}</time>`;
  });
};
