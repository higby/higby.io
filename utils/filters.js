const toc = require("@higby/eleventy-plugin-nesting-toc");
const moment = require("moment-timezone");

module.exports = function (config) {
  config.addFilter("dateCommon", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("MMM DD, YYYY");
  });

  // UTC
  /*config.addFilter("technical", (date) => {
    const utc = date.toUTCString();
    return moment
      .utc(utc)
      .tz("America/Los_Angeles")
      .format("YYYY-MM-DD, HH:mm:ss z");
  });*/

  config.addPlugin(toc, {
    wrapper: "details",
    wrapperClass: "",
    headingText: "Table of Contents",
    headingTag: "summary",
    headingPlacement: "inside",
  });
};
