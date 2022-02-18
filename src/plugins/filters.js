const toc = require("@higby/eleventy-plugin-nesting-toc");
const moment = require("moment-timezone");

module.exports = function (config) {

  config.addFilter("common", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("MMM DD, YYYY");
  });

  config.addFilter("relative", (date) => {
    const utc = date.toUTCString();
    return moment(utc).fromNow();
  });

  config.addFilter("technical", (date) => {
    const utc = Date.now();
    return moment
      .utc(utc)
      .tz("America/Los_Angeles")
      .format("YYYY-MM-DD, HH:mm:ss z");
  });

  config.addFilter("datetime", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).tz("America/Los_Angeles").format();
  });

  config.addPlugin(toc, {
    wrapper: "details",
    wrapperClass: "",
    headingText: "Table of Contents",
    headingTag: "summary",
    headingPlacement: "inside",
  });

};
